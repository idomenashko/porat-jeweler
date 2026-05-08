# PORAT — Remaining Tasks

## Pre-Launch

- [ ] Replace placeholder phone number (+972-50-0000000) with real number
- [ ] Replace placeholder WhatsApp link with real WhatsApp business number
- [ ] Replace placeholder domain (porat-jeweler.co.il) with real domain in:
  - `src/app/layout.tsx` (metadataBase)
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
- [ ] Create Sanity project at sanity.io/manage
- [ ] Fill in `.env.local` with real Sanity project ID and API token
- [ ] Upload logo and brand assets to Sanity
- [ ] Enter all content in Sanity Studio (homepage, services, gallery, articles, testimonials)
- [ ] Upload jewelry photography to Sanity gallery items
- [ ] Replace placeholder portfolio images with real photography
- [ ] Add Google Analytics or similar (confirm with client)
- [ ] Set up Resend (or similar) for lead email notifications in `src/app/api/lead/route.ts`
- [ ] Configure Sanity webhook in Sanity project settings for ISR revalidation
- [ ] Test contact form end-to-end
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Verify all Hebrew copy is accurate

## Post-Launch

- [ ] Add FAQ page with FAQ schema (schemas already ready in Sanity)
- [ ] Add Blog/Articles SEO improvements (structured data)
- [ ] Consider Google Search Console setup
- [ ] Add hreflang if bilingual version is needed
- [ ] Performance audit with Lighthouse
- [ ] Add cookie consent if needed (GDPR/Israeli privacy law)
