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
    category: "class_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "pact_of_the_talisman_aid",
        obtainedVia: {
          via: "choice",
          poolId: "pact_boon",
          grantedBy: { via: "class", classId: "warlock" },
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["skill", "bonus"],
  },
};

export const WARLOCK_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,
  ...ELDRITCH_INVOCATIONS_RESOURCES,
  ...PACT_BOON_RESOURCES,

  pact_slots: {
    id: "pact_slots",
    category: "pact_slots",
    origin: { book: "PHB" },
    max: E.table(E.classLevel("warlock"), { 1: 1, 2: 2, 11: 3, 17: 4 }),

    grantors: [
      {
        system: "feature",
        featureId: "pact_slots",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],

    group: "spell_slot",
    rank: E.table(E.classLevel("warlock"), { 1: 1, 3: 2, 5: 3, 7: 4, 9: 5 }),

    tags: ["spellcasting"],
  },

  mystic_arcanum_6: {
    id: "mystic_arcanum_6",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 11: 1 }),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_6",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  mystic_arcanum_7: {
    id: "mystic_arcanum_7",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 13: 1 }),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_7",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  mystic_arcanum_8: {
    id: "mystic_arcanum_8",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 15: 1 }),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_8",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  mystic_arcanum_9: {
    id: "mystic_arcanum_9",
    category: "pact_slots",
    max: E.table(E.classLevel("warlock"), { 17: 1 }),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_9",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  eldritch_master: {
    id: "eldritch_master",
    category: "class_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "eldritch_master",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
