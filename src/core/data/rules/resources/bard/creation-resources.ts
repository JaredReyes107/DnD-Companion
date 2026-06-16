import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CREATION_RESOURCES: Record<string, ResourceTemplate> = {
  performance_of_creation: {
    id: "performance_of_creation",
    label: "",
    sourceId: "creation",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  animating_performance: {
    id: "animating_performance",
    label: "",
    sourceId: "creation",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
