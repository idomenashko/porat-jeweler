# PORAT — Private Jeweler

Luxury RTL Hebrew lead-generation website for PORAT private jeweler.

## Tech Stack

- **Next.js 15** (App Router, TypeScript, React 19)
- **Tailwind CSS 4**
- **Sanity CMS v3** (embedded Studio at `/studio`)
- **Framer Motion 12** for animations

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Copy `.env.example` to `.env.local` and fill in your Sanity project values:
```bash
cp .env.example .env.local
```

### 3. Set up Sanity
```bash
npx sanity init --env .env.local
```
Or create a project at [sanity.io/manage](https://sanity.io/manage) and paste the project ID and dataset into `.env.local`.

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Access Sanity Studio
Open [http://localhost:3000/studio](http://localhost:3000/studio)

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel dashboard](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

Add the Sanity webhook in Sanity project settings:
- URL: `https://your-domain.vercel.app/api/revalidate`
- Secret: matches `SANITY_WEBHOOK_SECRET` in env vars
- Trigger on: Create, Update, Delete

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (usually `production`) |
| `SANITY_API_TOKEN` | Sanity API token (server-side only) |
| `SANITY_WEBHOOK_SECRET` | Webhook secret for ISR revalidation |

## Project Structure

```
src/
  app/           # Next.js App Router pages
  components/    # React components
    icons/       # SVG icon components
    layout/      # NavBar, Footer, MobileMenu, WhatsAppFab
    sections/    # 11 homepage sections
    ui/          # Shared UI primitives
  lib/           # fonts.ts
  sanity/        # Sanity client, queries, schemas
```

## Notes

- Fully RTL Hebrew (`<html dir="rtl">`)
- No store, cart, or checkout — this is a lead-generation site
- No physical address anywhere on the site
- Lead form submissions are stored as `lead` documents in Sanity
