# Motion specification

- Hero: entrance of car and headline; car stage follows scroll at a restrained 0.14 factor, clamped at 700px scroll. Watermark moves in the opposite direction at half the offset.
- Catalogue: restrained photo scale and 5px card lift on hover; keyboard focus remains independent.
- Search arrow: small rotation on hover.
- Dialog and toast: brief opacity/translation entrance.
- Scroll hint: subtle vertical movement.
- Optional section reveal: guarded by `.motion-ready`; content is visible by default. Reduced motion forces content visible.
- Reduced motion disables animation, smooth scroll and parallax. No scroll hijacking, no page pinning, no required dragging.

Brand motion duration token is prepared, but current CSS timings use a shared baseline; distinct per-brand pacing is a later refinement. Avoid claiming brand-specific motion is already complete.

## v2 motion additions

Sticky-header reading progress, automotive text/icon ticker (pauses on hover), image entrances, photograph zoom, gallery transitions, cabin atmosphere treatment, hotspot pulse, finite scroll-triggered power/range counters, electric orbit and battery animation, responsive cost-bar transitions. Reduced-motion disables continuous movement and transitions. No video/autoplay audio, scroll hijacking or required pointer motion.
