import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const OPEN_HAND_RESOURCES: Record<string, ResourceTemplate> = {
  wholeness_of_body: {
    id: "wholeness_of_body",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "wholeness_of_body",
        obtainedVia: {
          via: "subclass",
          classId: "monk",
          subclassId: "open_hand",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
