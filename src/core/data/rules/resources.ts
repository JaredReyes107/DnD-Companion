import { ResourceTemplate as ResourceTemplate } from "@/core/entities/rules/resource-template";
import { RESOURCES_ARTIFICER } from "./resources/artificer-resources";
import { BARBARIAN_RESOURCES } from "./resources/barbarian-resources";
import { BARD_RESOURCES } from "./resources/bard-resources";
import { CLERIC_RESOURCES } from "./resources/cleric-resources";
import { DRUID_RESOURCES } from "./resources/druid-resources";
import { FIGHTER_RESOURCES } from "./resources/fighter-resources";
import { MONK_RESOURCES } from "./resources/monk-resources";
import { PALADIN_RESOURCES } from "./resources/paladin-resources";
import { RANGER_RESOURCES } from "./resources/ranger-resources";
import { RESOURCES_ROGUE } from "./resources/rogue-resources";
import { RESOURCES_SORCERER } from "./resources/sorcerer-resources";
import { RESOURCES_WARLOCK } from "./resources/warlock-resources";
import { RESOURCES_WIZARD } from "./resources/wizard-resources";

const FEATS: Record<string, ResourceTemplate> = {
  luck_points: {
    id: "luck_points",
    sourceId: "sorcerer",
    category: "feats",
    scalingType: "fixed:3",
    recharge: "longRest",
    tags: ["utility"],
  },
};

export const BASE_RESOURCES: Record<string, ResourceTemplate> = {
  ...FEATS,
  ...RESOURCES_ARTIFICER,
  ...BARBARIAN_RESOURCES,
  ...BARD_RESOURCES,
  ...CLERIC_RESOURCES,
  ...DRUID_RESOURCES,
  ...FIGHTER_RESOURCES,
  ...MONK_RESOURCES,
  ...PALADIN_RESOURCES,
  ...RANGER_RESOURCES,
  ...RESOURCES_ROGUE,
  ...RESOURCES_SORCERER,
  ...RESOURCES_WARLOCK,
  ...RESOURCES_WIZARD,
};
