import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ANCESTRAL_GUARDIAN_RESOURCES } from "./barbarian/ancestral-guardian-resources";
import { ZEALOT_RESOURCES } from "./barbarian/zealot-resources";

import { BEAST_RESOURCES } from "./barbarian/beast-resources";
import { WILD_MAGIC_RESOURCES } from "./barbarian/wild-magic-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  //XGE
  ...ANCESTRAL_GUARDIAN_RESOURCES,
  ...ZEALOT_RESOURCES,

  ///TCE
  ...BEAST_RESOURCES,
  ...WILD_MAGIC_RESOURCES,
};

export const BARBARIAN_RESOURCES: Record<string, ResourceTemplate> = {
  rage: {
    id: "rage",
    category: "class_features",
    // TODO(unlimited): Infinity isn't JSON-safe; persistence fix deferred.
    max: E.table(E.classLevel("barbarian"), {
      1: 2,
      3: 3,
      6: 4,
      12: 5,
      17: 6,
      20: Infinity,
    }),

    tags: ["combat", "damage", "resistance"],
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "rage",
        obtainedVia: { via: "class", classId: "barbarian" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },

  ...SUBCLASSES_RESOURCES,
};
