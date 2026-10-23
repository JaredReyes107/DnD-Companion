import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ORDER_OF_SCRIBES_RESOURCES: Record<string, ResourceTemplate> = {
  awakened_spellbook_fast_ritual: {
    id: "awakened_spellbook_fast_ritual",
    sourceId: "scribes",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["spellcasting"],
  },

  manifest_mind: {
    id: "manifest_mind",
    sourceId: "scribes",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["utility"],
  },
  manifest_mind_cast_through: {
    id: "manifest_mind_cast_through",
    sourceId: "scribes",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["utility"],
  },

  master_scrivener: {
    id: "master_scrivener",
    sourceId: "scribes",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["utility", "spellcasting"],
  },
};
