# Supun Group V2 — final local release

Version: 2.0.0. Branch: website-v2. Reviewed: 4 November 2026.

This is the stabilized system before hosting preparation. No new hosting ZIP or live deployment was made in this stage.

## Corrections included

- White backgrounds and defined cards on the company, careers and contact pages; aligned, responsive contact form.
- News/API response validation prevents HTML fallback responses from crashing the site. Article requests have timeouts and invalid articles receive the normal unavailable state.
- Public company navigation, directory, detail pages, homepage cards and contact directory now use admin database records when the API is available. Built-in profiles remain available when the API is unavailable.
- Active brand logos are displayed on the homepage. The animation cancels correctly, pauses for interaction and respects reduced-motion preferences.
- The product catalogue respects a valid empty API list rather than restoring deleted products from built-in content. Product descriptions and categories use database values.
- Admin login and token verification reject malformed responses. Dashboard counts show an unavailable state instead of a misleading zero when requests fail. Corrupt stored user information does not crash the admin layout.
- Password changes validate length, require the current password and revoke existing sessions. Production requires a unique JWT secret and an explicit first-admin password. Login attempts are limited.
- Database and upload paths respect environment configuration. Database indexes are created after legacy column migrations. SQLite uses WAL and a busy timeout.
- Product changes and variations save in one transaction. Invalid prices, variations and company lists are rejected before saving. Partial product edits preserve the category and article/product edits preserve existing slugs unless changed explicitly.
- Uploads use generated filenames and supported extensions, with JSON errors for invalid/oversized uploads. Upload responses use restrictive browser headers.
- API routes return JSON 404s; missing built assets return 404s. A route error recovery screen replaces an otherwise blank page.
- Section links wait for lazy page content before scrolling. The admin dashboard header now identifies the dashboard correctly.
- Build scripts preserve existing environment files and data, and do not change VPS services.

## Verification

- TypeScript check and production build passed.
- ESLint passed with zero errors; seven existing UI-library Fast Refresh warnings remain.
- Automated tests cover invalid API responses, authentication, session invalidation, company CRUD/uploads, category/product CRUD and variations, brand visibility, publication scheduling, malformed requests and unsafe production configuration.
- Browser checks at 1440 px and 390 px covered 11 public routes and 16 admin routes at each size. No JavaScript crashes, broken public images or document-wide horizontal overflow were found.
- Browser login and category creation were exercised against an isolated database. Final targeted checks cover publishing an article, company data reaching public pages, company filtering and mobile section navigation.
- All test data lives under ignored tmp/ directories. Existing application data and uploads were preserved.

## Hosting requirements for the next stage

1. Choose the frontend/API locations. A static website ZIP alone cannot run the Node API or admin database operations. For shared frontend hosting plus a VPS API, set VITE_API_URL to the actual HTTPS API URL, serve uploads there and allow the frontend origin in CORS_ORIGIN. For one server, the default /api works behind its reverse proxy.
2. Use .env.production.example as the configuration reference. Set JWT_SECRET, first-admin credentials for an empty database, persistent DATABASE_PATH and persistent UPLOAD_DIR. Existing administrator accounts are preserved; change any old default password before public access.
3. Back up existing content before migration. Seed only as appropriate; db:sync-frontend inserts missing built-in records and can restore previously removed built-in entries if rerun. It does not overwrite existing database records.
4. Configure HTTPS and the actual hostname(s). Set TRUST_PROXY only for the trusted reverse proxy. Preserve company email DNS records when configuring website or ERP subdomains.
5. Use a SQLite-aware database backup (including committed WAL data) and back up uploads. Verify restoring both. Arrange server monitoring and updates if using the VPS.
6. Verify the installed site, direct page links, login, uploads and public news on the actual domain. This final deployment verification remains for the hosting stage.

## Existing behavior retained

- Contact and career forms open an email draft for review and sending; no SMTP delivery or CV storage is implemented.
- About/leadership/history and the built-in award stories remain maintained in source. Admin news appears alongside the built-in award stories.
- ERP applications are separate systems; this repository is the group website and its content administration API.
