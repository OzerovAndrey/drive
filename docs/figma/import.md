# Importing DRIVE tokens

1. Open the Figma file linked in docs/figma.md.
2. Open Tokens Studio. The file has seeded shared document data; if no sets appear, import `tokens-studio.json` through the plugin's token JSON import.
3. Check the set order against `$metadata.tokenSetOrder`.
4. Select one Brand and one Theme. The foundation/component groups are shared.
5. Use native Brand + Theme mode selection on your parent Figma frame to switch existing variable-bound components.

The bundle uses the source project's Legacy `value` / `type` format. References use `{token.path}`. Figma identifiers are specific to this document. If importing into another file, do not reuse the original IDs as if they existed there.

Native component definitions and component variable bindings are already in the Figma file. The JSON transfers tokens/themes and their variable/style references; it does not reconstruct components in a new file. The plugin UI was not manually exercised during delivery.

Official schema references checked:
- https://github.com/tokens-studio/figma-plugin/blob/main/packages/tokens-studio-for-figma/src/types/ThemeObject.ts
- https://github.com/tokens-studio/figma-plugin/blob/main/packages/tokens-studio-for-figma/src/figmaStorage/ValuesProperty.ts
- https://github.com/tokens-studio/figma-plugin/blob/main/packages/tokens-studio-for-figma/src/plugin/SharedDataHandler.ts
