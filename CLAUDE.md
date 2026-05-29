@AGENTS.md

## Project Overview

FocusNow marketing website. Next.js 16 (App Router), React 19, Tailwind CSS v4, next-intl (i18n), framer-motion (animations), next-themes (dark mode).

## Project Structure

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── globals.css         # All CSS variables, utilities, base styles
│   ├── sitemap.ts          # Sitemap with localized URLs and hreflang
│   ├── api/waitlist/       # Waitlist email capture endpoint
│   └── [locale]/           # Locale-prefixed routes
│       ├── layout.tsx      # Providers (ThemeProvider, NextIntlClientProvider)
│       ├── page.tsx        # Landing page assembly
│       ├── use-cases/      # Audience segmentation pages (remote-workers, students, freelancers, developers)
│       └── */page.tsx      # Pages: download, pricing, about, blog, changelog, privacy
├── components/
│   ├── ui/                 # shadcn/ui components (Base UI + CVA)
│   ├── layout/             # Header, Footer
│   ├── shared/             # ThemeProvider, ThemeToggle, LocaleSwitcher, FocusNowLogo, CookieConsentBanner
│   ├── landing/            # Landing sections (hero, social-proof-bar, bento-features, how-it-works, download-cta)
│   └── use-cases/          # UseCaseTemplate shared component
├── content/blog/           # MDX blog posts (en/, tr/)
├── i18n/                   # routing.ts, navigation.ts, request.ts
├── lib/                    # utils.ts, blog.ts, downloads.ts, analytics.ts, structured-data.ts
├── messages/               # en.json, tr.json (translation files)
└── middleware.ts            # next-intl locale middleware
```

## Internationalization (i18n)

- Library: `next-intl` v4
- Locales: `en` (default), `tr`
- Translation files: `src/messages/en.json`, `src/messages/tr.json`
- Routes are localized in `src/i18n/routing.ts` (e.g., `/download` -> `/indir` for Turkish, `/use-cases/students` -> `/kullanim-alanlari/ogrenciler`)
- Server components: `const t = await getTranslations("namespace")`
- Client components: `const t = useTranslations("namespace")`
- Navigation: Always use `Link` from `@/i18n/navigation`, not from `next/link`
- When adding a new page or section, add translations to **both** `en.json` and `tr.json`

## Component Conventions

- **UI components** (`src/components/ui/`): shadcn/ui with `@base-ui/react` primitives + CVA. Do not modify these unless updating the design system.
- **Shared components** (`src/components/shared/`): Reusable across pages. Always `"use client"`.
- **Landing sections** (`src/components/landing/`): Self-contained, `"use client"`, use framer-motion for animations.
- **Layout** (`src/components/layout/`): Header and Footer.
- **Use-case pages** (`src/components/use-cases/`): Shared template for audience segmentation pages.
- **Icons:** Always use `lucide-react`. Do not add other icon libraries.
- **Class merging:** Always use `cn()` from `@/lib/utils` when combining classes.
- **Logo:** `<FocusNowLogo>` component uses inline SVG. Used in both header and footer. Do not replace with `<img>` tags.

## Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Semantic colors via CSS custom properties in `globals.css` (`:root` for light, `.dark` for dark)
- Buttons: Solid `bg-primary`, no gradients. See `DESIGN_SYSTEM.md` for full details.
- Text emphasis: `text-purple-600 dark:text-purple-400` (not `text-primary` which is too dark in dark mode)
- Dark mode: `.dark` class toggled by `next-themes`. Warm neutrals, not pure black.

## Section Design Patterns

The site uses **two section styles that alternate** for visual rhythm. See `DESIGN_SYSTEM.md` for full details.

- **Rich sections** (bento grid, hero): Cards with `border-border/40`, embedded interactivity (tabs, SVG animations), window chrome mockups. Icon containers: `w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30`.
- **Minimal sections** (HowItWorks, About pillars, CTA): Typography-driven. Large faded numbers or icon + heading + paragraph. No cards, no borders. Whitespace does the work.
- **Rhythm:** Rich → Minimal → Rich → Minimal → CTA. Never stack two rich sections.
- **Landing page flow:** `HeroSection → SocialProofBar → BentoFeatures → HowItWorks → DownloadCTA`
- **Animations:** Always `whileInView` + `viewport={{ once: true }}` with stagger. Never `animate` (except hero header which is above the fold).
- **Do not** wrap informational-only content in Card components. Do not use window chrome mockup for non-product content. Do not use circle step badges or connector lines.

## Design System

- Design decisions, color palette, button styles, and component conventions are documented in `DESIGN_SYSTEM.md`.
- **When making any change to colors, typography, button styles, utility classes, or design tokens:** update `DESIGN_SYSTEM.md` to reflect the change. This includes adding/removing/modifying CSS utilities in `globals.css`, changing token values in `tokens.json`, or altering component styling patterns.
- `tokens.json` is the canonical source for design tokens (synced with Figma via Tokens Studio). `globals.css` is the runtime CSS implementation.
- Logo color (`#7F22CE` / purple-700) is intentionally different from UI primary (`purple-800`). Do not unify them.

## Content & Copy

- **Style guide:** All content voice, tone, copywriting standards, and editorial checklists are in `CONTENT_STYLE_GUIDE.md`. Read it before writing any user-facing text.
- **Messaging hierarchy:** Primary = clarity/self-knowledge ("See where your time goes"). Secondary = privacy/trust. Tertiary = friction removal. Never lead with privacy.
- **Headlines:** Always benefit-driven, not feature-driven. "See Your Real Workday" not "Automatic Tracking."
- **CTAs:** Use first-person language ("Start My..." / "Get My..."). See CTA matrix in style guide.
- **Turkish content:** Write natively from the same brief as EN, never translate word-for-word. Follow Turkish-specific standards in style guide (SOV structure, active voice, colloquial warmth, KVKK references).
- **SEO:** Every page must have localized `generateMetadata` with keyword-rich title (<60 chars), compelling description (<155 chars), canonical URL, and hreflang alternates. See per-page keyword mapping in style guide.
- **Privacy messaging:** Privacy is a supporting message, not the primary value proposition. Include it proportionally, not in every section.
- **"Coming Soon" features:** Never advertise non-existent features as feature cards. Use a roadmap section or "What's Next" note instead.
- **New pages:** Follow the new page checklist in `CONTENT_STYLE_GUIDE.md` (routing, translations, metadata, structured data, sitemap, internal links).
- **Blog posts:** Follow the blog post template in style guide. Target 5th-7th grade reading level. End with a CTA linking to download page.

## Blog

- MDX files in `src/content/blog/en/` and `src/content/blog/tr/`
- Frontmatter: `title`, `description`, `date`, `author`, `tags`
- Utility functions in `src/lib/blog.ts`: `getBlogPosts()`, `getBlogPost()`, `getAllBlogSlugs()`
- Blog pages are server components

## SEO

- Metadata in `src/app/[locale]/layout.tsx` and per-page `generateMetadata()`
- JSON-LD structured data via `src/lib/structured-data.ts` (SoftwareApplication, WebSite, Organization, BlogPosting, FAQPage)
- Canonical URL: `https://focusnow.ai`
- Sitemap: `src/app/sitemap.ts` (includes localized Turkish paths and hreflang alternates)
- Robots: `src/app/robots.ts`

## Analytics

- Google Analytics with consent management (`src/lib/analytics.ts`)
- Cookie consent banner stores preference in localStorage (`focusnow-cookie-consent`)
- Default consent: `denied` (opt-in required)
