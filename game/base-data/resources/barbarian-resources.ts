import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_BARBARIAN: Record<string, ResourceTemplate> = {
  rage: {
    id: "rage",
    label: "Rage",
    sourceId: "barbarian",
    category: "class-feature",
    scalingType: "rage",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },
};
