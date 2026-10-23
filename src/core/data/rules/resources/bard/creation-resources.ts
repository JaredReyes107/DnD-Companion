import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CREATION_RESOURCES: Record<string, ResourceTemplate> = {
  performance_of_creation: {
    id: "performance_of_creation",
    sourceId: "creation",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
  animating_performance: {
    id: "animating_performance",
    sourceId: "creation",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
