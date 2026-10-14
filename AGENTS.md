# DRIVE project rules

Read BRIEF.md and docs/architecture.md before substantial changes. Use skill/drive-project/SKILL.md for project-specific guidance.

- Communicate in Ukrainian; code, UI and repository docs in English.
- The user's latest instruction wins. Work in DRIVE only.
- Set order: core → brand → map → theme → typography → components.
- JSON in tokens/ is authoritative; no retained generator that overwrites edited source JSON.
- Brand keys and theme keys must match; components reference brand/theme semantics.
- Do not hand edit generated CSS, Tokens Studio bundle or token metadata.
- Keep one component implementation across brands; preserve user selections on appearance changes.
- Prefer native CSS/browser APIs. Respect reduced motion, keyboard and focus.
- Check 1440 / 1024 / 768 / 390 / 320 and all six appearances for relevant UI changes when browser QA is available.
- Run npm test and npm run build before commits. Do not claim browser QA if unavailable.
- Use fictional data and clear demo booking wording. Do not persist contact form data.
- Keep docs and project skill accurate. Commit intended files; never force push.
- Figma is Stage 2. Build proper Auto Layout, variants and variable bindings; avoid flattened screenshots.
- Brand-specific typography is separate from component geometry and state tokens.
