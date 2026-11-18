# Hindustan Garage & Speed Parts — Design System & Visual Architecture

## 1. Executive Philosophy: The Dual-Contrast Editorial System

The design system for **Hindustan Garage (Est. 1960)** and **Speed Parts** reflects 66 years of continuous mechanical craftsmanship in Prayagraj. It deliberately rejects generic flat templates and aggressive neon gamer dark-modes in favor of an **Editorial Dual-Contrast System**:

* **Deep Obsidian (`#0D0E12`)**: High-contrast, theatrical mechanical atelier presence for the Hero, Luxury Vehicle Portfolio, Speed Parts B2B Spares Hub, and Institutional Footer. Evokes grease-machined titanium, midnight workshop tarmac, and vintage coachbuilder heritage.
* **Warm Editorial Stone (`#F4F2EC`)**: Editorial daylight clarity for high-information density sections—the 6-Bay Interactive Service Matrix, 4-Step Booking Engine, and Regional Journal Articles. Eliminates reading fatigue and evokes technical blueprints and fine paper documentation.

---

## 2. Color Palette & Semantic Tokens

### Canvas & Surfaces

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `obsidian` | `#0D0E12` | Primary Dark Canvas | Hero, Filmstrip, Speed Parts, Footer |
| `obsidian-card` | `#15171E` | Dark Elevated Surface | Feature cards, filmstrip cards, dark widgets |
| `obsidian-border` | `#232632` | Dark Hairline Border | 1px card separators, dividers |
| `stone` | `#F4F2EC` | Primary Light Canvas | Service Matrix, Booking Engine, Regional Journal |
| `stone-surface` | `#FFFFFF` | Light Elevated Surface | Dossier cards, booking modal, article cards |
| `stone-border` | `#E3DFD5` | Light Hairline Border | Technical gridlines, card borders |
| `carbon` | `#111215` | Authoritative Ink | Primary headlines on light surfaces |
| `carbon-muted` | `#4B515D` | Secondary Ink | Paragraph copy on light surfaces |
| `carbon-light` | `#767C89` | Tertiary/Meta Ink | Captions, dates, bay metadata |

### Accent Signifiers

| Token | Hex | Meaning | Usage |
| :--- | :--- | :--- | :--- |
| `crimson` | `#B81D13` | Coachbuilder Heritage | HG institutional mark, primary CTAs, active bay indicators |
| `crimson-bright` | `#E12217` | Hover State | Button hover, active reticle pulse |
| `cobalt` | `#0F4C81` | Speed Parts Genuine OEM | Parts depot badges, OEM warranty tags, technical drawers |
| `emerald` | `#10B981` | Certified / Live Status | Real-time workshop open indicator, cashless insurance guarantee |

---

## 3. Typography Hierarchy

The typography stack unites Swiss modernist clarity with machined mechanical precision:

```css
/* Display & Headlines */
font-family: 'Inter Tight', sans-serif;
/* Body & Technical Narrative */
font-family: 'Plus Jakarta Sans', sans-serif;
/* Telemetry, Timers & Part Numbers */
font-family: 'JetBrains Mono', monospace;
```

### Type Scale

| Level | Size / Line-Height | Weight | Font | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `3.5rem - 5.5rem` / `1.05` | 800 (Extrabold) | `Inter Tight` | Atelier primary headline |
| **Section Title** | `2.25rem - 3.75rem` / `1.1` | 800 (Extrabold) | `Inter Tight` | Section headers |
| **Card Heading** | `1.25rem - 1.875rem` / `1.2` | 700 (Bold) | `Inter Tight` | Bay names, vehicle titles |
| **Body Large** | `1.125rem` / `1.6` | 400 (Regular) | `Plus Jakarta Sans` | Lead narratives |
| **Body Standard** | `0.875rem - 1.0rem` / `1.5` | 400 / 500 | `Plus Jakarta Sans` | Descriptions, specifications |
| **Technical Mono** | `0.75rem - 0.875rem` / `1.4` | 500 / 600 | `JetBrains Mono` | Telemetry stats, part SKUs, timestamps |
| **Micro Caption** | `0.625rem - 0.75rem` / `1.2` | 600 (Semibold) | `JetBrains Mono` | Badges, bay counters, breadcrumbs |

---

## 4. Reticle Cursor Specifications

The desktop cursor operates as an optical targeting reticle with dual-contrast background detection:

* **Dark Background (`#0D0E12`)**:
  * Center Dot: `4px` solid `#B81D13` (Coachbuilder Crimson).
  * Trailing Ring: `28px` diameter, `1.5px` border `#FFFFFF` (80% opacity), `0.05` spring delay.
  * Crosshairs: 4 orthogonal tick marks extending `3px`.
* **Light Background (`#F4F2EC`)**:
  * Trailing Ring switches dynamically to `#111215` (Carbon Ink) with high visibility.
* **Interactive Hover Morphs**:
  * **On Dossier / Bay Cards**: Expands to `72px` circle with label `VIEW BAY`.
  * **On Car Mastered Photography**: Expands to `76px` circle with label `INSPECT`.
  * **On Speed Parts Rows**: Expands to `80px` circle with cobalt tint and label `WHATSAPP`.
  * **On Action Buttons**: Snaps with subtle magnetic spring pull (`translate3d(x * 0.25, y * 0.25, 0)`).
* **Touch Device Degradation**: Completely disabled via `@media (hover: none) and (pointer: coarse)` to prevent mobile interference.

---

## 5. Spacing, Borders & Micro-Interactions

* **Grid & Section Rhythm**: `px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`.
* **Section Padding**: `py-16 sm:py-24 lg:py-32` providing massive editorial breathing room.
* **Corner Radii**:
  * Badges & Micro-tags: `rounded-md` (`6px`)
  * Buttons & Reticle Cards: `rounded-xl` (`12px`)
  * Major Dossier Containers & Filmstrip Cards: `rounded-2xl` (`16px`)
* **Interactive Active State**: All clickable buttons and cards feature `transform: scale(0.97)` active press states with `cubic-bezier(0.16, 1, 0.3, 1)` transitions.
* **Contrast Compliance**: 100% WCAG AA compliance across all text/background combinations (> 4.5:1 for body copy, > 3.0:1 for large headlines).
