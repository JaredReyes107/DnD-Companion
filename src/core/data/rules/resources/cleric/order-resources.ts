import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ORDER_RESOURCES: Record<string, ResourceTemplate> = {
  embodiment_of_the_law: {
    id: "embodiment_of_the_law",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "embodiment_of_the_law",
      obtainedVia: { via: "subclass", classId: "cleric", subclassId: "order" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
