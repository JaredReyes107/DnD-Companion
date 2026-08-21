import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONQUEST_RESOURCES: Record<string, ResourceTemplate> = {
  invincible_conqueror: {
    id: "invincible_conqueror",
    sourceId: "conquest",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
