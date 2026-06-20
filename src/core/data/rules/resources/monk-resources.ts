import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_MONK: Record<string, ResourceTemplate> = {
  ki_points: {
    id: "ki_points",
    sourceId: "monk",
    category: "class_features",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "mobility"],
  },
};
