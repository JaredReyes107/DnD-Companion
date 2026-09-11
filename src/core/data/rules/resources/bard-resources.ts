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

export const BARD_RESOURCES: Record<string, ResourceTemplate> = {
  bardic_inspiration: {
    id: "bardic_inspiration",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "bardic_inspiration",
        obtainedVia: { via: "class", classId: "bard" },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "CHA" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
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
