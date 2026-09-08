import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ARCANE_TRICKSTER_RESOURCES } from "./rogue/arcane-trickster-resources";

import { INQUISITIVE_RESOURCES } from "./rogue/inquisitive-resources";
import { SOULKNIFE_RESOURCES } from "./rogue/soulknife-resources";

import { PHANTOM_RESOURCES } from "./rogue/phantom-resources";
import { SWASHBUCKLER_RESOURCES } from "./rogue/swashbuckler-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...ARCANE_TRICKSTER_RESOURCES,

  ...INQUISITIVE_RESOURCES,
  ...SWASHBUCKLER_RESOURCES,

  ...PHANTOM_RESOURCES,
  ...SOULKNIFE_RESOURCES,
};

export const ROGUE_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,

  sneak_attack: {
    id: "sneak_attack",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "sneak_attack",
        obtainedVia: { via: "class", classId: "rogue" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "perRound" }, amount: "full" }], // own turn
    tags: ["combat", "damage"],
  },
  stroke_of_luck: {
    id: "stroke_of_luck",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "stroke_of_luck",
        obtainedVia: { via: "class", classId: "rogue" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "utility"],
  },
};
