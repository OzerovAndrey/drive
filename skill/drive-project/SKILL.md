---
name: drive-project
description: Build and maintain the DRIVE automotive platform, its VOLT/TORQ/FORMA brands, light/dark tokens, shared React components, selection flows and Figma handoff. Use for DRIVE changes, token questions, new components, brand/theme fixes, documentation and Stage 2 Figma recreation.
---
# DRIVE project

Read BRIEF.md and AGENTS.md from the repository root before substantial changes. Inspect the current source before relying on older screenshots.

Use one shared product across three identity sets and two themes. Preserve selections and in-progress flows when appearance changes. Edit authoritative tokens/ JSON; run npm run tokens:build. Never hand edit generated files or introduce a second palette.

Run npm test and npm run build before committing. Record the actual QA performed; do not claim browser checks if the browser is unavailable. Keep all work in OzerovAndrey/Drive and sync this project skill through Git with code changes.

Use [references/workflow.md](references/workflow.md) for the three-stage workflow and file map. Read root docs/tokens.md for schema/composition and docs/components.md for component anatomy. Read docs/figma.md before Stage 2.

Keep test-drive form fields ephemeral. Make confirmation explicitly a demo. Use fictional automotive data without implying real manufacturer capabilities.
