import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ANCESTRAL_GUARDIAN_RESOURCES } from "./paladin/ancients-resources";
import { ZEALOT_RESOURCES } from "./barbarian/zealot-resources";

import { BEAST_RESOURCES } from "./barbarian/beast-resources";
import { WILD_MAGIC_RESOURCES } from "./barbarian/wild-magic-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  //XGE
  ...ANCESTRAL_GUARDIAN_RESOURCES,
  ...ZEALOT_RESOURCES,

  ///TCE
  ...BEAST_RESOURCES,
  ...WILD_MAGIC_RESOURCES,
};

export const BARBARIAN_RESOURCES: Record<string, ResourceTemplate> = {
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
