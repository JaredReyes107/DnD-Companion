import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { SHARED_RESOURCES } from "./shared-resources";

import { DEVOTION_RESOURCES } from "./paladin/devotion-resources";
import { ANCIENTS_RESOURCES } from "./paladin/ancients-resources";
import { VENGEANCE_RESOURCES } from "./paladin/vengeance-resources";

import { OATHBREAKER_RESOURCES } from "./paladin/oathbreaker-resources";

import { CONQUEST_RESOURCES } from "./paladin/conquest-resources";
// Redemption grants no dedicated chargeable resource in RAW.

import { GLORY_RESOURCES } from "./paladin/glory-resources";
import { WATCHERS_RESOURCES } from "./paladin/watchers-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...DEVOTION_RESOURCES,
  ...ANCIENTS_RESOURCES,
  ...VENGEANCE_RESOURCES,

  ...OATHBREAKER_RESOURCES,

  ...CONQUEST_RESOURCES,

  ...GLORY_RESOURCES,
  ...WATCHERS_RESOURCES,
};

export const PALADIN_RESOURCES: Record<string, ResourceTemplate> = {
  ...RESOURCES_SUBCLASSES,
  ...SHARED_RESOURCES, // channel_divinity — shared pool with Cleric, see shared-resources.ts

  divine_sense: {
    id: "divine_sense",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "divine_sense",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    max: {
      kind: "formula",
      formula: {
        base: { kind: "scaler", id: "CHA" },
        steps: [{ op: "add", value: 1 }],
      },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["senses"],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "lay_on_hands",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    max: {
      kind: "formula",
      formula: {
        base: { kind: "scaler", id: "class-level", param: "paladin" },
        steps: [{ op: "multiply", value: 5 }],
      },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "healing", "cleansing"],
  },

  cleansing_touch: {
    id: "cleansing_touch",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "cleansing_touch",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "CHA" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["cleansing"],
  },
};
