import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { BEAST_RESOURCES } from "./barbarian/beast-resources";
import { HUNTER_RESOURCES } from "./ranger/hunter-resources";

import { GLOOM_STALKER_RESOURCES } from "./ranger/gloom-stalker-resources";
import { HORIZON_WALKER_RESOURCES } from "./ranger/horizon-walker-resources";
import { MONSTER_SLAYER_RESOURCES } from "./ranger/monster-slayer-resources";

import { FEY_WANDERER_RESOURCES } from "./ranger/fey-wanderer-resources";
import { SWARMKEEPER_RESOURCES } from "./ranger/swarmkeeper-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...BEAST_RESOURCES,
  ...HUNTER_RESOURCES,

  ...GLOOM_STALKER_RESOURCES,
  ...HORIZON_WALKER_RESOURCES,
  ...MONSTER_SLAYER_RESOURCES,

  ...FEY_WANDERER_RESOURCES,
  ...SWARMKEEPER_RESOURCES,
};

export const RANGER_RESOURCES: Record<string, ResourceTemplate> = {
  ...RESOURCES_SUBCLASSES,

  foe_slayer: {
    id: "foe_slayer",
    sourceId: "ranger",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: ["senses"],
  },
};
