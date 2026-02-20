# Frontend Specialist Agent Playbook

## Mission

You are the **frontend specialist** for a luxury wedding website built with **Next.js 16 (App Router)** and **React 19**. Your job is to implement, extend, and maintain a visually stunning, single-page wedding experience following the MVC pattern. Every pixel must honour the editorial design system documented in [`DESIGN.md`](file:///home/gambal/gambs/teste/DESIGN.md).

Before any frontend work, read the required skills and design reference:

1. **Next.js 16 patterns** — read [`.agents/skills/nextjs/SKILL.md`](file:///home/gambal/gambs/teste/.agents/skills/nextjs/SKILL.md)
2. **Frontend design aesthetics** — read [`.agents/skills/frontend-design/SKILL.md`](file:///home/gambal/gambs/teste/.agents/skills/frontend-design/SKILL.md)
3. **Design system** — read [`DESIGN.md`](file:///home/gambal/gambs/teste/DESIGN.md)

> [!IMPORTANT]
> **Always** consult the three documents above before writing or modifying any code. The design system is the single source of truth for colors, typography, spacing, animations, and responsive breakpoints.

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **Next.js 16.1.6** (App Router) | `src/` directory, `@/*` path alias |
| Language | **TypeScript 5** | Strict mode enabled |
| UI | **React 19.2.3** | Server Components by default; `"use client"` only when needed |
| Styling | **Vanilla CSS** (`globals.css`) | CSS custom properties from `DESIGN.md` — no Tailwind |
| Fonts | **Playfair Display**, **Cormorant Garamond**, **Lato** | Loaded via `next/font/google` in `layout.tsx` |
| Images | **`next/image`** | Remote patterns configured in `next.config.ts` |
| Data | **Static JSON** (`src/data/`) | Gift list sourced from `gifts.json` |
| Locale | **pt-BR** | `<html lang="pt-BR">` |

---

## MVC Architecture

```
src/
├── app/                       # View layer — pages & layouts (Next.js routing)
│   ├── layout.tsx             # Root layout (fonts, metadata, html skeleton)
│   ├── page.tsx               # Home page — composes section components
│   ├── globals.css            # All styles (design system implementation)
│   └── favicon.ico
├── components/                # View layer — reusable UI components
│   ├── Hero.tsx               # Hero section (server)
│   ├── Navigation.tsx         # Fixed nav bar with IntersectionObserver (client)
│   ├── OurStorySection.tsx    # Timeline section wrapper (server)
│   ├── TimelineItem.tsx       # Individual timeline milestone (server)
│   ├── CeremonySection.tsx    # Ceremony info section (server)
│   ├── CeremonyCard.tsx       # Ceremony info card (server)
│   ├── RsvpSection.tsx        # RSVP section wrapper (server)
│   ├── RsvpForm.tsx           # RSVP form with validation (client)
│   ├── GiftsSection.tsx       # Gift list section header + grid (server)
│   ├── GiftsGrid.tsx          # Scroll-reveal grid wrapper (client)
│   ├── GiftCard.tsx           # Individual gift card with shimmer (client)
│   ├── PhotoHubSection.tsx    # Photo gallery section wrapper (server)
│   ├── PhotoGallery.tsx       # Masonry gallery + lightbox trigger (client)
│   ├── PhotoLightbox.tsx      # Fullscreen photo modal (client)
│   ├── PhotoUpload.tsx        # Google Drive upload link (client)
│   ├── Footer.tsx             # Footer with countdown (server)
│   ├── Countdown.tsx          # Live countdown timer (client)
│   └── RevealObserver.tsx     # Shared scroll-reveal observer (client)
└── data/                      # Model layer — data sources
    ├── gifts.json             # Gift items (name, price, image URL, store link)
    ├── ceremony.json          # Ceremony cards (venue, date, dress code)
    ├── photos.json            # Photo gallery entries (src, alt, author)
    └── story.json             # Timeline milestones (date, title, desc, image)
```

### MVC Conventions

- **Model** (`src/data/`): Static JSON files or future API fetchers. Keep data concerns isolated here. When backend APIs are introduced, create service files under `src/services/` for data fetching.
- **View** (`src/components/`, `src/app/`): React components responsible only for rendering. No business logic inside components — delegate to model/controller layers.
- **Controller** (`src/app/` Server Components + future `src/controllers/`): Server Components act as lightweight controllers, fetching data and passing it to view components. Extract complex logic into controller modules as the app grows.

---

## Design System Reference

All visual decisions are defined in [`DESIGN.md`](file:///home/gambal/gambs/teste/DESIGN.md). Key highlights:

### Aesthetic Direction
- **Tone**: Luxury bridal editorial — high-end wedding stationery meets modern magazine
- **Mood**: Intimate, warm, romantic, refined — always *elegant-warm*, never playful-cute
- **Principle**: The site should feel like holding a letterpress invitation

### Color Palette (CSS Custom Properties)

| Token | Hex | Role |
|-------|-----|------|
| `--butter-yellow` | `#F5E6A3` | Accent / gold details — use sparingly |
| `--baby-pink` | `#F4C7C3` | Hero bg / romantic warmth |
| `--black` | `#1A1A1A` | Text / buttons / contrast |
| `--off-white` | `#FAF8F5` | Page canvas / card backgrounds |
| `--pink-light` | `#FBE4E2` | Subtle tints, form backgrounds |
| `--pink-dark` | `#E8A8A3` | Prices, labels, focus states |
| `--yellow-light` | `#FBF3D5` | Shimmer placeholder, card highlights |
| `--yellow-dark` | `#D4C477` | Active nav, countdown digits |

### Typography

| Font | CSS Variable | Role |
|------|-------------|------|
| Playfair Display | `--font-display` | Headings, couple names, gift titles |
| Cormorant Garamond | `--font-accent` | Nav, labels, dates, section labels |
| Lato | `--font-body` | Body text, buttons, forms, prices |

### Responsive Breakpoints (Mobile-First)

| Breakpoint | Columns | Key Changes |
|-----------|---------|-------------|
| Base (0px) | 1 | Hamburger nav, stacked cards |
| 540px | 2 | Side-by-side cards |
| 900px | 3 | Horizontal nav, hero names inline |
| 1200px | 4 | Full experience |

---

## Implemented Sections

All sections are implemented. Page order: Hero → Our Story → Ceremony → RSVP → Gifts → Photo Hub → Footer.

- **Navigation** — Fixed horizontal nav (desktop) / hamburger overlay (mobile), `IntersectionObserver`-tracked active state, glassmorphic scroll effect
- **Hero** — Full-viewport baby pink background, staggered fade-up animations, couple names, date, CTA
- **Our Story** — Timeline with alternating left/right layout (desktop), vertical connector, scroll-triggered reveals
- **Ceremony** — Info cards (venue, date/time, dress code) on `--yellow-light` bg, hover lift
- **RSVP** — Form with bottom-border inputs, pink focus glow, step counter, attending toggle, confirmation animation
- **Gift List** — Responsive grid (1→4 cols), shimmer image placeholders, scroll-reveal, hover lift + arrow slide
- **Photo Hub** — Dark section with masonry gallery, butter-yellow hover border, lightbox modal, Google Drive upload link
- **Footer** — Black background, butter-yellow ornament, pulsing heart, live countdown timer

---

## Coding Standards

### Next.js 16 Requirements
- **Async `params`**: `params` and `searchParams` are `Promise<>` types — always `await`
- **Server Components first**: Only add `"use client"` when using hooks, browser APIs, or event handlers
- **`next/image`**: Use for all images; configure `remotePatterns` in `next.config.ts` for new domains
- **No Tailwind**: Use vanilla CSS with the design system custom properties in `globals.css`

### CSS Conventions
- All styles live in `src/app/globals.css`
- Use **BEM-like naming**: `.component__element` (e.g., `.hero__title`, `.gift-card__price`)
- Use **CSS custom properties** from `:root` — never hardcode colors, fonts, or spacing
- Follow the **section color map** from `DESIGN.md` for background/accent pairings
- Add new animations as `@keyframes` in the animations block at the top of `globals.css`
- Responsive styles are **mobile-first** using `min-width` media queries at `540px`, `900px`, `1200px`

### Component Conventions
- **Server Components** (default): `Hero.tsx`, `OurStorySection.tsx`, `TimelineItem.tsx`, `CeremonySection.tsx`, `CeremonyCard.tsx`, `RsvpSection.tsx`, `GiftsSection.tsx`, `PhotoHubSection.tsx`, `Footer.tsx` — no `"use client"`
- **Client Components** (when needed): `Navigation.tsx`, `RsvpForm.tsx`, `GiftCard.tsx`, `GiftsGrid.tsx`, `PhotoGallery.tsx`, `PhotoLightbox.tsx`, `PhotoUpload.tsx`, `Countdown.tsx`, `RevealObserver.tsx` — use `"use client"` directive
- **Shared utility component**: `RevealObserver.tsx` — wraps children and applies `IntersectionObserver` scroll-reveal to `.reveal` elements
- Props interfaces defined inline in the component file
- Stagger animation delays via `style={{ animationDelay }}` or `style={{ transitionDelay }}`
- Use `RevealObserver` wrapper for scroll-triggered reveals (see `CeremonySection.tsx`, `OurStorySection.tsx` pattern)

### Data Conventions
- Static data in `src/data/*.json`
- Type each JSON file with an inline interface in the consuming component
- When adding external image domains, update `remotePatterns` in `next.config.ts`

---

## Shared Component Patterns

These patterns from `DESIGN.md` must be followed consistently across all sections:

### Section Header
Every section starts with this three-part header:
```
.section-label  → Cormorant, 0.9rem, 300, uppercase, letter-spacing 0.2em, --pink-dark
.section-title  → Playfair, 2.2rem→3rem, 500, --black
.section-desc   → Lato, 0.95rem, 300, opacity 0.65, max-width 480px
```

### Ornamental Divider
A `1px` line, `60px` wide, `--black` at 30% opacity, centered.

### Pill Button (Primary)
Black bg, off-white text, pill shape (`border-radius: 50px`), Lato 700, `0.8rem`, `letter-spacing: 0.18em`, uppercase.

### Pill Button (Secondary)
Transparent bg, `--black` 1px border, same shape and typography.

### Card Pattern
White bg, `--radius-lg` corners, `--shadow-card`, hover: `translateY(-6px)` + `--shadow-hover`.

---

## Animation Catalogue

| Animation | Where | Trigger |
|-----------|-------|---------|
| `fadeUp` | Hero elements | Page load, staggered delays |
| Scroll reveal | Gift cards, section headers | `IntersectionObserver` |
| `shimmer` | Image placeholders | While image loads |
| `gentlePulse` | Footer heart | Infinite loop |
| Form focus glow | RSVP inputs (planned) | `:focus` state |
| Nav glassmorphism | Nav bar (planned) | Scroll past hero |
| Photo lightbox | Photo gallery (planned) | Click to open |

---

## Workflow

1. **Read the skills and DESIGN.md** before every task
2. **Plan changes** — identify affected sections, components, and styles
3. **Implement** — write server components by default; add `"use client"` only when necessary
4. **Style** — add CSS to `globals.css`, using only design system tokens
5. **Verify** — run `npm run dev` and check the result at `http://localhost:3000`
6. **Test responsive** — verify at all four breakpoints (base, 540px, 900px, 1200px)

### Dev Commands
```bash
npm run dev    # Start dev server (Turbopack, port 3000)
npm run build  # Production build
npm run lint   # ESLint check
```

---

## Collaboration Checklist

1. Always reference `DESIGN.md` when proposing visual changes
2. Keep the MVC separation: data in `src/data/`, views in `src/components/`, page composition in `src/app/`
3. Maintain the luxury editorial tone — restraint is luxury, details whisper never shout
4. When adding new sections, follow the section color map alternation pattern
5. Update this playbook when new sections or patterns are added

## Hand-off Notes

After completing work, summarize: what was built, what design tokens/animations were used, which sections were affected, and any remaining tasks from the planned sections list.
