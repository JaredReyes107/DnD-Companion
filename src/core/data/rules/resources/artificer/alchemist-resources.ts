import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ALCHEMIST_RESOURCES: Record<string, ResourceTemplate> = {
  experimental_elixir_fabricate: {
    id: "experimental_elixir_fabricate",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "experimental_elixir_fabricate",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "alchemist",
        },
      },
    ],
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "experimental-elixir" } },
    },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },

  cast_lesser_restoration_free: {
    id: "cast_lesser_restoration_free",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "cast_lesser_restoration_free",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "alchemist",
        },
      },
    ],
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["healing"],
  },

  cast_greater_restoration_free: {
    id: "cast_greater_restoration_free",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "cast_greater_restoration_free",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "alchemist",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing"],
  },

  cast_heal_free: {
    id: "cast_heal_free",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "cast_heal_free",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "alchemist",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing"],
  },
};
