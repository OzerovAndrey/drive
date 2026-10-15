# Stage 1 verification

## Completed locally

- Eight domain tests, including energy-cost arithmetic, adverse cost comparison and charging assumptions: combined filters, non-mutating sorting, price itemization, incompatible package rejection and recommendation constraints.
- All six brand/theme combinations resolve token references; Brand/Theme key parity and component layering pass.
- 66 declared foreground/background contrast checks pass.
- TypeScript strict build and Vite production build pass.
- Repository project skill frontmatter validation passes.

## Browser validation limit

The managed environment has no supported control-browser capability. No browser was installed, no browser test was improvised, and responsive screenshots/click journeys were not claimed. A full visual, keyboard and interaction pass at 1440 / 1024 / 768 / 390 / 320 in all six appearances is still required.

## Review focus

Verify hero crop/readability and transitions; route/back behavior; filter empty/reset; save/compare/remove/difference-only; all four config steps and download; match/no-match/restart; native booking validation and confirmation; dialog keyboard/Escape/focus return; responsive navigation; reduced motion; storage persistence/reset.

## Limitations

Car imagery is illustrative, not a real manufacturer catalog. Different edition models reuse imagery. Configuration paint/interior choices affect selection and price, not the car photograph. Test drives are demo confirmations only. Figma Stage 2 is not performed.

## v2 verification

Eight domain tests and the production TypeScript/Vite build pass. Server rendering exercises 23 routes across all six brand/theme choices (138 renders) and verifies referenced public image files exist. SSR does not verify browser events, responsive layout, actual contrast over images or modal focus. Browser QA remains unavailable in this managed session.

## Mobile booking correction — 15 October 2026

User iPhone screenshot exposed a mobile rule applying width:100% to the consent checkbox, squeezing its adjacent anonymous text to the edge. Native date intrinsic width also overflowed the two-column grid. Restrict full-width rules to non-checkbox inputs, wrap consent text in a minmax(0,1fr) grid, constrain form/grid children, stack date/time below 480px, and use 16px fields on coarse-pointer devices to avoid iOS input focus zoom. Production build, domain tests and server route rendering are rerun; actual Safari confirmation remains required.

## Hero search correction — 15 October 2026

User screenshot showed search icons above fields and an oversized panel overlapping the hero metadata. Global label flex-direction:column leaked into search labels. Make field anatomy explicitly horizontal, constrain the panel to the content width, normalize native selects with a non-interactive chevron, and replace the unlabeled round submit with Find cars. Keep a two-column mobile grid and coarse-pointer 16px select type. Existing filtering behavior is unchanged.
