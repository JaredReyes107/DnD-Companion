import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILDFIRE_RESOURCES: Record<string, ResourceTemplate> = {
  cauterizing_flames: {
    id: "cauterizing_flames",
    sourceId: "wildfire",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: [],
  },
  blazing_revival: {
    id: "blazing_revival",
    sourceId: "wildfire",
    category: "subclass_features",
    scalingType: "fixed:1 ",
    recharge: "longRest",
    tags: [],
  },
};
