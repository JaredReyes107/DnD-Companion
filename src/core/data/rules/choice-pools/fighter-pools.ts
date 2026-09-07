import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BATTLE_MASTER_POOLS } from "./fighter/battle-master-pools";
import { ARCANE_ARCHER_POOLS } from "./fighter/arcane-archer-pools";
import { RUNE_KNIGHT_POOLS } from "./fighter/rune-knight-pools";

export const FIGHTER_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BATTLE_MASTER_POOLS,
  ...ARCANE_ARCHER_POOLS,
  ...RUNE_KNIGHT_POOLS,

  fighting_style_fighter: {
    id: "maneuvers",
    sourceId: "fighter",
    classId: "fighter",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "fighting_style_archery",
      "fighting_style_defense",
      "fighting_style_dueling",
      "fighting_style_great_weapon_fighting",
      "fighting_style_protection",
      "fighting_style_two_weapon_fighting",
    ],
    picksAtLevel: { 3: 1 },
    allowDuplicates: false,
  },
};
