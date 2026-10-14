# Architecture

React 18 + TypeScript strict / noUncheckedIndexedAccess + Vite. Small native hash router. No UI or animation dependency. Fonts are self-hosted from Fontsource. `base: './'` makes the static build portable to GitHub Pages and root hosting.

## Layers

`tokens/ → scripts/build-tokens.mjs → tokens.generated.css + public/tokens-studio.json + token metadata`

`src/lib/catalog.mjs` owns pure filtering, compatibility, matching and pricing logic. `src/data/catalog.ts` gives typed exports. `src/components/ui.tsx` owns Button, Icon, native modal Dialog and Empty. `src/App.tsx` composes product pages and local state. `src/styles/app.css` consumes tokens for identity and component surfaces.

## State and routing

Hash routes: `/`, `/cars`, `/car/:id`, `/configure/:id`, `/compare`, `/saved`, `/how-it-works`, `/system`. Unknown routes show recovery. Brand/theme attributes live on `<html>`. Appearance state is separate from filters, comparison, favorites, configurations and modal steps. Browser back/forward supported.

Local storage: drive.brand, drive.theme, drive.saved, drive.compare, drive.configs. Parse failures fall back safely; stored IDs and options are validated. Booking fields are ephemeral React state. No contact fields are persisted or transmitted. Reset clears product selections; appearance remains selected.

## Known limitations

Three photographs represent six fictional editions. Studio/detail changes crop the same source; paint/interior selections are descriptive swatches, not a 3D preview. Product copy is English. Prices are simulated USD. No real bookings or accounts. First-stage component coverage is limited to working product needs; full Figma variant/state coverage is a separate phase.
