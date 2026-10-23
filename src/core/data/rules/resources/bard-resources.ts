import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { GLAMOUR_RESOURCES } from "./bard/glamour-resources";
import { WHISPERS_RESOURCES } from "./bard/whispers-resources";
import { CREATION_RESOURCES } from "./bard/creation-resources";
import { ELOQUENCE_RESOURCES } from "./bard/eloquence-resources";
import { E } from "@/core/entities/rules/expr/expr";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...GLAMOUR_RESOURCES,
  ...WHISPERS_RESOURCES,

  ...CREATION_RESOURCES,
  ...ELOQUENCE_RESOURCES,
};

export const BARD_RESOURCES: Record<string, ResourceTemplate> = {
  bardic_inspiration: {
    id: "bardic_inspiration",
    sourceId: "bard",
    category: "class_features",
    max: E.max(E.n(1), E.mod("CHA")),
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
