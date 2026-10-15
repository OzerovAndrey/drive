# Architecture

React 18 + TypeScript strict / noUncheckedIndexedAccess + Vite. Small native hash router. No UI or animation dependency. Fonts are self-hosted from Fontsource. `base: './'` makes the static build portable to GitHub Pages and root hosting.

## Layers

`tokens/ → scripts/build-tokens.mjs → tokens.generated.css + public/tokens-studio.json + token metadata`

`src/lib/catalog.mjs` owns pure filtering, compatibility, matching and pricing logic. `src/data/catalog.ts` gives typed exports. `src/components/ui.tsx` owns Button, Icon, native modal Dialog and Empty. `src/App.tsx` composes product pages and local state. `src/styles/app.css` consumes tokens for identity and component surfaces. `src/components/Automotive.tsx` + `automotive.css` own detailed model pages, gallery, editorial and electric experience. `src/data/details.ts` holds extended fictional specifications/guides; `src/lib/ownership.mjs` owns tested energy/charging arithmetic.

## State and routing

Hash routes: `/`, `/cars`, `/car/:id`, `/configure/:id`, `/compare`, `/saved`, `/how-it-works`, `/system`, `/electric`, `/guide/:id`. Unknown routes show recovery. Brand/theme attributes live on `<html>`. Appearance state is separate from filters, comparison, favorites, configurations and modal steps. Browser back/forward supported.

Local storage: drive.brand, drive.theme, drive.saved, drive.compare, drive.configs. Parse failures fall back safely; stored IDs and options are validated. Booking fields are ephemeral React state. No contact fields are persisted or transmitted. Reset clears product selections; appearance remains selected.

## Known limitations

Seven photographs represent six fictional editions. Each model family has a studio and location photo; the cabin is a shared collection design study. paint/interior selections are descriptive swatches, not a 3D preview. Product copy is English. Prices are simulated USD. No real bookings or accounts. First-stage component coverage is limited to working product needs; full Figma variant/state coverage is a separate phase.

## Page alignment

`src/styles/layout.css` loads after component styles and defines shared content rails. The 1440px page token defines 1312px content after 64px desktop gutters; tablet gutters are 32px and mobile gutters 24px. Sections themselves are 1312px maximum with no extra outer padding, so backgrounds and separator lines match adjacent cards. Header, hero copy, metadata, search, sections, model navigation, CTA and footer share those edges. Editorial prose retains a shorter measure within the rails. Hero imagery and ticker backgrounds remain viewport-wide. Article covers and CTA surfaces use the content width.
