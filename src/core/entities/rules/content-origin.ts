// Real-world source. Same shape reusable across Resources/Actions/Modifiers/Features/Spells/etc.
export type ContentOrigin =
  | { book: "PHB" | "XGE" | "TCE" | "DMG" }
  | { book: "homebrew"; setId: string }; // setId lets users group/toggle homebrew content packs later
