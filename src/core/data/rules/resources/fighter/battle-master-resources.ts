import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_MASTER_RESOURCES: Record<string, ResourceTemplate> = {
  superiority_dice: {
    id: "superiority_dice",
    sourceId: "battle_master",
    category: "subclass_features",
    scalingType: "superiority-dice",
    recharge: "shortRest",
    tags: ["utility", "combat"],
  },
};
