import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ORDER_RESOURCES: Record<string, ResourceTemplate> = {
  awakened_spellbook_fast_ritual: {
    id: "awakened_spellbook_fast_ritual",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    tags: [],
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "awakened_spellbook_fast_ritual",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "scribes",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },

  manifest_mind: {
    id: "manifest_mind",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "manifest_mind",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "scribes",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },
  manifest_mind_cast_through: {
    id: "manifest_mind_cast_through",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "manifest_mind_cast_through",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "scribes",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },

  master_scrivener: {
    id: "master_scrivener",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "master_scrivener",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "scribes",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility", "spellcasting"],
  },
};
