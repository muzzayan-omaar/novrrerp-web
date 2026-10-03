# novrrerp-web

Marketing site for **NOVRR ERP** (novrrerp.com).

- **Next.js** App Router, static/SSG marketing pages
- **MongoDB** only for the demo / lead form (`POST /api/demo`)
- Design structure modeled on clickup.com; brand colors from the product (`nova` palette)

## Quick start

```bash
cp .env.example .env.local
# set MONGODB_URI (optional in dev — form will log to console if unset)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets to drop in `public/`

| File | Purpose |
|------|---------|
| `favicon.png` | Favicon (required) |
| `logo.png` | Header / footer logo |
| `hero.png` or short video | Hero product UI |
| Module screenshots | Deep feature sections |

Until assets exist, the site shows labeled placeholders.

## Primary CTAs

- **Start free** → `#start` form on homepage
- **Contact for pricing** → pricing page form

## Deploy

- Vercel (or similar) for Next.js
- MongoDB Atlas for `leads` collection
- Set `MONGODB_URI`, `MONGODB_DB`, optional `NEXT_PUBLIC_APP_URL`

## Project layout

```
src/app/           # pages + api/demo
src/components/    # Header, Footer, DemoForm
src/lib/mongodb.ts
public/            # static assets
```
