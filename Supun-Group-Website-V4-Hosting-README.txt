SUPUN GROUP WEBSITE V4 - 23 NOVEMBER 2026

Includes the compact full-width sunset skyline hero on Our Companies (same photo as About), Contact logo sizing fix, supplied CS 832 helmet with workshop background in News, text careers listings and enhanced Supun Super Center photo in About.

EXISTING APACHE / CPANEL SITE
Back up the current files and custom rewrite rules. Extract the ZIP locally, then merge its contents directly into public_html (no enclosing dist folder). Upload assets/images/logos/videos first and index.html last. Preserve the existing API, server, uploads, database and .env. Keep existing .htaccess if it contains API proxy rules or other custom rules; the supplied file is a basic React SPA fallback. Clear browser/CDN cache.

EXISTING NODE HOSTING
Merge the ZIP contents into the application's dist directory, with index.html at dist/index.html. Preserve the existing server, database, uploads and environment. No database migration is required.

STATIC-ONLY HOSTING
Extract directly into the document root. Apache must allow .htaccess rewrite rules. Nginx needs try_files $uri $uri/ /index.html; . The static build shows built-in public content. Admin/database features require the existing Node backend at /api. Career/contact forms prepare drafts in the visitor's email app.

VALIDATION
Production build and TypeScript passed. Every ZIP entry was checked against dist by path and uncompressed size; required photos, hero video and .htaccess are included. SHA256 checksum is beside the ZIP. Browser automation was unavailable, so verify desktop/mobile appearance on your host. Check /companies, /about, /contact, /careers, /news and direct news detail links. No live deployment has been made.