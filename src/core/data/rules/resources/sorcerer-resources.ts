import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { WILD_MAGIC_SORCERER_RESOURCES } from "./sorcerer/wild-magic-resources";

import { DIVINE_SOUL_RESOURCES } from "./sorcerer/divine-soul-resources";
import { SHADOW_MAGIC_RESOURCES } from "./sorcerer/shadow-magic-resources";
import { STORM_SORCERY_RESOURCES } from "./sorcerer/storm-resources";

import { ABERRANT_MIND_RESOURCES } from "./sorcerer/aberrant-mind-resources";
import { CLOCKWORK_SOUL_RESOURCES } from "./sorcerer/clockwork-soul-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  // PHB
  ...WILD_MAGIC_SORCERER_RESOURCES,

  // XGE
  ...DIVINE_SOUL_RESOURCES,
  ...SHADOW_MAGIC_RESOURCES,
  ...STORM_SORCERY_RESOURCES,

  // TCE
  ...ABERRANT_MIND_RESOURCES,
  ...CLOCKWORK_SOUL_RESOURCES,
};

export const SORCERER_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,

  sorcery_points: {
    id: "sorcery_points",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "sorcery_points",
        obtainedVia: { via: "class", classId: "sorcerer" },
      },
    ],

    max: {
      kind: "formula",
      formula: {
        base: { kind: "scaler", id: "class-level", param: "sorcerer" },
      },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "support"],
  },
};
