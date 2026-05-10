# INDIAN AGRITECH — Website Architecture & UI Plan

A premium, mobile-first agriculture brand website. Version 1 is a high-trust brochure-style experience built on TanStack Start (React + Vite) with Tailwind, designed to scale into a dynamic catalog (Lovable Cloud) in Version 2.

---

## 1. Brand & Design Direction

**Personality:** premium, earthy, cinematic, human, trustworthy — feels like a modern agri-tech startup, not a fertilizer brochure.

**Color tokens** (defined in `src/styles.css` as `oklch`, exposed as semantic Tailwind tokens):
- `--background` Warm Off White (#FAF8F2 range)
- `--foreground` Deep Forest Green (near-black green)
- `--primary` Deep Forest Green
- `--primary-glow` Leaf Green
- `--secondary` Soil Brown
- `--accent` Golden Yellow (used sparingly for CTAs/highlights)
- `--muted` warm sand
- Gradient tokens: `--gradient-hero`, `--gradient-leaf`, `--gradient-soil`
- Shadow tokens: `--shadow-soft`, `--shadow-elevated`, `--shadow-glow-leaf`

**Typography:**
- Display/H1–H3: Coolvetica (loaded via local `@font-face` once asset uploaded; fallback `Cabinet Grotesk` / `system-ui` placeholder until then)
- Body/UI: Inter (Google Fonts)
- Telugu fallback: Noto Sans Telugu (planned for v1.1 toggle)

**Design tokens (consistent system):**
- Radius scale: `--radius: 1rem` (cards 1.25rem, pills 999px)
- Spacing rhythm: section py-24 desktop / py-16 mobile; container max-w-7xl
- Card style: soft glass on imagery (`backdrop-blur` + 1px hairline border), solid warm-white on neutral
- Motion: 200ms ease for hover, 600ms ease-out for reveal, stagger 60ms

**Motion library:** framer-motion. Reveal-on-scroll, hover lift, hero parallax (subtle), no flashy parallax sections.

---

## 2. Tech & Project Architecture

Stack already in place: TanStack Start v1 (React 19, Vite 7), Tailwind v4, file-based routing under `src/routes/`. We keep this stack; no React Router DOM.

**Folder structure:**

```text
src/
  routes/
    __root.tsx               # shell + SiteHeader + SiteFooter + <Outlet/>
    index.tsx                # Landing
    about.tsx
    services.tsx
    products.tsx             # Category grid (parent layout w/ <Outlet/>)
    products.$category.tsx   # Dynamic category detail page
    contact.tsx
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      MobileNav.tsx
      LanguageToggle.tsx
      WhatsAppCTA.tsx
      Container.tsx
      Section.tsx
    brand/
      Logo.tsx               # text placeholder + slot for uploaded image
      Favicon assets in /public
    home/
      Hero.tsx
      AboutPreview.tsx
      ServicesGrid.tsx
      FeaturedCategories.tsx
      WhyChooseUs.tsx
      ChairmanMessage.tsx
      CTASection.tsx
      ContactPreview.tsx
    products/
      CategoryCard.tsx
      CategoryHero.tsx
      BrochureShowcase.tsx
      InquiryCTA.tsx
      Breadcrumbs.tsx
      BackButton.tsx
    common/
      SectionHeading.tsx
      StatPill.tsx
      TrustBadge.tsx
      ImageFrame.tsx          # modular slot for future PNG uploads
      Reveal.tsx              # framer-motion wrapper
    ui/                       # shadcn primitives (already present)
  content/
    site.ts                   # phone, email, address, socials
    categories.ts             # 8 category definitions (slug, name, blurb, hero, brochure[])
    nav.ts
    i18n/en.ts, te.ts         # ready for future toggle
  hooks/
    useReveal.ts, useMediaQuery.ts
  lib/
    seo.ts                    # buildMeta() helper for head()
    utils.ts
  styles.css
public/
  favicon.svg, favicon-32.png, apple-touch-icon.png, og-default.jpg
  brand/, products/, team/    # reserved folders for uploaded assets
```

All product/team/brochure images go in `public/` so URLs are stable for `og:image` and easy asset replacement.

---

## 3. Page Hierarchy & Routes (SEO-friendly URLs)

| URL | Route file | Purpose |
|---|---|---|
| `/` | `index.tsx` | Landing |
| `/about` | `about.tsx` | Company story, mission, leadership |
| `/services` | `services.tsx` | Solutions overview |
| `/products` | `products.tsx` | All 8 category cards |
| `/products/sucking-pest` | `products.$category.tsx` | Category detail |
| `/products/chewing-pest` | (same dynamic) | |
| `/products/sucking-and-chewing-pest` | | |
| `/products/water-solubles` | | |
| `/products/micro-nutrients` | | |
| `/products/granules` | | |
| `/products/plant-growth-regulators` | | |
| `/products/fungicides` | | |
| `/contact` | `contact.tsx` | Form + map + details |

Every shareable route defines its own `head()` with unique `title`, `description`, `og:title`, `og:description`, and `og:image` (category hero used as OG image).

---

## 4. Landing Page Section Plan

1. **SiteHeader (sticky, glass on scroll)** — logo slot · nav · EN | తెలుగు · WhatsApp pill
2. **Hero** — full-bleed cinematic field/crop imagery, gradient overlay, H1 "Modern Crop Solutions for Indian Farmers", subline, dual CTA (Explore Products / Talk on WhatsApp), scroll cue. Mobile: vertical stack, image becomes 80vh.
3. **About Preview** — split layout: short paragraph + 3 stat pills (Years, Categories, Farmers Served). Link to `/about`.
4. **Services / Solutions** — 3–4 cards (Crop Protection, Plant Nutrition, Advisory, Distribution Network) with icon + line.
5. **Featured Product Categories** — 8 category cards in a responsive grid (2 col mobile, 4 col desktop), each links to `/products/[slug]`.
6. **Why Choose Us** — 4 trust pillars: Quality Assured, Farmer First, Pan-India Reach, Expert Backed.
7. **Chairman Message** — portrait slot (left/desktop, top/mobile) + quote block + signature line "MD Sir D. Sandeep — Chairman".
8. **CTA Section** — full-width earthy gradient band: "Grow with Indian Agritech" + WhatsApp + Call buttons.
9. **Contact Preview** — phone, email, address, embedded map placeholder, link to `/contact`.
10. **SiteFooter** — logo slot, nav, categories, contact, language toggle, © Indian Agritech (no Lovable credits).

---

## 5. Product Architecture (V1 brochure model, V2-ready)

`src/content/categories.ts` defines all 8 categories as a typed array — single source of truth so V2 can swap to a Lovable Cloud table without UI changes.

```text
{
  slug: "sucking-pest",
  name: "Sucking Pest",
  shortBlurb: "...",
  heroImage: "/products/sucking-pest/hero.jpg",
  accentColor: "leaf" | "soil" | "gold",
  brochures: [{ src, alt, caption }],
  highlights: string[],
}
```

**`/products`** — hero strip + 8 CategoryCards (image, name, 1-line blurb, arrow). Lazy-loaded images, alt text from data.

**`/products/$category`** layout (top → bottom):
1. BackButton + Breadcrumbs (Home / Products / Sucking Pest)
2. CategoryHero — title H1, blurb, accent gradient
3. Highlights row (3–5 chips)
4. BrochureShowcase — responsive masonry/grid of brochure images, click to lightbox
5. InquiryCTA — WhatsApp + Call (prefilled message includes category name)
6. Related categories strip

V2 expansion path: replace static `brochures[]` with a `products` table; add `/products/$category/$product` route; add search/filter on `/products`. Component contracts stay identical.

---

## 6. Navigation System

**Desktop header:** Logo · Home · About · Services · Products · Contact · [EN | తెలుగు] · [WhatsApp button accent]

**Mobile header:** Logo · WhatsApp icon · Hamburger → full-screen drawer (large 56px tap targets, language toggle at bottom, social/contact row). Sheet from `components/ui/sheet`.

**Behavior:** transparent over hero, gains glass background + shadow on scroll past 80px.

**WhatsApp CTA:** floating round button bottom-right on mobile (above thumb zone), prefilled `https://wa.me/917997669504?text=...`.

---

## 7. Logo & Favicon Strategy (Placeholder Now, Asset-Ready Later)

- `Logo.tsx` accepts `variant: "horizontal" | "square"` and renders either an `<img src={logoUrl}>` or, when no asset uploaded, an elegant wordmark: **INDIAN** in display weight + **AGRITECH** in tracked uppercase, with a small leaf glyph spacer (CSS-drawn, not an image).
- Reserved sizes: header 40px height (horizontal), footer 56px, mobile 36px. Layout uses fixed-height container so swapping to image won't shift layout.
- Favicon: ship a clean SVG placeholder — single stroked leaf inside rounded square, deep green on warm-white. Replaceable later. No Lovable favicon.
- All `<HeadContent />` defaults in `__root.tsx` updated: title "Indian Agritech — Crop Protection & Plant Nutrition", proper description, removed Lovable author/og defaults.

---

## 8. Mobile-First Responsive Strategy

- Design at 375px first, then 768, 1024, 1440.
- Tailwind breakpoints default; container `px-5 md:px-8`.
- Touch targets ≥ 44px; primary CTAs 56px on mobile.
- Single-column section stacks below `md`; images move above text.
- No hover-only affordances — every hover state has a tap equivalent.
- Avoid fixed pixel font sizes; use clamp() for hero H1.

---

## 9. Animation Strategy (framer-motion)

- `Reveal` wrapper: fade + 16px translate-y on enter viewport, once: true.
- Stagger children for grids (categories, services).
- Hero: subtle 6s ken-burns on background image, fade-in headline.
- Cards: lift 4px + shadow-elevated on hover/focus-visible.
- No parallax-on-scroll sections; respect `prefers-reduced-motion`.

---

## 10. SEO Architecture

- Per-route `head()` with `title`, `description`, OG, Twitter, canonical.
- `lib/seo.ts` `buildMeta({ title, description, path, image })` helper to keep meta consistent.
- Single H1 per route; semantic `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Clean URLs (already mapped above); category slugs are kebab-case.
- Structured data ready: Organization JSON-LD in `__root.tsx` (name, address, phone, email), LocalBusiness on `/contact`, ItemList on `/products`, Product schema slot for V2.
- Image SEO: descriptive `alt` from data, lazy `loading="lazy"`, `<picture>` for hero with AVIF/WebP later.
- `public/robots.txt` + dynamic `sitemap.xml` route (server route under `src/routes/api/`) listing static + category routes — wired in V1.
- Multilingual readiness: `lang` attribute switches via context; future `hreflang` per route. Content strings already isolated in `content/i18n/`.

---

## 11. Content Strategy

- Short, scannable paragraphs (≤ 3 lines). Farmer-friendly wording, no jargon.
- Every category gets: 1-line blurb, 3–5 highlight chips, 1 trust statement.
- Chairman message: 2 short paragraphs + signature.
- Contact: address block formatted with `<address>`, click-to-call, click-to-email, click-to-WhatsApp.

---

## 12. Asset Management Plan

- Reserved folders: `public/brand/`, `public/team/`, `public/products/<slug>/`, `public/brochures/`.
- `ImageFrame` component — fixed aspect-ratio container with skeleton + transparent-PNG support; swap `src` without layout shift.
- Until real assets arrive: use neutral gradient placeholders + subtle leaf SVG pattern; **no AI-generated faces, no cartoon agri clipart, no fake product mockups**.
- Once assets uploaded, only `content/categories.ts` and a few image src props need updating.

---

## 13. Version 2 Scalability Path (planned, not built)

- Enable Lovable Cloud → tables: `categories`, `products`, `inquiries`, `dealers`.
- Promote `content/categories.ts` to a Cloud loader; same component contracts.
- Add `/products/$category/$product` detail route.
- Search + filter on `/products` (Tanstack Query already in router context).
- Admin route group `/_authenticated/admin/*` with role-based access (separate `user_roles` table).
- Inquiry form → Cloud function + email/WhatsApp notification.
- Telugu content layer activated, hreflang published.
- Blog/FAQ/Crop-guide route groups for organic SEO.

---

## 14. Component Reuse Map (high-leverage primitives)

`Section`, `Container`, `SectionHeading`, `Reveal`, `ImageFrame`, `CategoryCard`, `TrustBadge`, `StatPill`, `WhatsAppCTA`, `Breadcrumbs`, `BackButton`, `InquiryCTA`, `Logo`, `LanguageToggle`. Every page is composed from these — guarantees visual consistency and fast iteration.

---

## 15. Build Order (when implementation begins)

1. Design tokens in `styles.css` + fonts wired
2. `__root.tsx` SEO defaults, JSON-LD, header/footer shell, WhatsApp floating button
3. `content/site.ts` + `content/categories.ts`
4. Landing page sections in order 1→10
5. `/about`, `/services`, `/contact` pages
6. `/products` grid + `/products/$category` template
7. Sitemap route, robots.txt, OG images
8. Pass: a11y, Lighthouse mobile, reduced-motion, alt text audit

---

This plan is ready for implementation when you approve. No code or files have been changed yet.