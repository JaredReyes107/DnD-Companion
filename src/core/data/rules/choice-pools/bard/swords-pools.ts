import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const SWORDS_POOLS: Record<string, ChoicePoolTemplate> = {
  fighting_style_swords: {
    id: "fighting_style_swords",
    sourceId: "swords",
    classId: "bard",
    selectionTrigger: { type: "levelUp" },
    optionIds: ["fighting_style_dueling", "fighting_style_two_weapon_fighting"],
    picksAtLevel: { 3: 1 },
  },
};
