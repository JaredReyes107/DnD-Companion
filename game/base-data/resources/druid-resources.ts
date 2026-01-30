import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_DRUID: Record<string, ResourceTemplate> = {
  wild_shape: {
    id: "wild_shape",
    label: "Wild Shape",
    sourceId: "druid",
    category: "class_features",
    scalingType: "fixed:2",
    recharge: "longRest",
    tags: ["combat", "utility"],
  },
};
