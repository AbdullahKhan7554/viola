# Voila's Luxury Skincare Aesthetics — Website

A conversion-focused, luxury brand website with a lead-capture & booking layer
for **Voila's Luxury Skincare Aesthetics** (Wapda Town, Lahore) — built to the
project PRD v1.0.

> Doctor-led, luxury skincare with the warmth of a personal consultation —
> and visible results, every time.

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router, JavaScript) | SSG/SEO/perf, image optimization |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` tokens) | Design tokens as utilities |
| Images | `next/image` (AVIF/WebP) | Zero-CLS, responsive `srcset` |
| Animation | CSS + `IntersectionObserver` (`ScrollReveal`) | Elegant motion, ~0 KB JS |
| Forms/email | Next API route + **Resend** (optional) | Reliable leads, WhatsApp fallback |
| Analytics | **GA4** via `next/script` (afterInteractive) | Conversion + event tracking |
| Hosting | **Vercel/Netlify** ready | Global CDN, HTTPS, CI/CD |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values (all optional for local dev)
npm run dev                  # http://localhost:3000
```

### Scripts
- `npm run dev` — start the dev server
- `npm run build` — production build (SSG)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`eslint .`)

## Environment variables

See `.env.example`. All are optional locally:

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/sitemap/OG |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-…`). Empty = analytics off |
| `RESEND_API_KEY` | Enables lead emails. Empty = form still succeeds + WhatsApp fallback |
| `LEAD_NOTIFY_EMAIL` / `LEAD_FROM_EMAIL` | Lead recipient / sender |

## Project structure

```
src/
 ├─ app/                 # App Router pages, sitemap, robots, manifest, api/lead
 │   └─ treatments/[slug]/ # SSG treatment detail pages
 ├─ components/
 │   ├─ ui/              # Button, Card, Accordion, Icon, etc. (primitives)
 │   ├─ sections/        # Hero, ServicesGrid, Testimonials, CTABand, …
 │   ├─ layout/          # NavBar, Footer, StickyWhatsApp
 │   ├─ forms/           # LeadForm
 │   ├─ gallery/         # Gallery lightbox, BeforeAfterSlider
 │   └─ analytics/       # GA4 loader, view tracker
 ├─ content/             # treatments / reviews / gallery (data-driven, CMS-ready)
 ├─ lib/                 # constants, utils, analytics, JSON-LD schema
 └─ app/globals.css      # design tokens (@theme) + base styles
public/
 ├─ images/              # real clinic photography (webp)
 └─ video/               # ambient hero video
```

## Architecture notes

- **Data-driven content.** Treatments/reviews/gallery live in `src/content/*`.
  Swapping to a headless CMS (Sanity/Contentful) in Phase 2 means replacing
  these modules — no component changes.
- **SEO.** Per-page metadata, JSON-LD (`MedicalBusiness`, `Service`,
  `FAQPage`, `BreadcrumbList`, `AggregateRating 5.0/44`), auto `sitemap.xml`
  and `robots.txt`, canonical + OG/Twitter tags.
- **Performance.** SSG everywhere, `next/image`, lazy map iframe, fonts via
  `next/font` (no render-blocking), no heavy animation library, security
  headers in `next.config.mjs`.
- **Accessibility (WCAG 2.1 AA).** Semantic landmarks, skip link, keyboard-
  operable nav/accordion/gallery/before-after, visible focus rings, labelled
  forms with inline errors, `prefers-reduced-motion` respected.

## Content & assets to confirm before launch (PRD Appendix A)

- `// TODO` consented before/after clinical photos (`src/content/gallery.js`).
- Exact pricing approach (currently "On consultation").
- Final domain + verify exact map pin (`src/lib/constants.js → geo`).
- Connect GA4 ID, Search Console, and a Resend (or other) email provider.
