import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_BATTLE_MASTER: Record<string, ResourceTemplate> = {
  superiority_dice: {
    id: "superiority_dice",
    sourceId: "battle_master",
    category: "subclass_features",
    scalingType: "superiority-dice",
    recharge: "shortRest",
    tags: ["combat"],
  },
};
