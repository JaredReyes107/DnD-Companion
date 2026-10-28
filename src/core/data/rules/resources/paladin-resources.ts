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
import { E } from "@/core/entities/rules/expr/expr";

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
    max: E.max(E.n(1), E.add(E.mod("CHA"), E.n(1))),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "divine_sense",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["senses"],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    category: "class_features",
    max: E.mul(E.classLevel("paladin"), E.n(5)),

    tags: ["combat", "healing", "cleansing"],
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "lay_on_hands",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },

  cleansing_touch: {
    id: "cleansing_touch",
    category: "class_features",
    max: E.max(E.n(1), E.mod("CHA")),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "cleansing_touch",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["cleansing"],
  },
};
