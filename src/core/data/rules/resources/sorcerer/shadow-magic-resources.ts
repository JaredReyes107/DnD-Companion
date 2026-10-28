import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHADOW_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  strength_of_the_grave: {
    id: "strength_of_the_grave",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "strength_of_the_grave",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "shadow_magic",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense"],
  },
};
