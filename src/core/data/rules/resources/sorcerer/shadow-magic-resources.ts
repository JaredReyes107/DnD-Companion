import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHADOW_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  strength_of_the_grave: {
    id: "strength_of_the_grave",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense"],
  },
};
