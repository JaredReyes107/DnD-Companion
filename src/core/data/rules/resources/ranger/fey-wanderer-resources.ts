import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FEY_WANDERER_RESOURCES: Record<string, ResourceTemplate> = {
  dreadful_strikes: {
    id: "dreadful_strikes",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: [],
  },
  fey_reinforcements: {
    id: "fey_reinforcements",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  misty_wanderer: {
    id: "misty_wanderer",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
