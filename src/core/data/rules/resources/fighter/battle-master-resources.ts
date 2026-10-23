import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_MASTER_RESOURCES: Record<string, ResourceTemplate> = {
  superiority_dice: {
    id: "superiority_dice",
    sourceId: "battle_master",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "battle_master"), {
      1: 4,
      7: 5,
      15: 6,
    }),
    recharge: "shortRest",
    tags: ["utility", "combat"],
  },
};
