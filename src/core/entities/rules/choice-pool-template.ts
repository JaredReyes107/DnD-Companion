export type ChoiceSelectionTrigger =
  | "onLevelUp"      // Battle Master maneuvers, Eldritch Invocations, Metamagic
  | "onLongRest"     // Cosmic Omen Weal/Woe
  | "onShortRest"    // nothing common, but exists in some homebrew
  | "onActivation";  // Starry Form constellation — chosen at the moment of use

// src/core/entities/rules/choice-pool-template.ts
export type ChoicePoolTemplate = {
  id: string; // "battle_master_maneuvers"
  sourceId: string; // "battle_master" — feature/subclass that owns this pool

  // level -> total number of picks known at that level (not delta — total)
  picksAtLevel: Record<number, number>;

  // does picking replace previous picks 1:1 (Metamagic-style "learn N more")
  // or can the same option be picked multiple times (rare, but exists)
  allowDuplicates?: boolean;
};