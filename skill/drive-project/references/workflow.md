# Working workflow

1. Inspect current branch, working tree, BRIEF.md and AGENTS.md.
2. Locate source tokens and shared component before changing UI.
3. Keep edits bounded; maintain all six brand/theme configurations.
4. Rebuild generated CSS/JSON, run tests and production build.
5. Perform responsive/keyboard/reduced-motion browser QA when supported; document limits.
6. Update relevant docs, stage intended files, commit and push without force.
7. Verify deployment before claiming a live URL.

The owner's order is site → Figma → local documentation. Stage 2 covers variables/styles, proper components/variants, all screens and UX prototypes. Stage 3 means the owner's actual disk; the hosted scratch environment is not that disk.

Paths: tokens/ (source), scripts/ (resolution and export), src/lib/catalog.mjs (pure domain logic), src/components/ui.tsx (shared primitives), src/App.tsx (screens and state), docs/ (handoff), public/images/ (AI imagery).
