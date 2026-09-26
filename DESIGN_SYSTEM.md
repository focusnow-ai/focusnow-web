# FocusNow Design System

Single source of truth for design tokens, brand assets, and UI conventions. Tokens are managed via [Tokens Studio for Figma](https://tokens.studio/) and synced to this repository through Git.

> **Keeping this file up to date:** Any change to colors, typography, components, or design decisions must be reflected here. See `CLAUDE.md` for the enforcement rule.

---

## Tokens Studio Setup

### 1. Install the Plugin

In Figma, go to **Plugins > Browse plugins** and install **Tokens Studio for Figma**.

### 2. Connect to GitHub

1. Open the Tokens Studio plugin in Figma.
2. Go to **Settings > Sync providers > Add new > GitHub**.
3. Fill in the fields:
   - **Repository:** `barbaroszngr/focusnow-web`
   - **Branch:** `main`
   - **File path:** `tokens.json`
   - **Personal access token:** A GitHub fine-grained PAT with `Contents: Read and write` permission scoped to this repo.
4. Click **Save** — the plugin will pull tokens from `tokens.json`.

### 3. Workflow

- **Figma -> Code:** Make token changes in Figma, then use the plugin to push a commit or open a PR against this repo.
- **Code -> Figma:** Edit `tokens.json` directly, push to `main`, and pull changes in the plugin.

### 4. Token Set Structure

| Set | Purpose |
|---|---|
| `global` | Primitive palette (colors, typography, spacing, radius, elevation, glow) |
| `light` | Semantic tokens for light mode -- references `global` primitives |
| `dark` | Semantic tokens for dark mode -- references `global` primitives |

Themes are defined in `$themes`. Each theme enables one semantic set (`light` or `dark`) and uses `global` as a source set.

---

## Relationship: `tokens.json` <-> `globals.css`

`tokens.json` is the **canonical definition** of every design token. `globals.css` is the **runtime implementation** that maps those tokens to CSS custom properties consumed by Tailwind and shadcn/ui.

| `tokens.json` path | CSS variable | Usage |
|---|---|---|
| `light.primary` | `--primary` | `bg-primary`, `text-primary` |
| `light.background` | `--background` | `bg-background` |
| `global.borderRadius.base` | `--radius` | `rounded-lg` etc. |
| `global.elevation.*` | `.elevation-*` | Utility classes |

When updating a token value, update `tokens.json` first, then reflect the change in `globals.css`.

---

## Logo & Brand Assets

### File Locations

| File | Description |
|---|---|
| `public/brand/fn.svg` | Icon mark (monogram "fn") |
| `public/brand/focusnow.svg` | Wordmark ("focusnow") |
| `public/brand/fn-focusnow.svg` | Combined icon + wordmark |

### Usage Rules

- **Minimum size:** Icon mark 24px, wordmark 80px width.
- **Clear space:** Maintain at least 1x the icon height as padding around the logo.
- **Logo color:** Always `#7F22CE` (purple-700). This is intentionally 1 shade lighter than UI primary (`purple-800`) so the logo stands out.
- **Wordmark:** "focus" portion uses `currentColor` (adapts to theme), "now" portion uses `#7F22CE`.
- **Do not** stretch, rotate, add effects, or change the proportions.
- **In-app:** `<FocusNowLogo>` component (`src/components/shared/focusnow-logo.tsx`) renders inline SVG. Used in both header and footer.

---

## Color Palette

### Brand Colors (from Figma)

| Role | Name | Tailwind | Hex | CSS Variable |
|---|---|---|---|---|
| Primary | Purple | `purple-800` | `#6b21a8` | `--primary` |
| Secondary | Pink | `pink-600` | `#db2777` | `--secondary` |
| Tertiary/Accent | Teal | `teal-300` | `#5eead4` | `--accent` |
| Logo | Purple | `purple-700` | `#7f22ce` | -- (inline SVG only) |

**Decision:** Logo uses `purple-700`, UI primary uses `purple-800`. The 1-shade difference is intentional -- the logo is slightly brighter to stand out against UI chrome.

### Semantic Colors (Light Mode)

| Token | Tailwind / Value | Description |
|---|---|---|
| `background` | slate-50 | Page background |
| `foreground` | slate-950 | Primary text |
| `card` | white | Card surfaces |
| `primary` | purple-800 (light) / purple-700 (dark) | Buttons, primary actions |
| `primary-foreground` | white | Text on primary bg |
| `secondary` | pink-600 | Secondary actions |
| `accent` | teal-300 | Badges, highlights |
| `muted` | neutral-100 | Disabled / subtle bg |
| `muted-foreground` | neutral-500 | Secondary text |
| `border` | neutral-200 | Borders, dividers |
| `destructive` | red-600 | Errors, delete actions |
| `success` | green-500 | Success states |
| `warning` | yellow-500 | Warnings |
| `info` | blue-500 | Information |

### Semantic Colors (Dark Mode)

| Token | Value | Description |
|---|---|---|
| `background` | `#1c1c1c` | Warm dark surface (not pure black) |
| `foreground` | `#e0e0e0` | Softer white text |
| `card` | `#242424` | Elevated card |
| `muted` | `#333333` | Subtle backgrounds |
| `muted-foreground` | `#8c8c8c` | Secondary text |
| `border` | `#383838` | Visible borders |
| `input` | `#404040` | Input backgrounds |
| `accent-foreground` | `#1c1c1c` | Text on accent bg |

Brand colors (`secondary`, `accent`) remain the same across modes. `primary` shifts from purple-800 (light) to purple-700 (dark) for better contrast on dark backgrounds — purple-800 on `#1c1c1c` yielded ~3.8:1 contrast which is borderline WCAG AA.

### Feature Icon Colors

All feature section icons use a single color: **purple** (`bg-purple-100` / `text-purple-600`). Monochromatic icons keep the feature grid calm and professional — the icon shape and title already differentiate each card. No multi-color icon schemes.

### Scene & Emphasis Tokens (added 26 Sep 2026)

| Token | Light | Dark | Used for |
|---|---|---|---|
| `emphasis` | purple-600 | purple-400 | Link text, small labels, list marks, active rules (`text-emphasis`, `border-emphasis/40`) |
| `wash` | purple-50 | `#1f1d23` | Lavender band behind product-heavy sections (`bg-wash`) |
| `glow` | purple-300 @ 35% | purple-700 @ 22% | Radial light behind hero and CTA scenes (`.scene-light`) |
| `scene` / `scene-foreground` / `scene-muted` / `scene-border` | warm near-black `#181614` | `#121212` | The dark focus stage on the home page and the founders note on About. In dark mode it sits one step deeper than the page and gets a top/bottom border so it still reads as a stage. |

Brand `primary` stays for buttons. `text-primary` is never used for text on dark surfaces; use `text-emphasis`.

Activity colors inside screenshots come from the app itself; the site no longer draws its own activity bars.

## Typography

| Role | Font Family | Notes |
|---|---|---|
| Body / UI | Inter | Variable font, loaded via `next/font/google` as `--font-inter` |
| Headings | Inter | Same as body. `font-semibold tracking-tight`, sentence case on the landing page and use-case pages |
| Data / Mono | Geist Mono | Loaded via `next/font/google` as `--font-geist-mono`. Same pair as the desktop app (Inter + Geist Mono) |

**Mono usage:** prices on pricing and offer blocks, version numbers in the changelog, the small moment labels in ClientWork. Never for body copy or headlines.

**Display scale:** hero H1 `text-[2.75rem] → sm:text-6xl → lg:text-[4.25rem] → xl:text-[4.75rem]`, `leading-[1.02] tracking-[-0.035em]`, weight 600. Section H2 `text-4xl sm:text-5xl lg:text-[3.5rem]`, `tracking-[-0.03em]`. Body lead 18-20px, `text-muted-foreground`, `text-pretty`.

**Heading color:** plain `foreground`. Brand color appears on actions and small labels, not across headline words.

### Font Sizes (Tailwind Scale)

`xs` (12px) . `sm` (14px) . `base` (16px) . `lg` (18px) . `xl` (20px) . `2xl` (24px) . `3xl` (30px) . `4xl` (36px) . `5xl` (48px) . `6xl` (60px)

### Font Weights

`regular` (400) . `medium` (500) . `semibold` (600) . `bold` (700) . `extrabold` (800)

---

## Button & CTA Style

**Approach: Solid, not gradient.** All buttons use solid `bg-primary` (the default Button variant). No gradient backgrounds on interactive elements.

| Element | Style | Notes |
|---|---|---|
| Primary CTA | `buttonVariants({ size: "lg" })` | Solid purple-800, white text |
| CTA extras | `press-effect` | Scale to 97% on click |
| Secondary CTA | `variant="outline"` | Bordered, transparent bg |
| Disabled | `pointer-events-none opacity-60` | Gray out |
| Hover | `hover:bg-primary/90` | Slight opacity shift |
| Small CTA (header) | `buttonVariants({ size: "sm" })` | Same solid style |

**What we don't use on buttons:** gradients and glow shadows.

**Decision rationale:** Solid buttons are cleaner at all sizes, especially small (header "Get App"). Gradient buttons read as dated. Modern SaaS (Linear, Vercel, Notion) uses solid-color primaries.

---

## Utility Classes (globals.css)

| Class | Description | Used on |
|---|---|---|
| `.shadow-window` | Layered shadow tinted by `--shadow-tint` (purple in light, black in dark) | Main product windows |
| `.shadow-detail` | Tighter shadow for overlapping detail windows, menus and lead cards | Hero details, header menus, pricing lead card |
| `.scene-light` | Radial `--glow` light | Hero, page heroes, DownloadCTA panel |
| `.scene-dark-glow` | Violet light on the dark focus stage | FocusScene |
| `.enter`, `.enter-scene`, `.enter-detail`, `.enter-detail-late` | One-time CSS entry (rise / float-in) with staggered delays | Above-the-fold hero content |
| `.reveal` | CSS scroll-driven reveal (`animation-timeline: view()`), progressive enhancement | Below-the-fold blocks |
| `.elevation-4` | Floating shadow | Cookie banner |
| `.press-effect` | Scale to 97% on press | Primary CTAs |
| `.text-balance` / `.text-pretty` | `text-wrap` helpers | Headings / leads |

Removed on 26 Sep 2026 because nothing used them: `.glass`, `.border-glow`, `.gradient-glow`, `.card-hover`, `.elevation-2`, `.text-shadow-sm`.

---

## Section Design Patterns

Direction (from `docs/WEBSITE_CREATIVE_IMPLEMENTATION_BRIEF.md`): **calm energy, strong product scenes.** Bright surfaces with a lavender light, one dark focus stage, real product views, and a different composition for every section.

### Product screenshots

- Sources: `public/screenshots/{light,dark}/*.webp`, 1920×1157, captured from the seeded demo (see `docs/APP_REALITY.md`).
- Every region is a named crop in `src/lib/screens.ts` (`x`, `y`, `w`, `h` as fractions). Add a crop there; never inline one.
- `ProductShot` renders the crop, swapping light/dark files with the theme (or forced with `theme="dark"`). `AppWindow` adds neutral window chrome whose title is the app screen name (`screens.*` in messages).
- Crop to the region that tells the story and keep text near its natural size. `capToSource` caps a small crop at 72% of its source pixels so it is never blown up.
- Provide a mobile crop (`md:hidden` / `hidden md:block`) for any full-width view: phones get a close-up, not a miniature.
- Layered scenes (hero, ClientWork) keep each layer in its own titled window so separate screens never look like one automatic process. Show "sample data" near product scenes.

### Home page scenes

| # | Component | Composition |
|---|---|---|
| 1 | `HeroSection` | 45/55 split. Left: category label, H1, lead, two CTAs, platform note. Right: Focus window + Insights and Timecards detail windows. |
| – | `SocialProofBar` | Four product facts in one row with icons. No invented numbers. |
| 2 | `DaySection` | Centered heading, Productivity/Calendar tab switch (`DayViews`), wide window, three `border-l` notes. |
| 3 | `FocusScene` | Full-bleed dark `scene` stage, 5/7 split, dark Focus window, three facts, music station chips. No audio. |
| 4 | `FeatureBento` | 12-column bento: 7/5 then 5/7, tinted surfaces, each card with a real crop and a working link. |
| 5 | `ClientWork` | `bg-wash` band, three connected moments (Review → Choose → Prepare) with arrows, early-access badge, invoice note. |
| 6 | `UseCaseGrid` | Freelancers card 2×2, developers 2×1, remote and students 1×1, each with a different product focus. |
| 7 | `CompareTeaser` | Heading + links left, divided list of three comparisons right. |
| 8 | `TrustOffer` | Recorded / never recorded panel + storage note, next to free and early-access offer blocks. |
| 9 | `FAQSection` + `DownloadCTA` | Two-column native `<details>` FAQ; lavender CTA panel with a small product composition. |

### Page families

- **Feature** (`FeaturePage`): breadcrumb, stacked hero with full-width window, three outcomes (`border-t` accents), sticky flow with timeline dots on `bg-wash`, related links, DownloadCTA.
- **Use case** (`UseCaseTemplate`): split hero, "a day like yours" editorial paragraph on `bg-wash`, two alternating scenes, FAQ with next-step links, DownloadCTA.
- **Comparison** (`ComparisonTemplate`): H1 with the competitor name, "fits if" decision boxes, criteria table (stacked cards on mobile), FocusNow experience scene, three short sections, switching note, sources + check date, FAQ, DownloadCTA.
- **Hub pages** (`/compare`, `/alternatives`): typographic hero, rich rows or tool cards, method/disclosure note.
- **Reading** (blog, guide, legal): 44-46rem column, 17px/32px body via `MarkdownBody` or `LegalDocument`. Never used on the home page.

### What NOT to use

- Div-built fake UI, abstract illustrations, invented logos or user counts.
- The same layout family twice on one page; three image/text zigzags in a row.
- Eyebrow labels on every section (max one per three sections).
- Circle step badges with connector lines, gradient buttons, glow shadows on buttons.
- Motion that hides content: no `initial={{ opacity: 0 }}` on page content, no scroll hijacking, no looping decorative animation.

---

## Animation Patterns

Content must be readable without JavaScript and with reduced motion.

- **Hero:** CSS keyframes `rise-in` / `float-in` via `.enter*` classes (0.6-0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 0.12-0.6s).
- **Below the fold:** `.reveal` uses `animation-timeline: view()` inside `@supports`; browsers without it simply show the content.
- **State changes:** `DayViews` cross-fades stacked panels (opacity only) so switching never waits for an image.
- Everything is wrapped in `@media (prefers-reduced-motion: no-preference)`; the global reduced-motion block also shortens transitions.

---

## Badge Hierarchy

Badges use a visual hierarchy to communicate their role. The `secondary` variant (pink-600) is **not used on badges** — pink is too dominant for small informational elements and creates visual noise when repeated across many pages.

| Role | Variant / Classes | Appearance | Where |
|---|---|---|---|
| Primary action | `default` (`bg-primary`) | Solid purple | Pricing "Free", Download "Detected" |
| Status note | `EarlyAccessBadge` (`border-emphasis/30`, `text-emphasis`) | Outlined pill | Client tools, timecards pages, pricing |
| Informational | `variant="outline"` | Bordered, neutral | Blog tags, changelog version, download platform |
| Passive / pending | `bg-muted text-muted-foreground border-border` | Gray bg | Pricing "Pro", Feature "Coming Soon" |

**Decision rationale:** Pink-600 badges competed with primary purple for attention and made the page feel noisy. Outline badges for informational content recede naturally, letting primary-action badges stand out. Muted badges communicate "not yet active" for upcoming features.

---

## Dark/Light Mode

- Toggled via `.dark` class on root element using `next-themes`.
- `ThemeProvider` in `src/components/shared/theme-provider.tsx` wraps the app.
- `ThemeToggle` in header (desktop + mobile).
- `defaultTheme="light"`, `enableSystem` enabled.
- CSS custom properties in `:root` (light) and `.dark` (dark) drive all semantic colors.
- Dark mode uses warm neutral tones (`hsl(0 0% ...)`) for a Notion-like feel, avoiding pure black.
- Brand colors (primary, secondary, accent) are identical across modes.
- Text emphasis uses the `emphasis` token (`purple-600` light / `purple-400` dark).

### Responsive navigation and pricing notes

Header: Product · Use cases · Compare · Resources (disclosure menus from `src/lib/site-nav.ts`, Escape/outside-click close, links always in the HTML) + Pricing + Download button. The full navigation starts at `lg` (1024px); smaller widths use a grouped sheet with the same links. Contact stays in the footer. Pricing shows three columns: Free core, client tools in early access, and a Pro news signup without a price or feature promises.
