import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PEACE_RESOURCES: Record<string, ResourceTemplate> = {
  emboldening_bond: {
    id: "emboldening_bond",
    sourceId: "peace",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
};
