import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const ARCANE_ARCHER_POOLS: Record<string, ChoicePoolTemplate> = {
  arcane_shots_known: {
    id: "arcane_shots_known",
    sourceId: "arcane_archer",
    classId: "fighter",
    selectionTrigger: { type: "levelUp" },
    optionIds: [
      "banishing_arrow",
      "beguiling_arrow",
      "bursting_arrow",
      "enfeebling_arrow",
      "grasping_arrow",
      "piercing_arrow",
      "seeking_arrow",
      "shadow_arrow",
    ],
    picksAtLevel: { 3: 2, 7: 3, 10: 4, 15: 6, 18: 6 },
    allowDuplicates: false,
  },
};
