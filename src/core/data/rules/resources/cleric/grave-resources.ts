import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GRAVE_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_the_grave: {
    id: "eyes_of_the_grave",
    sourceId: "grave",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
  sentinel_at_deaths_doorf_the_grave: {
    id: "sentinel_at_deaths_door",
    sourceId: "grave",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
};
