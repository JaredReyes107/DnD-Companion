import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ZEALOT_RESOURCES } from "./barbarian/zealot-resources";
import { BEAST_RESOURCES } from "./barbarian/beast-resources";
import { WILD_MAGIC_RESOURCES } from "./barbarian/wild-magic-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...ZEALOT_RESOURCES,
  ...BEAST_RESOURCES,
  ...WILD_MAGIC_RESOURCES,
};

export const RESOURCES_BARBARIAN: Record<string, ResourceTemplate> = {
  rage: {
    id: "rage",
    sourceId: "barbarian",
    category: "class_features",
    scalingType: "rage",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },

  ...SUBCLASSES_RESOURCES,
};
