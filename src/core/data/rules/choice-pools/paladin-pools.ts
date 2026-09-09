import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const PALADIN_POOLS: Record<string, ChoicePoolTemplate> = {
  fighting_style_paladin: {
    id: "maneuvers",
    sourceId: "fighter",
    classId: "fighter",
    selectionTrigger: { type: "levelUp" },
    optionIds: [
      "fighting_style_defense",
      "fighting_style_dueling",
      "fighting_style_great_weapon_fighting",
      "fighting_style_protection",
    ],
    picksAtLevel: { 3: 1 },
    allowDuplicates: false,
  },
};
