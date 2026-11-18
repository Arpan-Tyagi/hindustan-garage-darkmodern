# ADR 0003: CSS `clip-path` Curtain Reveals for Workshop Photography

## Context
When revealing high-resolution automotive imagery as users scroll or select different service bays:
1. Standard opacity fades feel generic, cheap, and template-like.
2. Canvas/WebGL mask shaders introduce heavy runtime compilation costs and GPU battery drain.
3. Complex DOM clip wrappers with nested overflow masks can trigger expensive layout recalculations (reflows) on low-end devices.

## Decision
We implement **CSS `clip-path: inset(...)` Curtain Reveals**:
- Initial masked state: `clipPath: inset(100% 0% 0% 0%)` (wipes cleanly upward).
- Unmasked state: `clipPath: inset(0% 0% 0% 0%)`.
- Accompanied by a concurrent `scale(1.10) -> scale(1.0)` GPU transform with `cubic-bezier(0.16, 1, 0.3, 1)`.
- Gated by an `IntersectionObserver` with an automatic `450ms` fallback timer to prevent content from remaining occluded.
- Keyed to bay identity (`key={activeBay.id}`) so selecting new bays re-triggers the mechanical wipe cleanly.

## Consequences
- 100% hardware-accelerated on GPU composite layer.
- Zero layout reflow or geometry recalculation during animation.
- Delivers the visceral tactile sensation of a precision motorized workshop bay door opening.
