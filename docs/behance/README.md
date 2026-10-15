# DRIVE — Behance case study

Editable presentation in [Figma](https://www.figma.com/design/eYFiO4rjb82YjheTpdPccy?node-id=38-492), page `09 · DRIVE / Behance case study`.

18 sequential sections, 1440 px wide, approximately 27,160 px tall. Select the section frames inside the presentation wrapper and export PNG at 2× (2880 px wide) in order 00–17. Each section has an export preset. Publish manually to Behance after review.

## Editorial direction

“One platform. Three personalities.” A cinematic automotive opening leads into the working product, brand identities, six appearances, token architecture, typography, components, interaction states, product flows, responsive specimens, process and handoff. English copy supports an international portfolio audience. Author positioning: Andrey Ozerov, Product / UI/UX Designer specialising in multi-brand design systems.

The process narrative preserves the actual sequence: a token-based working website first, then the native Figma component library and linked Tokens Studio handoff. No client, user-research, conversion or commercial-impact claims are made. Model information and prices remain fictional demo content.

## Construction and scope

UI exhibits are editable instances from the existing DRIVE library. Editorial text and Auto Layout containers are native layers. Product compositions demonstrate library modules rather than claiming pixel-identical captures of every website page. The website itself was not modified for this presentation.

`manifest.json` records exact section IDs and structural QA. Source scripts in `scripts/behance/` are construction records for the Figma Plugin API, not standalone Node scripts; `REG` and `IMAGES` come from the existing library manifest. They must not be rerun on the populated wrapper. Later typography, layout, wordmark and asset refinements are already applied to the canvas; use the manifest and inspect existing nodes for future edits.

## References reviewed

- EOS Design System & UI-kit Library, Fiona Bui: product context, foundations and detailed component-state presentation.
- Design System: UI/UX Design | Design Library, Varti Studio: modular system framing; indexed description was accessible.
- Detailing Car Studio | Website Design, Viktoriia Vakulenko: automotive photography and dark editorial UI.
- MOR CARS Website Modern Web Design: supplied as a reference, but the exact project could not be retrieved; do not claim a complete review of it.

References informed presentation pacing; their artwork was not imported into the deliverable. Portfolio context was read from the supplied project skill; the portfolio repository was not changed.

## Validation

Figma screenshots reviewed cover, brand website composition, six appearances, component showcase, responsive specimens and process chapter. Structural audit: 18 sections, no horizontal overflow and no missing image hashes. Existing website checks: eight domain tests, token validation across six configurations with 66 contrast checks, TypeScript and Vite build pass. No new live-browser test was performed. Behance upload was not performed.

## Cinematic cover and photo quality update

Cover `53:1501` replaces the presentation opening. Original cover `39:2` remains outside the wrapper at x=4200; all source photo assemblies remain at x=2200. The new cover includes native gradient typography, radial atmospheric lighting, a metallic vector orbit, category chips, a technical grid, automotive icons and verified scope figures.

All seven photos throughout the presentation now use 1672 × 941 px image fills, replacing 480–1000 px compressed specimens. Original WebP sources were transferred as full-size quality-90 JPEG tiles, assembled at exact pixel coordinates and consolidated into native-resolution PNG fills in Figma. No artificial upscaling was used to create source detail. UI and typography remain editable vector layers. The 2× section export improves vector/text output; it does not invent extra photographic detail.

Final review: all seven image hashes report 1672 × 941 dimensions, no horizontal overflow, and cover plus FORMA photography visually reviewed. Auto-review rejected deletion of source photo assemblies; the safe implementation preserves every source frame and the original cover.
