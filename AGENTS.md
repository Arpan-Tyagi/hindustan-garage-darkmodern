# Agents & Engineering Guidelines

This repository follows the Matt Pocock engineering skills ecosystem, Emil Kowalski design engineering principles, and deep codebase architecture standards.

## Agent skills

### Issue tracker

Local markdown files in `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical triage label vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repository layout (`CONTEXT.md` + `docs/adr/`). See `docs/agents/domain.md`.

---

## Architectural & Design Mandates

1. **Non-3D High Craft**: Pure 2D motion choreography (GSAP ScrollTrigger, Framer Motion, CSS clip-path, magnetic reticle cursor). No Three.js or WebGL dependencies.
2. **Dual-Contrast System**: Deep Obsidian (`#0D0E12`) for hero/portfolio/parts; Warm Editorial Stone (`#F4F2EC`) for services/booking/blog.
3. **Full-Output Enforcement**: Zero placeholder code, zero omitted implementations, complete production copywriting and responsive logic.
4. **Design Engineering Standards**: Hardware-accelerated transforms (`translate3d`), micro-interaction active states (`scale(0.97)`), custom cubic bezier curves, and WCAG AA contrast compliance.
