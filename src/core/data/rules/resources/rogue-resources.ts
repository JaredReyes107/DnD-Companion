import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_ROGUE: Record<string, ResourceTemplate> = {
  stroke_of_luck: {
    id: "stroke_of_luck",
    sourceId: "rogue",
    category: "class_features",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "utility"],
  },
};
