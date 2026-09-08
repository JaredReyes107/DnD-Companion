import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GRAVE_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_the_grave: {
    id: "eyes_of_the_grave",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "eyes_of_the_grave",
      obtainedVia: { via: "subclass", classId: "cleric", subclassId: "grave" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  sentinel_at_deaths_door: {
    id: "sentinel_at_deaths_door",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "sentinel_at_deaths_door",
      obtainedVia: { via: "subclass", classId: "cleric", subclassId: "grave" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
