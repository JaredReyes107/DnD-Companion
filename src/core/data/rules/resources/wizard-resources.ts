import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WIZARD_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_recovery: {
    id: "arcane_recovery",
    sourceId: "wizard",
    category: "class_features",
    scalingType: "class-level:/2",
    recharge: "longRest", // TODO: Once per DAY
    tags: ["spells", "utility"],
  },

  signature_spell_1: {
    id: "signature_spell_1",
    sourceId: "wizard",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
  signature_spell_2: {
    id: "signature_spell_2",
    sourceId: "wizard",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
};
