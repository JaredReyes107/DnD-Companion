import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ELDRITCH_INVOCATIONS_RESOURCES } from "./warlock/eldritch-invocations-resources";

import { FIEND_RESOURCES } from "./warlock/fiend-resources";
import { GREAT_OLD_ONE_RESOURCES } from "./warlock/great-old-one-resources";
import { CELESTIAL_RESOURCES } from "./warlock/celestial-resources";
import { HEXBLADE_RESOURCES } from "./warlock/hexblade-resources";
import { FATHOMLESS_RESOURCES } from "./warlock/fathomless-resources";
import { GENIE_RESOURCES } from "./warlock/genie-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  // PHB
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

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "PB" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["skill", "bonus"],
  },
};

export const WARLOCK_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,
  ...ELDRITCH_INVOCATIONS_RESOURCES,
  ...PACT_BOON_RESOURCES,

  /*
  pact_slots: {
    id: "pact_slots",
    category: "pact_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "pact_slots",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "spellcasting" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  */
  //
  mystic_arcanum_6: {
    id: "mystic_arcanum_6",
    category: "pact_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_6",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  mystic_arcanum_7: {
    id: "mystic_arcanum_7",
    category: "pact_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_7",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  mystic_arcanum_8: {
    id: "mystic_arcanum_8",
    category: "pact_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_8",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  mystic_arcanum_9: {
    id: "mystic_arcanum_9",
    category: "pact_slots",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "mystic_arcanum_9",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  eldritch_master: {
    id: "eldritch_master",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "eldritch_master",
        obtainedVia: { via: "class", classId: "warlock" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
