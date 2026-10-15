# DRIVE

A working multi-brand automotive discovery platform by Andrey Ozerov.
**VOLT · TORQ · FORMA × Light · Dark.** One shared product and six visual configurations.

## Run

```bash
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Node 22+ recommended. Production output: `dist/`. Hash routes work on GitHub Pages.

## Working journeys

- Home → filtered catalogue → model detail → configuration → demo test-drive confirmation.
- Guided match finder: budget → usage → powertrain → recommendations.
- Save cars and compare up to three; show only differences.
- Configure paint, wheels, interior and compatible packages; live price, JSON download.
- Switch brand or theme without resetting the route, filters, shortlist or configuration.
- Design-system page with working controls and Tokens Studio JSON download.

All cars, images, specifications, prices and studios are fictional. The test-drive form is a local demo: no dealer is contacted and no contact details are persisted. Local storage contains appearance, saved IDs, comparison IDs and configurations only. Repeated edition models reuse reference imagery; configuration swatches do not simulate exterior changes.

## Source map

- `tokens/`: authoritative Tokens Studio Legacy JSON, references, themes and set order.
- `scripts/`: token resolver, parity/layer checks, declared-pair contrast checks, CSS/bundle generation.
- `src/`: shared React UI, routes, data and behavior.
- `public/images/`: three AI-generated, fictional studio car photographs, WebP delivery.
- `public/tokens-studio.json`: generated import bundle (do not hand edit).
- `docs/`: product, architecture, motion, component inventory, Figma phase and QA.
- `skill/drive-project/`: repository project skill and focused references.
- `.github/workflows/pages.yml`: checks, build and Pages deployment.

Stage 1 is the working website. Stage 2 recreates variables, styles, components, variants, pages and prototypes in Figma. Stage 3 exports documentation for the owner's local disk. See `docs/figma.md` for the handoff checklist.

## v2 — richer automotive detail

Expanded model details, standard equipment, dimensions, specification downloads, thumbnail/lightbox gallery, shared cabin concept hotspots, chapter switches, 3 reading guides, electric-life route, ideal charging simulation and energy-only cost comparison. New photography and SVG icons share the existing three-brand/two-theme foundation. Research and source links: docs/research-2026-10-15.md.

Additional verification: `node scripts/smoke-render.mjs` (server-rendered route and asset checks; not browser QA).
