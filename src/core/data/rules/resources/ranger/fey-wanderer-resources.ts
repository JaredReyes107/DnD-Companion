import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FEY_WANDERER_RESOURCES: Record<string, ResourceTemplate> = {
  dreadful_strikes: {
    id: "dreadful_strikes",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "dreadful_strikes",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "fey_wanderer",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: [],
  },
  fey_reinforcements: {
    id: "fey_reinforcements",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "fey_reinforcements",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "fey_wanderer",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  misty_wanderer: {
    id: "misty_wanderer",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "misty_wanderer",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "fey_wanderer",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
