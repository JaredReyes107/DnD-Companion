import { ResourceTemplate as ResourceTemplate } from "@/core/entities/rules/resource-template";
import { RESOURCES_ARTIFICER } from "./resources/artificer-resources";
import { RESOURCES_BARBARIAN } from "./resources/barbarian-resources";
import { RESOURCES_BARD } from "./resources/bard-resources";
import { RESOURCES_CLERIC } from "./resources/cleric-resources";
import { DRUID_RESOURCES } from "./resources/druid-resources";
import { RESOURCES_FIGHTER } from "./resources/fighter-resources";
import { RESOURCES_MONK } from "./resources/monk-resources";
import { RESOURCES_PALADIN } from "./resources/paladin-resources";
import { RESOURCES_RANGER } from "./resources/ranger-resources";
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
  ...RESOURCES_BARBARIAN,
  ...RESOURCES_BARD,
  ...RESOURCES_CLERIC,
  ...DRUID_RESOURCES,
  ...RESOURCES_FIGHTER,
  ...RESOURCES_MONK,
  ...RESOURCES_PALADIN,
  ...RESOURCES_RANGER,
  ...RESOURCES_ROGUE,
  ...RESOURCES_SORCERER,
  ...RESOURCES_WARLOCK,
  ...RESOURCES_WIZARD,
};
