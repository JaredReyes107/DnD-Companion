import { ResourceTemplate as ResourceTemplate } from "@/core/entities/rules/resource-template";

import { BARBARIAN_RESOURCES } from "./resources/barbarian-resources";
import { BARD_RESOURCES } from "./resources/bard-resources";
import { CLERIC_RESOURCES } from "./resources/cleric-resources";
import { DRUID_RESOURCES } from "./resources/druid-resources";
import { FIGHTER_RESOURCES } from "./resources/fighter-resources";
import { MONK_RESOURCES } from "./resources/monk-resources";
import { PALADIN_RESOURCES } from "./resources/paladin-resources";
import { RANGER_RESOURCES } from "./resources/ranger-resources";
import { ROGUE_RESOURCES } from "./resources/rogue-resources";
import { SORCERER_RESOURCES } from "./resources/sorcerer-resources";
import { WARLOCK_RESOURCES } from "./resources/warlock-resources";
import { WIZARD_RESOURCES } from "./resources/wizard-resources";
import { ARTIFICER_RESOURCES } from "./resources/artificer-resources";

import { E } from "@/core/entities/rules/expr/expr";

const FEATS: Record<string, ResourceTemplate> = {
  luck_points: {
    id: "luck_points",
    sourceId: "sorcerer",
    category: "feats",
    max: E.n(3),
    recharge: "longRest",
    tags: ["utility"],
  },
};

const SHARED_RESOURCES: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    sourceId: "shared", // TODO: confirm nothing reads sourceId for localization/UI
    category: "class_features",
    // Multiclass: one pool, the better of the two class tables (not summed).
    max: E.max(
      E.table(E.classLevel("cleric"), { 1: 1, 6: 2, 18: 3 }),
      E.table(E.classLevel("paladin"), { 3: 1 }),
    ),
    recharge: "longRest", // TODO: RAW is short rest; see restoreResources review
    tags: ["combat", "utility"],
  },
};

export const BASE_RESOURCES: Record<string, ResourceTemplate> = {
  ...FEATS,
  ...SHARED_RESOURCES,

  ...BARBARIAN_RESOURCES,
  ...BARD_RESOURCES,
  ...CLERIC_RESOURCES,
  ...DRUID_RESOURCES,
  ...FIGHTER_RESOURCES,
  ...MONK_RESOURCES,
  ...PALADIN_RESOURCES,
  ...RANGER_RESOURCES,
  ...ROGUE_RESOURCES,
  ...SORCERER_RESOURCES,
  ...WARLOCK_RESOURCES,
  ...WIZARD_RESOURCES,
  ...ARTIFICER_RESOURCES,
};
