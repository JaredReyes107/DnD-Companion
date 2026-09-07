import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const TOTEM_WARRIOR_POOLS: Record<string, ChoicePoolTemplate> = {
  totem_spirit: {
    id: "totem_spirit",
    sourceId: "totem_warrior",
    classId: "barbarian",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "totem_spirit_bear",
      "totem_spirit_eagle",
      "totem_spirit_wolf",
      // XGE additions
      "totem_spirit_elk",
      "totem_spirit_tiger",
    ],
    picksAtLevel: { 3: 1 },
  },

  aspect_of_the_beast: {
    id: "aspect_of_the_beast",
    sourceId: "totem_warrior",
    classId: "barbarian",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "aspect_bear",
      "aspect_eagle",
      "aspect_wolf",
      // XGE additions
      "aspect_elk",
      "aspect_tiger",
    ],
    picksAtLevel: { 6: 1 },
  },

  totemic_attunement: {
    id: "totemic_attunement",
    sourceId: "totem_warrior",
    classId: "barbarian",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "attunement_bear",
      "attunement_eagle",
      "attunement_wolf",
      // XGE additions
      "attunement_elk",
      "attunement_tiger",
    ],
    picksAtLevel: { 14: 1 },
  },
};
