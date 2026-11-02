# Supun Group website

React, TypeScript and Vite website with a Node/Express administration API.

## Project structure

| Location | Purpose |
| --- | --- |
| src/pages/ | Public pages and administration screens |
| src/components/ | Shared layout, interface and UI components |
| src/data/ | Website copy, company records and shared content |
| src/assets/ | Images and the active hero video; optimized photos and product images have their own folders |
| src/hooks/, src/lib/, src/services/ | Shared hooks, utilities and API calls |
| public/ | Files served at fixed URLs, including company logos, icons and sitemap |
| server/ | API routes, authentication, database tools and uploaded media |
| scripts/ | Media and logo maintenance utilities |
| docs/ | Existing setup, deployment and maintenance notes, plus the supplied change document |
| .github/ | Repository automation |
| Full Video.mp4 | Original hero-video master, retained unchanged |
| tmp/ | Local output only; the latest hosting ZIP is retained here and ignored by Git |
| dist/ | Generated production website, ignored by Git |

## Local development

Install dependencies with npm ci, then run npm run dev.
Run npm run server:dev separately when working with the administration API.
Environment templates are in .env.example and .env.production.example.

## Validation and production

- npm exec tsc -- -p tsconfig.app.json --noEmit
- npm run build
- npm run preview

The root configuration files are required by Vite, TypeScript, Tailwind, ESLint and npm.
Use package-lock.json as the dependency lockfile.

## Hosting

Upload the contents of dist/ directly into public_html, with index.html at its root.
Preserve the hosting account's existing .htaccess when replacing the website files.
The existing cPanel deployment guide is [docs/NAMECHEAP_DEPLOYMENT.md](docs/NAMECHEAP_DEPLOYMENT.md).
The original full video is retained as a master; the website uses src/assets/supun-hero-streaming-hq.mp4.

Generated ZIPs, review frames, downloaded tools and cache files should not be committed.
The server's uploads and database files are runtime data and should be preserved.
