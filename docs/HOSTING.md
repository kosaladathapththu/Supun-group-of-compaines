# Hosting package — 10 November 2026

## Static hosting (Apache / cPanel)

Extract `supun-static-hosting.zip` into the domain's document root (usually
`public_html`). `index.html`, `.htaccess` and `assets/` must be directly inside
that root. Enable HTTPS. Apache must allow the included rewrite rules for direct
page links. For Nginx, use `try_files $uri $uri/ /index.html;`.

This package displays the public site's built-in content. Admin login, database
editing and API news require the Node backend. Contact and career forms open an
email draft in the visitor's email app.

## Full website with admin (Node hosting / VPS)

Extract `supun-full-hosting.zip` into a private application directory, outside
the public document root. Use Node.js 22.18 or newer and run commands there:

1. Copy `.env.production.example` to `.env`.
2. Set a unique random `JWT_SECRET` of at least 32 characters and an
   `ADMIN_PASSWORD` of at least 12 characters. Set the admin email and allowed
   production origins. Keep `.env` private.
3. Run `npm ci --omit=dev`. Install dependencies on the target server; native
   SQLite modules must match its operating system and Node version.
4. For a fresh installation, run `npm run server:prod` once to initialize the
   database, then stop it. Run `npm run db:sync-frontend` to import the built-in
   content. Do not run this import against existing content without reviewing it.
5. Start `npm run server:prod` under your host's process manager, with working
   directory set to the extracted application directory.
6. Configure an HTTPS reverse proxy to `127.0.0.1:3001` (or your configured
   `PORT`). Proxy all paths, including `/api` and `/uploads`. The Node server
   serves the included `dist/` build and handles direct page links.

The full package includes prebuilt `dist/`, backend code, dependency lockfile,
configuration example and existing uploaded image assets. It excludes local
databases, credentials, `.env`, `node_modules` and Git history. For an existing
installation, retain/restore its SQLite database using a SQLite-aware backup
and preserve uploads. Configure persistent `DATABASE_PATH` and `UPLOAD_DIR`;
copy supplied upload assets into that directory when using a custom location.
Never overwrite existing production data with a fresh database.

After installation, check `/api/health`, admin login, company/product content,
uploads, direct page links and the footer logo link on desktop and mobile.
The footer links to `https://it.supuncompanies.com`.

The production build and TypeScript checks passed locally. Hosting configuration
and browser appearance still require verification on the target host. No live
deployment or DNS changes have been made.
