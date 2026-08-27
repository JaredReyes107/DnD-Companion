import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ARCANE_TRICKSTER_RESOURCES } from "./rogue/arcane-trickster-resources";
import { ASSASSIN_RESOURCES } from "./rogue/assassin-resources";
import { INQUISITIVE_RESOURCES } from "./rogue/inquisitive-resources";

import { MASTERMIND_RESOURCES } from "./rogue/mastermind-resources";
import { PHANTOM_RESOURCES } from "./rogue/phantom-resources";
import { SCOUT_RESOURCES } from "./rogue/scout-resources";
import { SOULKNIFE_RESOURCES } from "./rogue/soulknife-resources";

import { SWASHBUCKLER_RESOURCES } from "./rogue/swashbuckler-resources";
import { THIEF_RESOURCES } from "./rogue/thief-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...ARCANE_TRICKSTER_RESOURCES,
  ...ASSASSIN_RESOURCES,
  ...THIEF_RESOURCES,

  ...INQUISITIVE_RESOURCES,
  ...MASTERMIND_RESOURCES,
  ...SCOUT_RESOURCES,
  ...SWASHBUCKLER_RESOURCES,

  ...PHANTOM_RESOURCES,
  ...SOULKNIFE_RESOURCES,
};

export const ROGUE_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,

  sneak_attack: {
    id: "sneak_attack",
    sourceId: "rogue",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: ["combat", "damage"],
  },
  stroke_of_luck: {
    id: "stroke_of_luck",
    sourceId: "rogue",
    category: "class_features",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "utility"],
  },
};
