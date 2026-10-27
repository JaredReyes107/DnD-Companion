import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TWILIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_night: {
    id: "eyes_of_night",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "eyes_of_night",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "twilight",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  steps_of_the_night: {
    id: "steps_of_the_night",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "steps_of_the_night",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "twilight",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
