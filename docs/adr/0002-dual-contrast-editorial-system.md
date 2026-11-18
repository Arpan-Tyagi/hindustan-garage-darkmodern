# ADR 0002: Dual-Contrast Editorial System (Obsidian vs Warm Stone)

## Context
High-end automotive atelier websites often commit to one of two extremes:
1. **Full Dark Mode**: High visual drama and cinematic impact, but causes severe eye fatigue when users read dense technical matrices (e.g. 6-bay diagnostic tooling lists, warranty terms, 4-step booking wizards, technical blog monographs).
2. **Full Light Mode**: High readability, but lacks the mechanical weight, mood, and nocturnal prestige of a high-performance engineering workshop.

## Decision
We implement an **Editorial Dual-Contrast System**:
- **Deep Obsidian (`#0D0E12`)**: Reserved for theatrical, brand-defining sections (Preloader, Hero, Cars We Have Mastered horizontal filmstrip, Speed Parts B2B wholesale depot, and Footer).
- **Warm Editorial Stone (`#F4F2EC`)**: Deployed for information-dense and conversion-focused sections (Interactive Service Matrix, 4-Step Booking Engine, Regional Journal monographs, and FAQ Accordion).

## Consequences
- Preserves the drama of a midnight automotive atelier while providing editorial clarity for technical details.
- Required engineering a dynamic contrast-aware custom cursor that automatically shifts ring borders from white to carbon black when moving across sections.
- Achieves 100% WCAG AA contrast compliance across both dark and light zones.
