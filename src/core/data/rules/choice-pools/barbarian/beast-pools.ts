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
};
