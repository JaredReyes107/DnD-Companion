import { ResourceTemplate } from "@/game/data/templates/resource-template";

export const RESOURCES_BARBARIAN: Record<string, ResourceTemplate> = {
  rage: {
    id: "rage",
    label: "Rage",
    sourceId: "barbarian",
    category: "class_features",
    scalingType: "rage",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },
};
