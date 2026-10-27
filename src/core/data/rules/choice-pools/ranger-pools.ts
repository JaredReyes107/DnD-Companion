import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { HUNTER_POOLS } from "./ranger/hunter-pools";

export const RANGER_POOLS: Record<string, ChoicePoolTemplate> = {
  ...HUNTER_POOLS,

  fighting_style_ranger: {
    id: "maneuvers",
    sourceId: "fighter",
    classId: "fighter",
    selectionTrigger: { type: "levelUp" },
    optionIds: [
      "fighting_style_archery",
      "fighting_style_defense",
      "fighting_style_dueling",
      "fighting_style_two_weapon_fighting",
    ],
    picksAtLevel: { 3: 1 },
    allowDuplicates: false,
  },
};
