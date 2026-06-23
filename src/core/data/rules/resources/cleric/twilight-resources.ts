import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TWILIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_night: {
    id: "eyes_of_night",
    sourceId: "twilight",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  steps_of_the_night: {
    id: "steps_of_the_night",
    sourceId: "twilight",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: [],
  },
};
