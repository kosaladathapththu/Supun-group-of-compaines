# Supun Group Website V2 — Namecheap Deployment

## Recommended first production release

The public website is a Vite/React single-page application. Build it locally or in CI:

```bash
npm ci
npm run build
```

Upload the **contents of `dist/`** to the Namecheap hosting document root for `supuncompanies.com` (normally `public_html/`). The build copies `.htaccess`, so direct URLs such as `/about` and `/companies/camy-smart` are routed back to `index.html` instead of returning 404.

## DNS / cutover

Before changing nameservers or DNS, copy and verify every required DNS record, especially MX/TXT records used for company email. Do not remove the old hosting until the new site has been checked on the production domain.

## SEO launch checklist

1. The production hostname must be `supuncompanies.com` or `www.supuncompanies.com`.
2. Netlify/localhost/staging hosts are automatically marked `noindex` by `src/components/Seo.tsx`.
3. Verify `https://supuncompanies.com/robots.txt` and `https://supuncompanies.com/sitemap.xml` after launch.
4. Add the final domain property to Google Search Console and submit `/sitemap.xml`.
5. Preserve old URLs where possible. `/shop` and `/shop/:id` currently redirect inside the app to `/camy-products`; add server-side 301 redirects at cutover if those URLs were indexed on the previous production site.
6. Keep the old site backup until search indexing, contact details and company pages are verified.

## Admin/backend note

The existing repository still contains the Express/SQLite admin system. The V2 public pages use the approved static website content so the marketing site does not fail when the API is unavailable. If the Group wants the admin panel to control the public V2 content, treat that as a separate backend migration and deploy the Node API/database on hosting that supports the required Node native modules.
