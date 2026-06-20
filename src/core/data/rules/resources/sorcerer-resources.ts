import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_SORCERER: Record<string, ResourceTemplate> = {
  sorcery_points: {
    id: "sorcery_points",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    sourceId: "sorcerer",
    category: "class_features", //For UI
    scalingType: "class-level",
    recharge: "longRest",
    tags: ["combat", "support"],
  },
};
