import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { GLAMOUR_RESOURCES } from "./bard/glamour-resources";
import { WHISPERS_RESOURCES } from "./bard/whispers-resources";
import { CREATION_RESOURCES } from "./bard/creation-resources";
import { ELOQUENCE_RESOURCES } from "./bard/eloquence-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...GLAMOUR_RESOURCES,
  ...WHISPERS_RESOURCES,

  ...CREATION_RESOURCES,
  ...ELOQUENCE_RESOURCES,
};

export const RESOURCES_BARD: Record<string, ResourceTemplate> = {
  bardic_inspiration: {
    id: "bardic_inspiration",
    label: "Bardic Inspiration",
    sourceId: "bard",
    category: "class_features",
    scalingType: "CHA",
    recharge: "longRest",
    tags: [
      "combat",
      "utility",
      "ability-checks",
      "attack-rolls",
      "saving-throws",
    ],
  },

  ...SUBCLASSES_RESOURCES,
};
