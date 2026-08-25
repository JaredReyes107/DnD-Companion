import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLOOM_STALKER_RESOURCES: Record<string, ResourceTemplate> = {
  stalkers_flurry: {
    id: "stalkers_flurry",
    sourceId: "gloom_stalker",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perRound",
    tags: [],
  },
};
