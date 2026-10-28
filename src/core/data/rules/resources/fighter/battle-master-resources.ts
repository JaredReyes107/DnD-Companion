import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_MASTER_RESOURCES: Record<string, ResourceTemplate> = {
  superiority_dice: {
    id: "superiority_dice",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "battle_master"), {
      1: 4,
      7: 5,
      15: 6,
    }),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["utility", "combat"],
  },
};
