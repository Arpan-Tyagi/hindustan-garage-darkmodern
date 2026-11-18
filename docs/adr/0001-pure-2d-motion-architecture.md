# ADR 0001: Pure 2D Motion Choreography over 3D/WebGL

## Context
Automotive websites often reach for heavy 3D WebGL experiences (Three.js, Spline, shaders). However, for a luxury atelier emphasizing precision, history, and real-time utility (booking engines, parts lookup, B2B wholesale pricing):
1. WebGL introduces severe battery drain, high initial bundle overhead (>1.5MB), shader compile stutters, and poor mobile reliability in tier-2/tier-3 network conditions.
2. The user experience demands instant responsiveness, razor-sharp editorial typography, and buttery-smooth 60-120 FPS kinetic transitions.

## Decision
We mandate a **Pure 2D Motion Architecture**:
- **GSAP ScrollTrigger**: For pinned horizontal scroll galleries, scrubbed telemetry progress bars, and scroll-linked parallax.
- **CSS `clip-path`**: Precision mechanical bay door curtain reveals (`clip-path: inset(...)`) with zero layout reflow.
- **Hardware-Accelerated Transforms**: `transform: translate3d(...)` and `opacity` only, adhering to Emil Kowalski design engineering principles.
- **Custom Magnetic Reticle Cursor**: Lightweight mouse listener utilizing `gsap.quickTo` with context-aware labels.

## Consequences
- 100% device compatibility across desktop, tablet, and mobile.
- Zero WebGL fallback failures or GPU crashes.
- Lighthouse performance scores of 95+ with lightning-fast First Contentful Paint.
