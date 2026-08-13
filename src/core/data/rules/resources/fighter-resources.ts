import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { BATTLE_MASTER_RESOURCES } from "./fighter/battle-master-resources";
import { CHAMPION_RESOURCES } from "./fighter/champion-resources";
import { ELDRITCH_KNIGHT_RESOURCES } from "./fighter/eldritch-knight-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...BATTLE_MASTER_RESOURCES,
  ...CHAMPION_RESOURCES,
  ...ELDRITCH_KNIGHT_RESOURCES,
};

export const FIGHTER_RESOURCES: Record<string, ResourceTemplate> = {
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
