import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { KNOWLEDGE_RESOURCES } from "./cleric/knowledge-resources";
import { LIFE_RESOURCES } from "./cleric/life-resources";
import { LIGHT_RESOURCES } from "./cleric/light-resources";
import { NATURE_RESOURCES } from "./cleric/nature-resources";
import { TEMPEST_RESOURCES } from "./cleric/tempest-resources";
import { TRICKERY_RESOURCES } from "./cleric/trickery-resources";

export const subclass_resources: Record<string, ResourceTemplate> = {
  ...KNOWLEDGE_RESOURCES,
  ...LIFE_RESOURCES,
  ...LIGHT_RESOURCES,
  ...NATURE_RESOURCES,
  ...TEMPEST_RESOURCES,
  ...TRICKERY_RESOURCES,
};

export const RESOURCES_CLERIC: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    sourceId: "cleric",
    category: "class_features",
    scalingType: "channel-divinity",
    recharge: "longRest",
    tags: ["combat", "utility"],
  },

  ...subclass_resources,
};
