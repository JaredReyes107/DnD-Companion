import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ORDER_OF_SCRIBES_RESOURCES: Record<string, ResourceTemplate> = {
  awakened_spellbook_fast_ritual: {
    id: "awakened_spellbook_fast_ritual",
    sourceId: "order_of_scribes",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["spellcasting"],
  },

  manifest_mind: {
    id: "manifest_mind",
    sourceId: "order_of_scribes",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["utility"],
  },
  manifest_mind_cast_through: {
    id: "manifest_mind_cast_through",
    sourceId: "order_of_scribes",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["utility"],
  },

  master_scrivener: {
    id: "master_scrivener",
    sourceId: "order_of_scribes",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["utility", "spellcasting"],
  },
};
