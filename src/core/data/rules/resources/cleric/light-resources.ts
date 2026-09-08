import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const LIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  warding_flare: {
    id: "warding_flare",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantor: {
      system: "feature",
      featureId: "warding_flare",
      obtainedVia: { via: "subclass", classId: "cleric", subclassId: "light" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
