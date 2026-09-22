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

### Activity Status Colors

Product mockups (hero dashboard mockup, bento screenshot tabs) use shared activity-status colors that mirror the desktop app's activity semantics. Defined once in `src/lib/activity-colors.ts` — always import from there, never hardcode.

| Status | Light | Dark |
|---|---|---|
| Focus | `bg-emerald-500` | `dark:bg-emerald-400` |
| Neutral | `bg-blue-500` | `dark:bg-blue-400` |
| Distraction | `bg-red-500` | `dark:bg-red-400` |
| Idle / Away | `bg-gray-400` | `dark:bg-gray-500` |

Used for stacked timeline bars, legend dots, and activity-row status dots.

### Text Emphasis Colors

For highlighted text (section titles, links), use these instead of semantic tokens -- `--primary` is optimized for backgrounds, not text readability:

| Context | Light Mode | Dark Mode |
|---|---|---|
| Section title highlights | `text-purple-600` | `dark:text-purple-400` |
| Links / "Read More" | `text-purple-600` | `dark:text-purple-400` |

---

## Typography

| Role | Font Family | Notes |
|---|---|---|
| Body / UI | Inter | Variable font, loaded via `next/font/google` |
| Headings | Inter | Same as body for visual consistency |
| Code / Mono | System mono | `ui-monospace, SFMono-Regular, Menlo, monospace` (no web font) |

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
| `.elevation-2` / `.elevation-4` | Shadow scale (hover lift / floating) | Feature, pricing and download cards; hero and showcase screenshots, cookie banner |
| `.card-hover` | Lift 2px on hover | Blog, guide and download cards |
| `.press-effect` | Scale to 97% on active press | Primary CTAs |
| `.glass` | Glassmorphism backdrop blur | Window chrome of hero and showcase screenshots |
| `.border-glow` | Gradient border on hover (purple/pink/teal) | Pricing, comparison and download cards |
| `.gradient-glow` | Subtle purple ambient glow behind screenshots | Hero screenshot, product showcase |
| `.text-shadow-sm` | Soft text shadow | Hero |
| `.text-balance` | `text-wrap: balance` | Section headings |

---

## Section Design Patterns

The site uses two distinct section styles that alternate to create visual rhythm. **Do not mix these patterns within a single section.**

### Rich / Interactive Sections

Used for **product showcases** where the goal is to demonstrate what the product does.

| Pattern | Where Used | Key Elements |
|---|---|---|
| Product showcase | Landing `ProductShowcase` | Real app screenshots in a window chrome (`glass` + traffic light dots) with six tabs: dashboard, report, analytics, activities, sessions, categories |
| Feature cards | Landing `BentoFeatures` | Four equal cards (`grid sm:grid-cols-2 lg:grid-cols-4`); each card is a button that opens its showcase tab. Below them an "included" list |

**Feature card anatomy:**
```
button (rounded-xl border border-border/40 bg-card p-6, hover:border-purple-400/50 hover:elevation-2)
├─ Icon container: w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30
│   └─ Icon: h-5 w-5 text-purple-600 dark:text-purple-400
├─ Title: mt-4 font-semibold text-lg
├─ Description: mt-2 text-sm text-muted-foreground
└─ Hover-only link hint (ArrowUpRight)
```

**Hero screenshot:** `HeroSection` shows a real app screenshot (`/screenshots/hero-analytics-v3.webp`) inside the same window chrome (`glass` title bar + traffic lights).

### Minimal / Typographic Sections

Used for **explanatory content** where the goal is clarity and scannability, not visual richness. Typography and whitespace do the work.

| Pattern | Where Used | Key Elements |
|---|---|---|
| Numbered steps | Landing `HowItWorks` | Large faded numbers (`text-5xl/6xl`, `purple-600/15` opacity), bold titles, single-sentence descriptions. No cards, no borders, no illustrations. |
| Value pillars | About page | Icon + heading + 2-3 sentence paragraph per pillar. No cards, no borders. Equal-weight grid (`grid-cols-1 md:grid-cols-3`). |
| Social proof strip | Landing `SocialProofBar` | Inline icon + text pairs, flex row, `text-sm text-muted-foreground`. |
| CTA block | Landing `DownloadCTA` | Centered heading + description + single button. Gradient background. |

### Rhythm Rule

**Rich → Minimal → CTA.** The landing page alternates between dense and sparse:
```
HeroSection (rich — split layout, real screenshot)
SocialProofBar (minimal — icon + text strip)
ProductShowcase (rich — tabbed real screenshots)
BentoFeatures (rich — four feature cards)
HowItWorks (minimal — typographic numbered steps)
FAQSection (minimal — expandable questions)
DownloadCTA (minimal — centered text + button with gradient bg)
```

This prevents "card fatigue" and gives the eye rest between dense sections.

### What NOT to Use

Based on research of modern SaaS patterns (Linear, Raycast, Vercel, Rize, Superhuman):

- **No "Step 1, Step 2, Step 3" with circle badges and connector lines.** This is the most template-looking SaaS pattern. Use large faded numbers + typography instead.
- **No abstract/whimsical illustrations** (Undraw, Humaaans style). Show the actual product or use pure typography.
- **No window chrome mockup for non-product content.** The glass + traffic lights pattern is for product demo previews only, not for data lists or tech stacks.
- **No gratuitous motion.** Parallax, floating elements, spinning icons signal 2019. Motion should demonstrate functionality or reveal content on scroll.
- **No card wrappers on informational-only content.** If a section just has title + paragraph (like About pillars or HowItWorks steps), use typography and whitespace, not cards.

---

## Animation Patterns

All sections use `framer-motion`. Two standard patterns:

### Container Stagger (for groups of items)
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12–0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16–24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Usage:
<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
  <motion.div variants={itemVariants}>...</motion.div>
</motion.div>
```

- `staggerChildren: 0.12` for bento grid (5 items, fast reveal)
- `staggerChildren: 0.15–0.2` for smaller groups (3 items)
- Always use `whileInView` + `viewport={{ once: true }}`, never `animate` (which fires on page load)
- Exception: page hero headers use `animate` since they're above the fold

### SVG / Chart Animations (viewport-triggered)
```tsx
<motion.div
  initial={{ width: "0%" / height: 0 / strokeDashoffset: circumference }}
  whileInView={{ width: "80%" / height: "72%" / strokeDashoffset: target }}
  viewport={{ once: true }}
  transition={{ duration: 0.5–1.5, ease: "easeOut" }}
/>
```

Used in bento cards for progress bars, bar charts, and circular progress rings.

---

## Badge Hierarchy

Badges use a visual hierarchy to communicate their role. The `secondary` variant (pink-600) is **not used on badges** — pink is too dominant for small informational elements and creates visual noise when repeated across many pages.

| Role | Variant / Classes | Appearance | Where |
|---|---|---|---|
| Primary action | `default` (`bg-primary`) | Solid purple | Pricing "Free", Download "Detected" |
| Hero emphasis | Custom purple classes | Light purple bg | Hero badge (custom) |
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
- Text emphasis uses `purple-600` (light) / `purple-400` (dark) for readability.
- `.glass` automatically adapts its background opacity and border color.
