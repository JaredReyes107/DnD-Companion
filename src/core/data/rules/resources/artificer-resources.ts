import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

import { ALCHEMIST_RESOURCES } from "./artificer/alchemist-resources";
import { ARMORER_RESOURCES } from "./artificer/armorer-resources";
import { ARTILLERIST_RESOURCES } from "./artificer/artillerist-resources";
import { BATTLE_SMITH_RESOURCES } from "./artificer/battle-smith-resources";

const SUBCLASS_RESOURCES: Record<string, ResourceTemplate> = {
  ...ALCHEMIST_RESOURCES,
  ...ARMORER_RESOURCES,
  ...ARTILLERIST_RESOURCES,
  ...BATTLE_SMITH_RESOURCES,
};

export const ARTIFICER_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASS_RESOURCES,

  magical_tinkering: {
    id: "magical_tinkering",
    category: "class_features",
    max: E.max(E.n(1), E.mod("INT")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "magical_tinkering",
        obtainedVia: { via: "class", classId: "artificer" },
      },
    ],

    recharge: [],
    tags: ["utility"],
  },

  infused_items: {
    id: "infused_items",
    category: "class_features",
    max: E.table(E.classLevel("artificer"), {
      1: 2,
      6: 3,
      10: 4,
      14: 5,
      18: 6,
    }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "infused_items",
        obtainedVia: { via: "class", classId: "artificer" },
      },
    ],

    recharge: [],
    tags: ["utility"],
  },

  flash_of_genius: {
    id: "flash_of_genius",
    category: "class_features",
    max: E.max(E.n(1), E.mod("INT")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "flash_of_genius",
        obtainedVia: { via: "class", classId: "artificer" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },

  spell_storing_item_limit: {
    id: "spell_storing_item_limit",
    category: "class_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "spell_storing_item_limit",
        obtainedVia: { via: "class", classId: "artificer" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spells"],
  },
};
