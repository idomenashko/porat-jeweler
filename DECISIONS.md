# PORAT — Architectural Decisions

## ADR-001: Tailwind CSS 4

**Decision:** Use Tailwind CSS 4 with CSS-first configuration (`@theme {}` in `globals.css`).

**Rationale:** Next.js 15 `create-next-app` ships with Tailwind v4. The v4 `@theme` block collocates design tokens with CSS custom properties, eliminating the need for a separate `tailwind.config.js` extension.

---

## ADR-002: Homepage as Single Sanity Singleton

**Decision:** `homepage` Sanity document is a single singleton with collapsible fieldsets per section.

**Rationale:** Best editorial UX — editors see one document, toggle section visibility, edit copy in context. Alternative (separate document per section) fragments the editing experience.

---

## ADR-003: Lead Storage in Sanity

**Decision:** Lead form submissions are stored as `lead` documents in Sanity via a server-side API route.

**Rationale:** Provides built-in CRM view in Sanity Studio, no additional database needed, server-side security (write token never exposed to client).

---

## ADR-004: No Physical Address

**Decision:** No physical address is shown anywhere on the site.

**Rationale:** PORAT operates as a private jeweler by appointment only. Displaying an address would imply a walk-in shop, which contradicts the service model. The tagline "ללא חנות פתוחה" is shown instead.

---

## ADR-005: Sanity CDN + next/image

**Decision:** Use Sanity's image CDN for all CMS images, with `next/image` for lazy loading and CLS prevention.

**Rationale:** Sanity handles format conversion (WebP/AVIF) and resizing via URL parameters. `next/image` adds lazy loading and prevents layout shift. `unoptimized` flag is NOT used — both optimizations work in parallel.

---

## ADR-006: ISR with 60s Revalidation

**Decision:** All pages use `export const revalidate = 60` plus a `/api/revalidate` webhook endpoint.

**Rationale:** ISR provides near-instant content updates (Sanity triggers webhook → Next.js revalidates on next request) while maintaining fast cold loads from the edge cache.

---

## ADR-007: RTL via `dir="rtl"` + Logical CSS Properties

**Decision:** Use `<html dir="rtl">` + CSS logical properties (`insetInlineStart`, `paddingInline`, etc.) throughout.

**Rationale:** Native browser RTL with logical properties ensures consistent behavior across all components without manual mirroring. Tailwind's `start`/`end` utilities map correctly to RTL logical directions.
