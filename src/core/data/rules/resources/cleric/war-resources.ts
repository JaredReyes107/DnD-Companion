import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_RESOURCES: Record<string, ResourceTemplate> = {
  war_priest: {
    id: "war_priest",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantor: {
      system: "feature",
      featureId: "war_priest",
      obtainedVia: { via: "subclass", classId: "cleric", subclassId: "war" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
