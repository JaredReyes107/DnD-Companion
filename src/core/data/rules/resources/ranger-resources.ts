import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { HUNTER_RESOURCES } from "./ranger/hunter-resources";

import { GLOOM_STALKER_RESOURCES } from "./ranger/gloom-stalker-resources";
import { HORIZON_WALKER_RESOURCES } from "./ranger/horizon-walker-resources";
import { MONSTER_SLAYER_RESOURCES } from "./ranger/monster-slayer-resources";

import { FEY_WANDERER_RESOURCES } from "./ranger/fey-wanderer-resources";
import { SWARMKEEPER_RESOURCES } from "./ranger/swarmkeeper-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
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
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "foe_slayer",
        obtainedVia: { via: "class", classId: "ranger" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["senses"],
  },
};
