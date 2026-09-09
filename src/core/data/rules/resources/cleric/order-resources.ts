import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ORDER_RESOURCES: Record<string, ResourceTemplate> = {
  awakened_spellbook_fast_ritual: {
    id: "awakened_spellbook_fast_ritual",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

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

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility", "spellcasting"],
  },
};
