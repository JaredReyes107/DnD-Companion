import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { FOUR_ELEMENTS_RESOURCES } from "./monk/four-elements-resources";
import { OPEN_HAND_RESOURCES } from "./monk/open-hand-resources";
import { SHADOW_RESOURCES } from "./monk/shadow-resources";

import { DRUNKEN_MASTER_RESOURCES } from "./monk/drunken-master-resources";
import { KENSEI_RESOURCES } from "./monk/kensei-resources";
import { SUN_SOUL_RESOURCES } from "./monk/sun-soul-resources";

import { ASTRAL_SELF_RESOURCES } from "./monk/astral-self-resources";
import { MERCY_RESOURCES } from "./monk/mercy-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...FOUR_ELEMENTS_RESOURCES,
  ...OPEN_HAND_RESOURCES,
  ...SHADOW_RESOURCES,

  ...DRUNKEN_MASTER_RESOURCES,
  ...KENSEI_RESOURCES,
  ...SUN_SOUL_RESOURCES,

  ...ASTRAL_SELF_RESOURCES,
  ...MERCY_RESOURCES,
};

export const MONK_RESOURCES: Record<string, ResourceTemplate> = {
  ...RESOURCES_SUBCLASSES,

  ki_points: {
    id: "ki_points",
    sourceId: "monk",
    category: "class_features",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "mobility"],
  },
};
