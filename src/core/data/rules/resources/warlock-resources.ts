import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { ELDRITCH_INVOCATIONS_RESOURCES } from "./warlock/eldritch-invocations-resources";

import { ARCHFEY_RESOURCES } from "./warlock/archfey-resources";
import { FIEND_RESOURCES } from "./warlock/fiend-resources";
import { GREAT_OLD_ONE_RESOURCES } from "./warlock/great-old-one-resources";

import { CELESTIAL_RESOURCES } from "./warlock/celestial-resources";
import { HEXBLADE_RESOURCES } from "./warlock/hexblade-resources";

import { FATHOMLESS_RESOURCES } from "./warlock/fathomless-resources";
import { GENIE_RESOURCES } from "./warlock/genie-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  // PHB
  ...ARCHFEY_RESOURCES,
  ...FIEND_RESOURCES,
  ...GREAT_OLD_ONE_RESOURCES,

  // XGE
  ...CELESTIAL_RESOURCES,
  ...HEXBLADE_RESOURCES,

  // TCE
  ...FATHOMLESS_RESOURCES,
  ...GENIE_RESOURCES,
};

const PACT_BOON_RESOURCES: Record<string, ResourceTemplate> = {
  pact_of_the_talisman_aid: {
    id: "pact_of_the_talisman_aid",
    sourceId: "pact_of_the_talisman",
    category: "class_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["skill", "bonus"],
  },
};

export const WARLOCK_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,
  ...ELDRITCH_INVOCATIONS_RESOURCES,
  ...PACT_BOON_RESOURCES,

  pact_slots: {
    id: "pact_slots",
    sourceId: "pact_magic",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 1: 1, 2: 2, 11: 3, 17: 4 }),
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_6: {
    id: "mystic_arcanum_6",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 11: 1 }),
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_7: {
    id: "mystic_arcanum_7",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 13: 1 }),
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_8: {
    id: "mystic_arcanum_8",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 15: 1 }),
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_9: {
    id: "mystic_arcanum_9",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 17: 1 }),
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  eldritch_master: {
    id: "eldritch_master",
    sourceId: "eldritch_master",
    category: "class_features",
    max: E.n(1),
    recharge: "longRest",
  },
};
