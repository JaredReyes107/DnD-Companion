import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONQUEST_RESOURCES: Record<string, ResourceTemplate> = {
  invincible_conqueror: {
    id: "invincible_conqueror",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "invincible_conqueror",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "conquest",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
