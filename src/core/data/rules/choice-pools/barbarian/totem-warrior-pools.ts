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
      "attunement_elk",
      "attunement_tiger",
    ],
    picksAtLevel: { 14: 1 },
  },

  bestial_soul_movement: {
    id: "bestial_soul_movement",
    sourceId: "beast",
    classId: "barbarian",
    selectionTrigger: "onLevelUp",
    optionIds: ["bestial_soul_climb", "bestial_soul_swim", "bestial_soul_fly"],
    picksAtLevel: { 6: 1 },
  },
};
