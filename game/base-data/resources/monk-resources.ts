import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_MONK: Record<string, ResourceTemplate> = {
  ki_points: {
    id: "ki_points",
    label: "Ki Points",
    sourceId: "monk",
    category: "class_features",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "mobility"],
  },
};
