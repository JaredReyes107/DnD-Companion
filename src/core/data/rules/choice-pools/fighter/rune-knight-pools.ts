import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const RUNE_KNIGHT_POOLS: Record<string, ChoicePoolTemplate> = {
  rune_knight_runes: {
    id: "rune_knight_runes",
    sourceId: "rune_master",
    classId: "fighter",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "cloud_rune",
      "fire_rune",
      "frost_rune",
      "stone_rune",
      "hill_rune",
      "storm_rune",
    ],
    picksAtLevel: { 3: 2, 7: 3, 10: 4, 15: 5 },
    allowDuplicates: false,
  },
};
