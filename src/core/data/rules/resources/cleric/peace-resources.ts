import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PEACE_RESOURCES: Record<string, ResourceTemplate> = {
  emboldening_bond: {
    id: "emboldening_bond",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "emboldening_bond",
      obtainedVia: { via: "subclass", classId: "cleric", subclassId: "peace" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
