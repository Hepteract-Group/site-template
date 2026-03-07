# Arziki Site Template

A Next.js 14 + Tailwind CSS static export template for generated client websites.
All dynamic content is driven by `content.json` — ATLAS fills this in per lead and deploys to Vercel.

## Structure

```
content.json          ← All dynamic content (business name, services, location, etc.)
content.schema.json   ← JSON Schema for validation
src/
  app/               ← Next.js App Router pages (Home, Services, About, Contact)
  components/        ← Reusable components (Navbar, Hero, Services, About, Footer)
  lib/               ← Content loader + TypeScript types
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Home — Hero, Services preview, About summary |
| `/services` | Full services list |
| `/about` | Business story + values |
| `/contact` | Phone, email, and enquiry form |

## Usage by ATLAS

1. ATLAS fills in `content.json` with lead data (from Google Places + GPT-4o-mini copy)
2. Deploys to Vercel via `vercel --prod` using the `VERCEL_TOKEN`
3. Updates the lead record in PostgreSQL with `asset_url` and `status='asset_ready'`

## Local Development

```bash
npm install
npm run dev
```

## Build (Static Export)

```bash
npm run build
# Output in /out — deploy to Vercel or any static host
```

## Customisation

- **Theme colours**: Edit `theme.primaryColor` and `theme.accentColor` in `content.json`
- **Services**: Add/remove items in the `services` array (2-6 items)
- **Contact form**: Set `contact.formEnabled: false` to hide the form
