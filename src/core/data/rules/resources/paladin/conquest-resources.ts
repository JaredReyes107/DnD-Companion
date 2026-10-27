import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONQUEST_RESOURCES: Record<string, ResourceTemplate> = {
  invincible_conqueror: {
    id: "invincible_conqueror",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
