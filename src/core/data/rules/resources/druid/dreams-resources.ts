import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DREAMS_RESOURCES: Record<string, ResourceTemplate> = {
  balm_of_the_summer_court: {
    id: "balm_of_the_summer_court",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "balm_of_the_summer_court",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "dreams" },
    },

    scaling: { base: { kind: "scaler", id: "class-level", param: "druid" } },
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "class-level", param: "druid" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing", "support"],
  },
  hidden_paths: {
    id: "hidden_paths",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "hidden_paths",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "dreams" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement", "support"],
  },
  walker_in_dreams: {
    id: "walker_in_dreams",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "walker_in_dreams",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "dreams" },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting", "utility"],
  },
};
