# Casamento — Design System

A luxury editorial design system for a chic, multi-section wedding website. Every detail is intentional — from ink-weight typography to micro-animations — to evoke the feeling of receiving a beautifully crafted invitation.

---

## Vision & Aesthetic Direction

**Tone**: Luxury bridal editorial — high-end wedding stationery meets modern magazine.  
**Mood**: Intimate, warm, romantic, refined. Never playful-cute; always *elegant-warm*.  
**One memorable thing**: The site should feel like holding a letterpress invitation — textured, deliberate, precious.

### Design Principles

1. **Restraint is luxury** — Whitespace is as important as content. Never fill space just because it's empty.
2. **Every section tells a story** — The scroll should feel like turning pages of a beautifully bound book.
3. **Details whisper, never shout** — Micro-animations, subtle textures, and delicate ornaments over loud effects.
4. **Consistency builds trust** — Same spacing rhythm, same transition curve, same typographic hierarchy across every section.

---

## Site Architecture

The site is a single-page experience with smooth-scrolling navigation. Each section has its own visual personality while sharing the same design DNA.

| Section | Purpose | Emotional Beat |
|---------|---------|----------------|
| **Hero** | First impression — couple names, date, welcome | *"You're invited to something special"* |
| **Our Story** *(future)* | Couple's narrative, timeline | *"This is who we are"* |
| **Ceremony** | Date, time, venue, map, dress code | *"Here's what you need to know"* |
| **RSVP** | Presence confirmation form | *"We need to hear from you"* |
| **Gift List** | Product cards linking to stores | *"If you'd like to give us something"* |
| **Photo Hub** | Guest photo gallery / upload | *"Share the memories with us"* |
| **Footer** | Credits, social links, countdown | *"With love"* |

### Navigation

- **Mobile**: Hamburger icon (top-right), fullscreen overlay menu with staggered link reveals. Background: `--black` with `--off-white` text.
- **Desktop**: Fixed horizontal nav, transparent over hero, gains `--off-white` background with subtle shadow on scroll. Links use Cormorant Garamond, uppercase, `letter-spacing: 0.15em`.
- **Active state**: A small dot (·) or thin underline in `--butter-yellow` beneath the current section link — tracked via `IntersectionObserver`.

---

## Color Palette

| Token | Hex | Role | Why |
|-------|-----|------|-----|
| **Butter Yellow** | `#F5E6A3` | Accent / gold details | Warm gold that evokes celebration. Used like gold foil on invitations — sparingly and with intention. |
| **Baby Pink** | `#F4C7C3` | Hero / section tints / romantic warmth | Romantic and soft. Sets the emotional tone. Paired with the SVG cross-stitch pattern it feels like luxury fabric. |
| **Black** | `#1A1A1A` | Text / buttons / contrast | Not pure `#000` — the slight warmth avoids harsh contrast. Grounds the design with editorial authority. |
| **Off-White** | `#FAF8F5` | Page canvas / card backgrounds | Warmer than `#FFF`, feels like premium uncoated paper. |

### Extended Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--pink-light` | `#FBE4E2` | Subtle tints, RSVP form background, alternating section bands |
| `--pink-dark` | `#E8A8A3` | Prices, section labels, form focus border, link accents |
| `--yellow-light` | `#FBF3D5` | Shimmer placeholder, photo hub card background, ceremony highlight |
| `--yellow-dark` | `#D4C477` | Active nav indicator, countdown digits, map marker accent |

### Color Usage Rules

- **Baby Pink** → Hero background, RSVP section tint, and small accent pops (heart icon). Never for large body areas.
- **Off-White** → The default canvas. Let whitespace breathe.
- **Black** → Text and high-contrast interactive elements. Nav overlay, CTA buttons.
- **Butter Yellow** → Decorative details only: nav indicator, ornamental dividers, countdown accent, form focus glow. Restraint makes it luxurious.

### Section Color Map

| Section | Background | Accent |
|---------|-----------|--------|
| Hero | `--baby-pink` + SVG pattern | `--black` text |
| Ceremony | `--off-white` | `--yellow-light` info cards |
| RSVP | `--pink-light` | `--pink-dark` focus states |
| Gift List | `--off-white` | `--pink-dark` prices |
| Photo Hub | `--black` | `--butter-yellow` accents |
| Footer | `--black` | `--butter-yellow` ornament |

Alternating between light and dark backgrounds creates visual rhythm and prevents scroll fatigue.

---

## Typography

Three fonts, each with a distinct role:

### Playfair Display — Display / Headings
```css
font-family: 'Playfair Display', Georgia, serif;
```
- **Where**: Couple names (`h1`), section titles (`h2`), gift card names, ceremony venue name
- **Why**: High-contrast serif with elegant thick-thin strokes. Reads as *editorial* and *bridal* without being ornate. The italic variant adds romance wherever used.
- **Weights**: 400 (regular), 500 (section titles), 600 (hero name emphasis)

### Cormorant Garamond — Accent / Supporting Serif
```css
font-family: 'Cormorant Garamond', 'Times New Roman', serif;
```
- **Where**: Navigation links, hero pre-text, wedding date, section labels ("Com Carinho", "Cerimônia"), footer text, RSVP section intro, photo hub caption
- **Why**: Lighter and more delicate than Playfair. Its 300 weight in uppercase with `letter-spacing: 0.2em` creates the look of engraved invitation text. Pairs with Playfair without competing.
- **Weights**: 300 (light), 400 (regular), 600 (nav active)

### Lato — Body / UI
```css
font-family: 'Lato', 'Helvetica Neue', sans-serif;
```
- **Where**: Body text, descriptions, prices, buttons, form labels, form inputs, photo metadata, ceremony details (time, address)
- **Why**: Clean humanist sans-serif. Legible at small sizes, geometric warmth complements the serifs. 300 for descriptions, 400 for forms, 700 for buttons/prices.
- **Weights**: 300 (light), 400 (regular), 700 (bold)

### Typography Scale

| Element | Font | Size (mobile → desktop) | Weight | Extras |
|---------|------|-------------------------|--------|--------|
| Hero title | Playfair | `3rem` → `4.5rem` | 400 | Scales at breakpoints |
| Hero pre-text | Cormorant | `1rem` | 300 | `letter-spacing: 0.2em`, uppercase |
| Section title | Playfair | `2.2rem` → `3rem` | 500 | — |
| Section label | Cormorant | `0.9rem` | 300 | uppercase, `--pink-dark` |
| Body text | Lato | `0.95rem` | 300 | `line-height: 1.7` |
| Gift name | Playfair | `1rem` | 500 | — |
| Gift price | Lato | `0.9rem` | 700 | `--pink-dark` |
| Button text | Lato | `0.8rem` | 700 | `letter-spacing: 0.18em`, uppercase |
| Nav links | Cormorant | `0.85rem` | 400 | uppercase, `letter-spacing: 0.15em` |
| Form label | Lato | `0.8rem` | 700 | uppercase, `letter-spacing: 0.1em` |
| Form input | Lato | `1rem` | 400 | — |

---

## Section Design Specs

### Hero

- Full-viewport (`100dvh`), baby pink background with SVG cross-stitch pattern
- Gradient overlay softens the pattern (88% → 75% → 92% opacity)
- Staggered fade-up animations on every element (0.2s → 1.5s delays)
- Content: Pre-text → Couple Names → Divider → Date → Subtitle → CTA
- CTA pill button: black bg, off-white text, pill-shaped (`border-radius: 50px`)

### Ceremony

- Off-white background section with centered layout
- **Info cards**: 2–3 cards in a row (venue, date/time, dress code) with `--yellow-light` background, `--radius-lg` corners, subtle shadow
- Each card has an icon/emoji top, Playfair title, Lato detail text
- Optional embedded map with rounded corners and border in `--pink-light`
- Ornamental divider between section label and content (thin `1px` line, `--black` at 15% opacity)

### RSVP

- `--pink-light` background band to distinguish from surrounding sections
- Centered form, max-width `480px`
- **Inputs**: Bottom-border-only style (minimal, no box borders). `--black` border at 20% opacity, `--pink-dark` on focus with smooth transition. Lato 400 for input text.
- **Labels**: Lato 700, 0.8rem, uppercase, floating label pattern or above-input
- **Submit button**: Same style as hero CTA (black pill). Hover lift + shadow.
- **Confirmation state**: Fade-transition to a "thank you" message with a gentle scale-in animation
- Fields: Name, Email, Number of guests (stepper), Dietary restrictions (optional textarea), Attending (yes/no toggle)

### Gift List (existing)

- Off-white background, max-width `1200px`
- Responsive grid: 1 → 2 → 3 → 4 columns
- Cards: white bg, `12px` radius, `1:1` aspect-ratio image, title + price + "Ver na Loja →" action
- Shimmer loading placeholder while images load
- Scroll-reveal with staggered delays
- Card hover: 6px lift + deeper shadow + 5% image zoom + arrow slide

### Photo Hub

- **Dark section** (`--black` background) — creates dramatic contrast in the scroll rhythm
- `--off-white` text, `--butter-yellow` accents
- Masonry or column-based gallery layout
- Photos with rounded corners (`--radius-lg`), subtle `--butter-yellow` border on hover
- **Upload area**: Dashed border (`--butter-yellow` at 40% opacity), drag-and-drop with icon, "Compartilhe suas fotos" label in Cormorant
- Lightbox modal for full-size photo viewing (black overlay, centered image, close button)
- Photo cards can show photographer name / guest name in Lato 300

### Footer

- `--black` background, `--off-white` text
- Centered layout with ornamental `--butter-yellow` line divider
- "Feito com ♥" in Cormorant, pulsing heart in `--baby-pink`
- Optional: countdown timer to wedding date (days, hours, minutes) using `--butter-yellow` digits in Playfair Display

---

## Effects & Animations

### 1. Hero Staggered Fade-Up
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
- **Where**: Hero content elements with incremental `animation-delay` (0.2s → 1.5s)
- **Why**: Cinematic reveal — like unfolding an invitation. Sets the premium tone.
- **Rule**: Only on page load, only in the hero. Never repeat elsewhere.

### 2. Scroll Reveal (Cards & Sections)
```css
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```
- **Where**: Gift cards, ceremony info cards, photo hub items, section headers
- **Why**: Progressive disclosure. Content rises gently into view as the user scrolls, creating a sense of discovery.
- **Stagger**: `transitionDelay = (index % columns) * 0.1s` for grid items

### 3. Image Shimmer Placeholder
```css
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```
- **Where**: Gift card images, photo hub thumbnails — any lazy-loaded image
- **Why**: Elegant loading state using on-palette colors (`--off-white` → `--yellow-light`). Better than spinners.

### 4. Heart Pulse
```css
@keyframes gentlePulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
}
```
- **Where**: Footer heart icon
- **Why**: Tiny organic detail. 5% scale feels like a heartbeat, not a bounce.

### 5. Form Focus Glow *(new)*
```css
input:focus { border-color: var(--pink-dark); box-shadow: 0 2px 8px rgba(232, 168, 163, 0.25); }
```
- **Where**: RSVP form inputs
- **Why**: Soft pink glow confirms the active field without jarring color shifts.

### 6. Nav Background Transition *(new)*
```css
.nav.scrolled { background: rgba(250, 248, 245, 0.95); backdrop-filter: blur(8px); box-shadow: 0 1px 12px rgba(26,26,26,0.06); }
```
- **Where**: Fixed navigation bar after scrolling past the hero
- **Why**: Glassmorphic transparency keeps the nav elegant while ensuring readability over content.

### 7. Photo Lightbox *(new)*
- Modal fades in with `opacity 0→1` over 0.3s
- Image scales in from `0.9→1` with the same timing
- Backdrop uses `backdrop-filter: blur(4px)` on semi-transparent black
- Close on click outside or ✕ button (top-right, `--off-white`)

---

## Hover Effects

### Card Lift — Gift cards, ceremony cards, photo cards
```css
.card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
```
- Upward lift + deepening shadow simulates rising off the page. The `cubic-bezier(0.25, 0.46, 0.45, 0.94)` easing feels organic.
- 6px for standard cards; 3px for smaller elements like nav items.

### Image Zoom — Gift cards, photo hub
```css
.card:hover img { transform: scale(1.05); }
```
- 5% zoom invites closer inspection. Always pair with `overflow: hidden` on the container.

### CTA Button Hover — Hero CTA, RSVP submit, any primary button
```css
.btn-primary:hover { background: #333; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,26,26,0.2); }
```
- Lighter black for feedback, 2px lift (smaller than cards — proportional to element size).

### Action Arrow Slide — "Ver na Loja →", "Ver Mapa →"
```css
.action:hover::after { transform: translateX(4px); }
```
- Arrow slides right + opacity increases (0.45 → 0.8). Reinforces clickability.

### Photo Border Glow *(new)*
```css
.photo:hover { border-color: var(--butter-yellow); box-shadow: 0 0 16px rgba(245,230,163,0.2); }
```
- Warm golden glow on photo hover. Subtle but luxurious.

---

## Responsive Strategy

Mobile-first with 3 breakpoints:

| Breakpoint | Grid Columns | Hero Title | Nav | Layout Notes |
|------------|-------------|------------|-----|-------------|
| Base (0px) | 1 col | `3rem`, stacked | Hamburger | Full-width cards, stacked ceremony cards |
| `540px` | 2 col | `3.8rem` | Hamburger | Side-by-side ceremony cards |
| `900px` | 3 col | `4.5rem`, inline | Horizontal bar | 3-col gift grid, photo masonry unlocks |
| `1200px` | 4 col | — | — | Full experience, 4-col gifts |

### Why these breakpoints

- **540px**: Catches tablets without cramming 2 columns on phones (390–430px wide).
- **900px**: Where 3 cards breathe with proper gaps. Hero names go from vertical to horizontal. Nav expands from hamburger to bar.
- **1200px**: Max container width. 4 columns fill naturally.

### Per-Section Responsive Notes

- **Ceremony cards**: Stack to 1 column on mobile, 2–3 on tablet+
- **RSVP form**: Always single-column, `max-width: 480px`, centered
- **Photo hub**: 2 columns on mobile, 3 on tablet, masonry on desktop
- **Nav**: Hamburger → inline at `900px`

---

## Shared Components

Reusable patterns across sections:

### Section Header
```
.section-label  → Cormorant, 0.9rem, 300, uppercase, letter-spacing 0.2em, --pink-dark
.section-title  → Playfair, 2.2rem→3rem, 500, --black
.section-desc   → Lato, 0.95rem, 300, opacity 0.65, max-width 480px
```
Every section uses this pattern. Consistency builds the editorial rhythm.

### Ornamental Divider
A `1px` line, `60px` wide, `--black` at 30% opacity, centered. Between label and title, or between sections.

### Pill Button (Primary)
Black background, off-white text, `border-radius: 50px`, Lato 700, `0.8rem`, `letter-spacing: 0.18em`, uppercase. Used for hero CTA, RSVP submit, photo upload confirm.

### Pill Button (Secondary)
Transparent background, `--black` border (`1px solid`), `--black` text. Same shape and font. Used for "Ver no Mapa", "Baixar Fotos", secondary actions.

### Card Pattern
White background, `--radius-lg` corners, `--shadow-card`, hover lift + shadow deepening. Applied to gift cards, ceremony info cards, photo cards.

---

## CSS Custom Properties

```css
:root {
  /* Palette */
  --butter-yellow: #F5E6A3;
  --baby-pink: #F4C7C3;
  --black: #1A1A1A;
  --off-white: #FAF8F5;
  --pink-light: #FBE4E2;
  --pink-dark: #E8A8A3;
  --yellow-light: #FBF3D5;
  --yellow-dark: #D4C477;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-accent: 'Cormorant Garamond', 'Times New Roman', serif;
  --font-body: 'Lato', 'Helvetica Neue', sans-serif;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;

  /* Components */
  --radius: 6px;
  --radius-lg: 12px;
  --shadow-card: 0 2px 16px rgba(26, 26, 26, 0.06);
  --shadow-hover: 0 12px 32px rgba(26, 26, 26, 0.12);
  --transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

To retheme for a different couple's wedding: change the 4 core color values and 3 font families. Everything else derives from them.

---

## Future Considerations

Sections and features planned for future iterations:

- **Our Story** — Timeline of the couple's relationship. Alternating left/right layout with dates, photos, and short texts. Scroll-triggered reveals per milestone.
- **Countdown** — Live timer in the footer or hero showing days/hours/minutes until the ceremony.
- **Guest Book** — Digital message wall where guests leave notes. Masonry card layout similar to photo hub.
