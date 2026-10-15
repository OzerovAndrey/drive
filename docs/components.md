# Component inventory

| Component | Anatomy / variants | Behavior / states |
|---|---|---|
| Button | label + optional icon; primary / secondary / text | default, hover, active, focus-visible, disabled |
| Icon button | SVG + accessible name | default, selected, hover, focus |
| Header | brand logo, nav, saved, test drive | desktop / mobile menu, current route |
| Brand controls | brand group, theme, reset, collapse | selected Brand, light/dark, expanded/collapsed |
| Hero | type, vehicle image, metadata, actions, filters | three identity variants, parallax, reduced-motion |
| Search / FilterFields | labels, native select/input, submit | populated, cleared, no results |
| Car card | media, tag, save/compare, title, price, specs, link | default, hover, saved, compared |
| Comparison | native table, header cards, spec rows, actions | empty, one/two/three cars, differences only |
| Option | title/detail + selected circle | default, selected, disabled, keyboard focus |
| Stepper | numbered steps | current, direct navigation, back/next |
| Price summary | itemization + total + download | calculated from selected options |
| Dialog | native dialog, heading, close, content | open, Esc/backdrop close, native focus trap |
| Booking | model preview, contact, date/time/studio, notice | validation, editable, confirmed |
| Match quiz | three option steps + recommendations | back, next, result, no match, saved |
| Toast | icon, text, dismiss | auto-dismiss, status announcement |
| Empty | icon, title, copy, recovery action | catalog/saved/compare/unknown route |
| FAQ | native details/summary | open/closed, keyboard |
| Footer | links, author, fictional-data notice | responsive layout |

Figma recreation must use component sets for applicable variants, text/boolean/instance-swap properties, Auto Layout, bound fills/strokes/spacing/radii and typography styles. Add missing loading/error/success specimens where they apply; do not invent meaningless states for static primitives.

## v2 expansion — 15 October 2026

- ExperienceHome: lifestyle photo cards, motion ticker, selectable driving/cabin/technology chapters, electric teaser and buying confidence FAQ.
- Gallery: thumbnail selection, previous/next, enlarged native dialog; collection cabin study labeled separately.
- Model subnavigation: in-page section controls; technical categories; equipment grid; downloadable text specification.
- Cabin hotspots: labeled buttons with expanded explanations; day/evening visual treatment.
- AnimatedNumber: viewport-triggered, finite numeric reveal with reduced-motion fallback.
- EnergyCalculator: distance/price/consumption inputs and explicit annual energy-only comparison, including negative cost differences.
- ElectricPage: education, four charging-power options and ideal constant-power 10–80% illustration.
- Journal / GuidePage: three linked editorial reading routes.
- 21 new icons extend the existing SVG stroke vocabulary; no external icon package.

New component token groups: editorial, gallery, hotspot, specification, equipment, calculator and charging. These use brand/theme semantic aliases. Recreate these in Figma during Stage 2 alongside existing components.
