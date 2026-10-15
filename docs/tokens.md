# Tokens and synchronization

Format: Tokens Studio Legacy `value` / `type`, with `{token.path}` references. Preserve this format unless deliberately migrating the whole pipeline. `tokens/$metadata.json` declares order; `$themes.json` describes Base, Brand, Theme, Typography and Components groups.

| Layer | Role |
|---|---|
| core | Primitive dimension, radius, font, weight, duration, neutral constants |
| brand/volt, torq, forma | Identity colors, fonts, geometry and spacing semantics |
| map | Shared success/error semantic anchors |
| theme/light, dark | Surface, text, action, border and status aliases |
| typography | Composite role-based type tokens |
| components | Component surfaces, spacing, geometry and action aliases |

Theme interpretation: one Base collection; Brand with three modes; Theme with two; Components with one. Typography generates text styles. Frames select Brand + Theme explicitly; nested instances inherit. Do not copy previous projects' Figma IDs into a new file.

## Commands

`npm run tokens:check`: brand/theme key parity, component reference restrictions, alias resolution in all six configurations, 66 declared-pair contrast checks.

`npm run tokens:build`: regenerate CSS, `public/tokens-studio.json`, and `public/tokens-meta.json`. Bundle includes token sets as top-level keys, `$themes`, `$metadata`. Import into Tokens Studio during Stage 2 and verify a sample resolved alias in all six configurations. Stage 2 native variable bindings and six appearances have been verified in the target Figma file. Theme JSON now includes file-specific variable/style references. Tokens Studio shared document data is seeded; plugin UI import has not been exercised.

## Discipline

Edit source JSON then rebuild. Generated files never become a second hand-maintained source. UI surfaces, brand fonts, spacing and radii come from variables. CSS percentage/rem layout geometry, optical font spacing, viewport calculations, media breakpoints, SVG viewBox dimensions and animation transforms are allowed implementation values. Automotive paint swatches are product configuration colors and may be literal; these are not brand UI colors. Future work can promote repeated geometry to tokens. This implementation does not claim zero literal values in CSS.

Contrast checks cover declared foreground/background pairs; they are not a full WCAG audit, nor a check of text over every photograph.
