import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SAMURAI_RESOURCES: Record<string, ResourceTemplate> = {
  fighting_spirit: {
    id: "fighting_spirit",
    sourceId: "samurai",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["combat", "buff"],
  },
  strength_before_death: {
    id: "strength_before_death",
    sourceId: "samurai",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["defense", "last-stand"],
  },
};
