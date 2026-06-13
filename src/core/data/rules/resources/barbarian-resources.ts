import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ZEALOT_RESOURCES } from "./barbarian/zealot-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...ZEALOT_RESOURCES,
};

export const RESOURCES_BARBARIAN: Record<string, ResourceTemplate> = {
  rage: {
    id: "rage",
    label: "Rage",
    sourceId: "barbarian",
    category: "class_features",
    scalingType: "rage",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },

  ...SUBCLASSES_RESOURCES,
};
