# Supun Group website V2

React/TypeScript public website with an Express/SQLite administration API.

## Development

Use Node.js 22.18 or newer (Node 24 was used for release verification).

1. Run npm ci.
2. Copy .env.example to .env and configure your local settings.
3. Run npm run dev and npm run server:dev in separate terminals.

## Checks

- npm run typecheck
- npm test
- npm run lint
- npm run build

Tests use temporary databases and uploads under tmp/. They do not modify the working website database.

## Production

See [the V2 readiness record](docs/RELEASE_READINESS.md) for the final changes, validation and deployment requirements.

The production frontend uses /api by default. A static dist/ upload runs the public website with built-in content; the admin panel and database updates require a running Node API. Configure the same-origin /api and /uploads routes, or set VITE_API_URL to an HTTPS backend URL before building.

Copy .env.production.example to .env and set a unique JWT_SECRET and first-administrator ADMIN_PASSWORD. Start the backend with npm run server:prod. A production backend serves dist/ when present, so it can also run the complete site behind an HTTPS reverse proxy.

For a new database, npm run db:sync-frontend imports the existing company, product, category and brand content without overwriting existing records. It respects DATABASE_PATH and UPLOAD_DIR. Back up the database and uploads before running any setup against existing hosting.

Contact and career forms prepare an email in the visitor's email application; they do not send email from the server.

The scripts build-production.sh and deploy.sh prepare local build files. They do not change DNS, install server software or alter running VPS services.

Hosting ZIPs are available in `tmp/hosting/`. See [hosting instructions](docs/HOSTING.md) for static and full Node hosting setup.
