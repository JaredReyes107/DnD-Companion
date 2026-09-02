import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const NECROMANCY_RESOURCES: Record<string, ResourceTemplate> = {
  grim_harvest: {
    id: "grim_harvest",
    sourceId: "necromancy",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: ["healing"],
  },
};
