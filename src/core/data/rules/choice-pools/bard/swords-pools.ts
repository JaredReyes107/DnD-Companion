import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const SWORDS_POOLS: Record<string, ChoicePoolTemplate> = {
  swords_fighting_styles: {
    id: "swords_fighting_styles",
    sourceId: "swords",
    classId: "bard",
    selectionTrigger: "onLevelUp",
    optionIds: ["fighting_style_dueling", "fighting_style_two_weapon_fighting"],
    picksAtLevel: { 3: 1 },
  },
};
