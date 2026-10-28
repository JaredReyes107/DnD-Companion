import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HORIZON_WALKER_RESOURCES: Record<string, ResourceTemplate> = {
  detect_portal: {
    id: "detect_portal",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  ethereal_step: {
    id: "ethereal_step",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
