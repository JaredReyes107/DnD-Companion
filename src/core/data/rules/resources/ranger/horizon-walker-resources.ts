import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HORIZON_WALKER_RESOURCES: Record<string, ResourceTemplate> = {
  detect_portal: {
    id: "detect_portal",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "detect_portal",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "horizon_walker",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  ethereal_step: {
    id: "ethereal_step",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "ethereal_step",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "horizon_walker",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
