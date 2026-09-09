import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const SORCERER_POOLS: Record<string, ChoicePoolTemplate> = {
  metamagic: {
    id: "metamagic",
    sourceId: "sorcerer",
    classId: "sorcerer",
    selectionTrigger: { type: "levelUp" },
    optionIds: [
      "careful_spell",
      "distant_spell",
      "empowered_spell",
      "extended_spell",
      "heightened_spell",
      "quickened_spell",
      "subtle_spell",
      "twinned_spell",
    ],
    picksAtLevel: { 3: 2, 10: 3, 17: 4 },
  },
};
