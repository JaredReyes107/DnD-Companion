import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const BEAST_POOLS: Record<string, ChoicePoolTemplate> = {
  bestial_soul_movement: {
    id: "bestial_soul_movement",
    sourceId: "beast",
    classId: "barbarian",
    selectionTrigger: "onShortRest", // also resets on long rest (engine change 2)
    optionIds: ["bestial_soul_swim", "bestial_soul_climb", "bestial_soul_jump"],
    picksAtLevel: { 6: 1 },
  },
};
