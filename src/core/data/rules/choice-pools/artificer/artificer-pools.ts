import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const ARTIFICER_POOLS: Record<string, ChoicePoolTemplate> = {
  infusions_known: {
    id: "infusions_known",
    sourceId: "artificer",
    classId: "artificer",
    selectionTrigger: { type: "levelUp" },
    optionIds: [
      "arcane_propulsion_armor",
      "armor_of_magical_strength",
      "boots_of_the_winding_path",
      "enhanced_arcane_focus",
      "enhanced_defense",
      "enhanced_weapon",
      "helm_of_awareness",
      "homunculus_servant",
      "mind_sharpener",
      "radiant_weapon",
      "repeating_shot",
      "replicate_magic_item",
      "repulsion_shield",
      "resistant_armor",
      "returning_weapon",
      "spell_refueling_ring",
    ],
    picksAtLevel: { 2: 4, 6: 6, 10: 8, 14: 10, 18: 12 },
  },
};
