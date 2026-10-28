import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILD_MAGIC_SORCERER_RESOURCES: Record<string, ResourceTemplate> = {
  tides_of_chaos: {
    id: "tides_of_chaos",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "tides_of_chaos",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "wild_magic",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
