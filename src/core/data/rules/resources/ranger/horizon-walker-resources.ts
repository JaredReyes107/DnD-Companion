import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HORIZON_WALKER_RESOURCES: Record<string, ResourceTemplate> = {
  detect_portal: {
    id: "some_resource",
    sourceId: "horizon_walker",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
  ethereal_step: {
    id: "ethereal_step",
    sourceId: "horizon_walker",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
};
