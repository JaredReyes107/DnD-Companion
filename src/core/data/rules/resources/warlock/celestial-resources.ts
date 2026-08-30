import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CELESTIAL_RESOURCES: Record<string, ResourceTemplate> = {
  healing_light_dice: {
    id: "healing_light_dice",
    sourceId: "celestial",
    category: "subclass_features",
    scalingType: "class-level:+1",
    recharge: "longRest",
    tags: ["healing"],
  },

  searing_vengeance: {
    id: "searing_vengeance",
    sourceId: "celestial",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat", "healing"],
  },
};
