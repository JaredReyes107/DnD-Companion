import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILDFIRE_RESOURCES: Record<string, ResourceTemplate> = {
  cauterizing_flames: {
    id: "cauterizing_flames",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "cauterizing_flames",
      obtainedVia: {
        via: "subclass",
        classId: "druid",
        subclassId: "wildfire",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  blazing_revival: {
    id: "blazing_revival",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "blazing_revival",
      obtainedVia: {
        via: "subclass",
        classId: "druid",
        subclassId: "wildfire",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
