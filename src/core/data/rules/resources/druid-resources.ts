import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { LAND_RESOURCES } from "./druid/land-resources";
import { MOON_RESOURCES } from "./druid/moon-resources";

import { DREAMS_RESOURCES } from "./druid/dreams-resources";
import { SHEPHERD_RESOURCES } from "./druid/shepherd-resources";

import { SPORES_RESOURCES } from "./druid/spores-resources";
import { STARS_RESOURCES } from "./druid/stars-resources";
import { WILDFIRE_RESOURCES } from "./druid/wildfire-resources";

export const SUBCLASS_RESOURCES: Record<string, ResourceTemplate> = {
  ...LAND_RESOURCES,
  ...MOON_RESOURCES,

  ...DREAMS_RESOURCES,
  ...SHEPHERD_RESOURCES,

  ...SPORES_RESOURCES,
  ...STARS_RESOURCES,
  ...WILDFIRE_RESOURCES,
};

export const DRUID_RESOURCES: Record<string, ResourceTemplate> = {
  wild_shape: {
    id: "wild_shape",
    sourceId: "druid",
    category: "class_features",
    scalingType: "fixed:2",
    recharge: "longRest",
    tags: ["combat", "utility"],
  },

  ...SUBCLASS_RESOURCES,
};
