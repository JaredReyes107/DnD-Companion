import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_RESOURCES: Record<string, ResourceTemplate> = {
  war_priest: {
    id: "war_priest",
    sourceId: "war",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
};
