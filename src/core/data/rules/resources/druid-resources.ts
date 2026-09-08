import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { LAND_RESOURCES } from "./druid/land-resources";

import { DREAMS_RESOURCES } from "./druid/dreams-resources";
import { SHEPHERD_RESOURCES } from "./druid/shepherd-resources";

import { SPORES_RESOURCES } from "./druid/spores-resources";
import { STARS_RESOURCES } from "./druid/stars-resources";
import { WILDFIRE_RESOURCES } from "./druid/wildfire-resources";

export const SUBCLASS_RESOURCES: Record<string, ResourceTemplate> = {
  ...LAND_RESOURCES,

  ...DREAMS_RESOURCES,
  ...SHEPHERD_RESOURCES,

  ...SPORES_RESOURCES,
  ...STARS_RESOURCES,
  ...WILDFIRE_RESOURCES,
};

export const DRUID_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASS_RESOURCES,

  wild_shape: {
    id: "wild_shape",
    category: "class_features",
    origin: { book: "PHB" },
    grantor: {
      system: "feature",
      featureId: "wild_shape",
      obtainedVia: { via: "class", classId: "druid" },
    },

    scaling: { base: { kind: "fixed", value: 2 } },
    max: { kind: "value", amount: 2 },
    min: { kind: "value", amount: 0 },

    // NOTE: RAW recovers on short OR long rest — currently modeled as longRest only.
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "utility"],
  },
};
