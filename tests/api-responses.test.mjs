import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function loadModule(file, imports, extras = {}) {
  const source = readFileSync(file, 'utf8').replaceAll(
    'import.meta.env',
    "({ DEV: false, VITE_API_URL: '/api' })",
  );
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, require: (id) => imports[id], ...extras });
  return exports;
}

const article = {
  id: 1,
  title: 'News',
  slug: 'news',
  summary: 'Summary',
  content: 'Body',
  category: 'Corporate',
  status: 'published',
};

test('news rejects HTML and invalid detail responses; filters malformed articles', async () => {
  let data;
  const { newsAPI } = loadModule('src/services/newsApi.ts', {
    '@/services/api': { default: { get: async () => ({ data }) } },
  });
  for (const invalid of ['<!doctype html><html></html>', null, { error: 'unavailable' }]) {
    data = invalid;
    await assert.rejects(newsAPI.getPublished(), /invalid article list/);
    await assert.rejects(newsAPI.getBySlug('missing'), /invalid article/);
  }
  data = [article, null, {}, { ...article, publishedDate: {} }];
  assert.equal((await newsAPI.getPublished()).length, 1);
  data = article;
  assert.equal((await newsAPI.getBySlug('news')).title, 'News');
});

test('API rejects SPA HTML, malformed lists and invalid authentication responses', async () => {
  let responseHandler;
  let data;
  const instance = {
    interceptors: {
      request: { use() {} },
      response: {
        use(handler) {
          responseHandler = handler;
        },
      },
    },
    post: async () => ({ data }),
    get: async () => ({ data }),
  };
  const { authAPI, getFileUrl } = loadModule(
    'src/services/api.ts',
    {
      axios: { default: { create: () => instance } },
    },
    { localStorage: { getItem: () => null, removeItem() {} } },
  );
  const response = (value, url = '/companies') => ({ data: value, config: { method: 'get', url } });
  assert.throws(() => responseHandler(response('<html>SPA</html>')), /invalid response/);
  assert.throws(() => responseHandler(response({})), /invalid list/);
  assert.throws(() => responseHandler(response([null])), /invalid records/);
  assert.throws(() => responseHandler(response([{ title: null }], '/products')), /invalid product/);
  assert.equal(responseHandler(response([])).data.length, 0);
  data = {};
  await assert.rejects(authAPI.login({ username: 'admin', password: 'test' }), /invalid response/);
  await assert.rejects(authAPI.verify(), /could not be verified/);
  data = { token: 'valid-token', user: { username: 'admin' } };
  assert.equal((await authAPI.login({ username: 'admin', password: 'test' })).token, 'valid-token');
  assert.equal(getFileUrl('/uploads/logo.png'), '/uploads/logo.png');
});
