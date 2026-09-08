import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { BATTLE_MASTER_RESOURCES } from "./fighter/battle-master-resources";
// Champion has no dedicated chargeable resource in RAW.
// Eldritch Knight has no dedicated chargeable resource in RAW.

import { ARCANE_ARCHER_RESOURCES } from "./fighter/arcane-archer-resources";
import { CAVALIER_RESOURCES } from "./fighter/cavalier-resources";
import { SAMURAI_RESOURCES } from "./fighter/samurai-resources";

import { PSI_WARRIOR_RESOURCES } from "./fighter/psi-warrior-resources";
import { RUNE_KNIGHT_RESOURCES } from "./fighter/rune-knight-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...BATTLE_MASTER_RESOURCES,

  ...ARCANE_ARCHER_RESOURCES,
  ...CAVALIER_RESOURCES,
  ...SAMURAI_RESOURCES,

  ...PSI_WARRIOR_RESOURCES,
  ...RUNE_KNIGHT_RESOURCES,
};

export const FIGHTER_RESOURCES: Record<string, ResourceTemplate> = {
  second_wind: {
    id: "second_wind",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "second_wind",
        obtainedVia: { via: "class", classId: "fighter" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "healing"],
  },
  action_surge: {
    id: "action_surge",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "action_surge",
        obtainedVia: { via: "class", classId: "fighter" },
      },
    ],

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "action-surge" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "damage", "resistance"],
  },
  indomitable: {
    id: "indomitable",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "indomitable",
        obtainedVia: { via: "class", classId: "fighter" },
      },
    ],

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "indomitable" } },
    },
    min: { kind: "value", amount: 0 },

    // NOTE: RAW recovers on long rest only — currently modeled as shortRest.
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "damage", "resistance"],
  },

  ...RESOURCES_SUBCLASSES,
};
