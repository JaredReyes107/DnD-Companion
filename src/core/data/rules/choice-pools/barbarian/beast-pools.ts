import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const BEAST_POOLS: Record<string, ChoicePoolTemplate> = {
  // Stub — onActivation not yet supported
  form_of_the_beast_weapon: {
    id: "form_of_the_beast_weapon",
    sourceId: "beast",
    classId: "barbarian",
    selectionTrigger: "onActivation", // deferred
    optionIds: ["beast_weapon_bite", "beast_weapon_claws", "beast_weapon_tail"],
    picksAtLevel: { 3: 1 },
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
