import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ANCIENTS_RESOURCES: Record<string, ResourceTemplate> = {
  undying_sentinel: {
    id: "undying_sentinel",
    sourceId: "ancients",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  elder_champion: {
    id: "elder_champion",
    sourceId: "ancients",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
