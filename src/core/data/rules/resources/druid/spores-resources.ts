import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SPORES_RESOURCES: Record<string, ResourceTemplate> = {
  fungal_infestation: {
    id: "fungal_infestation",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "fungal_infestation",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "spores" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
