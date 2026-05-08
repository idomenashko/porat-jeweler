@AGENTS.md

# PORAT — AI Assistant Guidelines

## Project Overview
This is a luxury RTL Hebrew lead-generation website for PORAT private jeweler in Israel.
Built with Next.js 15 App Router + TypeScript + Tailwind CSS 4 + Sanity CMS v3.

## Critical Constraints
- **No physical address** — never add an address anywhere on the site
- **No e-commerce** — no cart, checkout, or payment features
- **Hebrew-first** — all visible content is Hebrew (RTL)
- **Lead generation only** — contact form → Sanity `lead` document

## Code Conventions

### TypeScript
- Strict mode enabled
- Prefer explicit return types on exported functions
- Use `type` for object shapes, `interface` for component props

### Components
- Server components by default
- Add `'use client'` only when using: hooks (useState/useEffect), event handlers, browser APIs
- All layout components under `src/components/layout/`
- All homepage sections under `src/components/sections/`
- Shared primitives under `src/components/ui/`

### Styling
- Tailwind CSS 4 utility classes preferred
- Design tokens defined as CSS custom properties in `src/app/globals.css`
- RTL: use logical properties (`insetInlineStart`, `paddingInline`, etc.) not `left`/`right`
- Color palette: `--bg` (warm ivory), `--gold` (#8e6f3e), `--ink` (#1d1611)

### Tailwind CSS 4
- Config is in `src/app/globals.css` using `@theme {}` block
- No `tailwind.config.js` — v4 uses CSS-first configuration

### Sanity CMS
- All schemas in `src/sanity/schemas/`
- GROQ queries centralized in `src/sanity/queries.ts`
- `writeClient` is server-side only (never import in client components)
- Sanity Studio at `/studio` route

### Fonts
- Loaded via `next/font/google` in `src/lib/fonts.ts`
- Cormorant Garamond: English serif headlines
- Noto Serif Hebrew: Hebrew serif headlines
- Assistant: Hebrew/Latin body text
- JetBrains Mono: monospace accents

### Animations
- Framer Motion via `src/components/ui/Reveal.tsx` (`Reveal`, `RevealStagger`, `RevealItem`)
- CSS animations for sparkles, float, shimmer (defined in globals.css)

## File Naming
- Components: PascalCase.tsx
- Pages: page.tsx (Next.js convention)
- Utilities: camelCase.ts

## Running the Project
```bash
npm run dev     # Development server
npm run build   # Production build
npm run lint    # ESLint
```
