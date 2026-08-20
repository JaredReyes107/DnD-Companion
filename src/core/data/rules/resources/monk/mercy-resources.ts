import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MERCY_RESOURCES: Record<string, ResourceTemplate> = {
  hand_of_ultimate_mercy: {
    id: "hand_of_ultimate_mercy",
    sourceId: "mercy",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
