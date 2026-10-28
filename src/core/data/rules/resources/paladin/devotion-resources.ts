import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DEVOTION_RESOURCES: Record<string, ResourceTemplate> = {
  holy_nimbus: {
    id: "holy_nimbus",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "holy_nimbus",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "devotion",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
