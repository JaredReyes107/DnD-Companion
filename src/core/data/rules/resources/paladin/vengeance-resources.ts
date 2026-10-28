import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const VENGEANCE_RESOURCES: Record<string, ResourceTemplate> = {
  avenging_angel: {
    id: "avenging_angel",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "avenging_angel",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "vengeance",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
