# Stage 2 — DRIVE Figma component library

File: https://www.figma.com/design/eYFiO4rjb82YjheTpdPccy/Untitled

Status: component library created on 15 October 2026. Full product screen recreation and interactive end-to-end prototypes are separate work; they are not included in this component-library delivery.

## Structure

- 00 · Start here — usage and import guide.
- 01 · Foundations — color, typography, spacing, identity specimens.
- 02 · Icons & identity — source vector icons, brand wordmarks and image assets.
- 03 · Controls — button, icon button, input, select, checkbox, option, tab, badge, toggle, range; interaction state review.
- 04 · Cards & content — vehicle/editorial cards, FAQ, notice, toast, empty, specification/equipment rows, steps and price summary.
- 05 · Navigation — header, nav item, model subnav, stepper, brand controls, footer, compare tray, ticker.
- 06 · Product flows — search strip, filter panel, results toolbar, booking states, match quiz, four configurator steps, comparison table.
- 07 · Automotive modules — hero, gallery/lightbox, cabin/hotspots, performance, charging/energy, equipment, technical details, CTA and editorial subcomponents.
- 08 · Appearance review — six appearance frames and compact contact sheet.

## Variables and Tokens Studio

58 UI component families, 40 vector icons and 7 image assets (105 reusable families, 165 main variants/assets total).

327 variables in Core, Brand, Map, Theme, Typography and Components. Brand modes: VOLT, TORQ, FORMA. Theme modes: Light, Dark. 11 shared text styles. Semantics and component variables preserve source aliases; code syntax points to the existing CSS custom properties. Percentage line heights remain style values, consistent with Figma's variable unit limitations.

Import `public/tokens-studio.json` into Tokens Studio as a multi-set bundle. Set order: core → brand/volt, brand/torq, brand/forma → map → theme/light, theme/dark → typography → components. Nine theme entries describe six collection groups. The JSON contains native Figma collection/mode/variable IDs and typography style references for this file.

The file also contains Tokens Studio shared document data (source token arrays and theme configuration), and layer-level property references alongside native Figma bindings. Plugin UI import/reopening has NOT been exercised; JSON and shared-data structures were checked against Tokens Studio's official source. Do not claim the plugin UI was tested.

Components live in Figma; JSON does not contain Figma component definitions. Native components use Auto Layout, nested instances, variants and exposed text/boolean/icon-swap properties where applicable. Frames select Brand and Theme modes; nested instances inherit. Source photos are content assets, not brand color tokens. This library contains component specimens rather than pixel-perfect reproductions of entire website pages.

## Traceability and validation

`docs/figma/manifest.json` stores exact IDs. `docs/figma/qa.json` stores the structural audit. `scripts/figma/` contains construction/reference phases; do not rerun creation phases on populated pages. Resume from manifest IDs and apply targeted updates.

Reviewed foundations, control states, cards, navigation, flows, automotive modules and the six-appearance contact sheet through Figma screenshots. Repaired missing image fills, font-family rendering, stretched instances, native-chevron geometry and range track composition. Final targeted audits reported no horizontal child overflow or missing image fills on the inspected pages.

Website tests/build/token checks remain separate from Figma visual QA. No Code Connect publishing or library publishing was performed.
