import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { randomBytes } from 'node:crypto';

mkdirSync('tmp', { recursive: true });
const work = mkdtempSync(resolve('tmp/final-backend-'));
let server, base, token;
const password = 'Isolated-test-password-123!';
async function request(path, { method = 'GET', data, authenticated = true, body } = {}) {
  const response = await fetch(`${base}/api${path}`, {
    method,
    headers: {
      ...(authenticated && token ? { Authorization: `Bearer ${token}` } : {}),
      ...(data ? { 'Content-Type': 'application/json' } : {}),
    },
    body: data ? JSON.stringify(data) : body,
  });
  const result = await response.json();
  return { status: response.status, data: result };
}

before(async () => {
  server = spawn(process.execPath, ['server/index.js'], {
    env: {
      ...process.env,
      NODE_ENV: 'production',
      PORT: '0',
      JWT_SECRET: randomBytes(48).toString('hex'),
      ADMIN_PASSWORD: password,
      DATABASE_PATH: join(work, 'database.sqlite'),
      UPLOAD_DIR: join(work, 'uploads'),
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  await new Promise((resolveReady, reject) => {
    let output = '';
    const timer = setTimeout(() => reject(new Error(`Server did not start: ${output}`)), 15000);
    server.on('exit', (code) => {
      clearTimeout(timer);
      reject(new Error(`Server exited ${code}: ${output}`));
    });
    server.stderr.on('data', (chunk) => {
      output += chunk;
    });
    server.stdout.on('data', (chunk) => {
      output += chunk;
      const match = output.match(/Server is running on http:\/\/localhost:(\d+)/);
      if (match) {
        base = `http://127.0.0.1:${match[1]}`;
        clearTimeout(timer);
        resolveReady();
      }
    });
  });
});
after(() => server?.kill());

test('startup respects isolated data paths and unknown API routes return JSON', async () => {
  assert.equal((await request('/health')).status, 200);
  assert.equal((await request('/missing')).status, 404);
  assert.ok(existsSync(join(work, 'database.sqlite')));
  assert.ok(existsSync(join(work, 'uploads')));
});

test('authentication rejects bad credentials and verifies a real session', async () => {
  assert.equal(
    (await request('/auth/login', { method: 'POST', data: { username: [], password: {} } })).status,
    400,
  );
  assert.equal(
    (
      await request('/auth/login', {
        method: 'POST',
        data: { username: 'admin', password: 'wrong' },
      })
    ).status,
    401,
  );
  assert.equal(
    (await request('/companies', { method: 'POST', data: {}, authenticated: false })).status,
    401,
  );
  const signedIn = await request('/auth/login', {
    method: 'POST',
    data: { username: 'admin', password },
  });
  assert.equal(signedIn.status, 200);
  token = signedIn.data.token;
  assert.equal((await request('/auth/verify')).data.valid, true);
  const invalid = await fetch(`${base}/api/auth/verify`, {
    headers: { Authorization: 'Bearer invalid' },
  });
  assert.equal(invalid.status, 401);
});

test('company CRUD and upload work with the configured storage', async () => {
  const form = new FormData();
  const fields = {
    id: 'release-test',
    name: 'Release Company',
    shortName: 'Release',
    description: 'Summary',
    fullDescription: 'Full company profile.',
    industry: 'Manufacturing',
    features: '["Quality"]',
  };
  for (const [key, value] of Object.entries(fields)) form.set(key, value);
  form.set(
    'image',
    new Blob(
      [
        Buffer.from(
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jMZkAAAAASUVORK5CYII=',
          'base64',
        ),
      ],
      { type: 'image/png' },
    ),
    'test.png',
  );
  const created = await request('/companies', { method: 'POST', body: form });
  assert.equal(created.status, 201);
  assert.deepEqual(created.data.features, ['Quality']);
  const image = await fetch(base + created.data.imageUrl);
  assert.equal(image.status, 200);
  assert.equal(image.headers.get('content-type'), 'image/png');
  assert.equal((await request('/companies/release-test')).data.name, fields.name);
  const update = new FormData();
  for (const [key, value] of Object.entries({ ...fields, name: 'Updated Company' }))
    update.set(key, value);
  assert.equal(
    (await request('/companies/release-test', { method: 'PUT', body: update })).data.name,
    'Updated Company',
  );
  assert.equal((await request('/companies/release-test', { method: 'DELETE' })).status, 200);
  assert.equal((await request('/companies/release-test')).status, 404);
});

test('categories, product variations, validation and deletion work together', async () => {
  const category = await request('/categories', {
    method: 'POST',
    data: { name: 'Release Category', isActive: true },
  });
  assert.equal(category.status, 201);
  const form = new FormData();
  for (const [key, value] of Object.entries({
    title: 'Release Product',
    price: '0',
    categoryId: String(category.data.id),
    isVariable: 'true',
    variations: '[{"name":"Standard","price":15}]',
  }))
    form.set(key, value);
  const created = await request('/products', { method: 'POST', body: form });
  assert.equal(created.status, 201);
  assert.equal(created.data.variations[0].price, 15);
  assert.equal(
    (await request(`/categories/${category.data.id}`, { method: 'DELETE' })).status,
    400,
  );
  const update = new FormData();
  update.set('title', 'Updated Product');
  update.set('variations', '[{"name":"New","price":25}]');
  const changed = await request(`/products/${created.data.id}`, { method: 'PUT', body: update });
  assert.equal(changed.status, 200);
  assert.equal(changed.data.variations[0].price, 25);
  assert.equal(changed.data.categoryId, category.data.id);
  const bad = new FormData();
  bad.set('title', 'Invalid');
  bad.set('price', '-1');
  assert.equal((await request('/products', { method: 'POST', body: bad })).status, 400);
  const invalidUpdate = new FormData();
  invalidUpdate.set('title', 'Must not be saved');
  invalidUpdate.set('variations', '[{"name":"Bad","price":-5}]');
  assert.equal(
    (await request(`/products/${created.data.id}`, { method: 'PUT', body: invalidUpdate })).status,
    400,
  );
  assert.equal((await request(`/products/${created.data.id}`)).data.title, 'Updated Product');
  assert.equal((await request(`/products/${created.data.id}`, { method: 'DELETE' })).status, 200);
  assert.equal(
    (await request(`/categories/${category.data.id}`, { method: 'DELETE' })).status,
    200,
  );
});

test('brand upload, visibility, update and deletion work', async () => {
  const body = new FormData();
  body.set('name', 'Release Brand');
  body.set(
    'logo',
    new Blob(
      [
        Buffer.from(
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jMZkAAAAASUVORK5CYII=',
          'base64',
        ),
      ],
      { type: 'image/png' },
    ),
    'brand.png',
  );
  const created = await request('/brands', { method: 'POST', body });
  assert.equal(created.status, 201);
  assert.equal((await request('/brands')).data.length, 1);
  const edit = new FormData();
  edit.set('name', 'Updated Brand');
  edit.set('isActive', 'false');
  assert.equal(
    (await request(`/brands/${created.data.id}`, { method: 'PUT', body: edit })).status,
    200,
  );
  assert.equal((await request('/brands')).data.length, 0);
  assert.equal((await request('/brands/all')).data.length, 1);
  assert.equal((await request(`/brands/${created.data.id}`, { method: 'DELETE' })).status, 200);
});

test('production refuses an insecure authentication secret', () => {
  const result = spawnSync(
    process.execPath,
    ['--input-type=module', '-e', "await import('./server/config.js')"],
    {
      env: { ...process.env, NODE_ENV: 'production', JWT_SECRET: 'short' },
      encoding: 'utf8',
    },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Set JWT_SECRET/);
});

test('drafts and future articles stay private; published articles can be updated and removed', async () => {
  const create = async (status, date) => {
    const form = new FormData();
    for (const [key, value] of Object.entries({
      title: 'Release News',
      summary: 'Summary',
      content: 'Article body',
      status,
      ...(date ? { publishedDate: date } : {}),
    }))
      form.set(key, value);
    return request('/news', { method: 'POST', body: form });
  };
  const draft = await create('draft');
  const future = await create('published', '2099-01-01T00:00:00Z');
  const article = await create('published');
  assert.equal(article.status, 201);
  assert.equal((await request('/news')).data.length, 1);
  assert.equal((await request(`/news/${draft.data.slug}`)).status, 404);
  assert.equal((await request(`/news/${future.data.slug}`)).status, 404);
  assert.equal((await request(`/news/${article.data.slug}`)).status, 200);
  const edit = new FormData();
  edit.set('title', 'Updated News');
  edit.set('status', 'draft');
  assert.equal(
    (await request(`/news/${article.data.id}`, { method: 'PUT', body: edit })).status,
    200,
  );
  assert.equal((await request('/news')).data.length, 0);
  for (const item of [draft, future, article])
    assert.equal((await request(`/news/${item.data.id}`, { method: 'DELETE' })).status, 200);
});

test('bad uploads and malformed requests receive useful JSON errors', async () => {
  const body = new FormData();
  body.set('logo', new Blob(['bad'], { type: 'text/plain' }), 'bad.txt');
  assert.equal((await request('/brands', { method: 'POST', body })).status, 400);
  const response = await fetch(`${base}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{invalid',
  });
  assert.equal(response.status, 400);
  assert.ok((await response.json()).error);
});

test('password change validates input and requires the current password', async () => {
  assert.equal(
    (
      await request('/auth/change-password', {
        method: 'POST',
        data: { currentPassword: password, newPassword: 'short' },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request('/auth/change-password', {
        method: 'POST',
        data: { currentPassword: 'wrong', newPassword: password + 'new' },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request('/auth/change-password', {
        method: 'POST',
        data: { currentPassword: password, newPassword: password + 'new' },
      })
    ).status,
    200,
  );
  assert.equal((await request('/auth/verify')).status, 401);
  assert.equal(
    (await request('/auth/login', { method: 'POST', data: { username: 'admin', password } }))
      .status,
    401,
  );
  assert.equal(
    (
      await request('/auth/login', {
        method: 'POST',
        data: { username: 'admin', password: password + 'new' },
      })
    ).status,
    200,
  );
});
