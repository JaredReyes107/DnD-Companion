import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CREATION_RESOURCES: Record<string, ResourceTemplate> = {
  performance_of_creation: {
    id: "performance_of_creation",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "performance_of_creation",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "creation",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  animating_performance: {
    id: "animating_performance",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "animating_performance",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "creation",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
