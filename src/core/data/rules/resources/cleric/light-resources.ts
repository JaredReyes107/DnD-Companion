import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const LIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  warding_flare: {
    id: "warding_flare",
    sourceId: "light",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: ["combat"],
  },
};
