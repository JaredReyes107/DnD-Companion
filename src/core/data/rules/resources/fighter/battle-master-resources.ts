import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_MASTER_RESOURCES: Record<string, ResourceTemplate> = {
  superiority_dice: {
    id: "superiority_dice",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "superiority_dice",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "battle_master",
        },
      },
    ],

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "superiority-dice" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["utility", "combat"],
  },
};
