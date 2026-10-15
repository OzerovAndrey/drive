# Stage 2 — Figma handoff

Status: not started. The user explicitly requested site first, Figma second. Do not create or edit Figma in Stage 1.

## Foundations

1. Import the generated public/tokens-studio.json into Tokens Studio.
2. Verify source format and resolved values before creating variables.
3. Create Base / Brand (VOLT, TORQ, FORMA) / Theme (Light, Dark) / Components collections. Create Typography text styles.
4. Validate six appearances with matching names and references. Bind component properties rather than hardcoding resolved literals.
5. Create Foundations specimens: color, type, spacing, radius, border, motion.

## Components and screens

Build the inventory in docs/components.md as genuine reusable components and component sets. Use Auto Layout, sizing rules, icon instances, component properties and variable bindings. Do not flatten screenshots.

Recreate Home, catalogue, model detail, compare, saved, four configurator steps, booking form/confirmation, three match questions/results, how-it-works and system gallery. Include empty states and relevant validation. Cover desktop and mobile, all 3 × 2 appearances. Add interaction prototypes for discovery, compare, configure and booking.

## Acceptance

Check component names and tokens against code; inspect inherited modes; compare screenshots in all six appearances. Known Figma gotcha from Atlas: avoid paint opacity on variable-bound paints if instances drop it; use a tint child/layer opacity. Brand images are content assets, not color tokens.

Track completed screens in this document during Stage 2. No prior-file IDs or synchronization claims are valid until actual work is performed.

## v2 handoff additions

Include the new gallery/lightbox, model subnav, equipment/specification tabs, cabin hotspots, chapter selector, cost calculator, charging lab, journal cards and three article pages. New routes and components are documented in docs/components.md and docs/architecture.md. Figma remains Stage 2 and has not been modified by this update.
