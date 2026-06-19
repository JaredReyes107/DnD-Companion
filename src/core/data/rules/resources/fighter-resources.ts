import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { RESOURCES_BATTLE_MASTER } from "./fighter/battle-master-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...RESOURCES_BATTLE_MASTER,
};

export const RESOURCES_FIGHTER: Record<string, ResourceTemplate> = {
  second_wind: {
    id: "second_wind",
    sourceId: "fighter",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat", "healing"],
  },
  action_surge: {
    id: "action_surge",
    sourceId: "fighter",
    category: "class_features",
    scalingType: "action-surge",
    recharge: "shortRest",
    tags: ["combat", "damage", "resistance"],
  },
  indomitable: {
    id: "indomitable",
    sourceId: "fighter",
    category: "class_features",
    scalingType: "indomitable",
    recharge: "shortRest",
    tags: ["combat", "damage", "resistance"],
  },

  ...RESOURCES_SUBCLASSES,
};
