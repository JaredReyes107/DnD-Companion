import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MONSTER_SLAYER_RESOURCES: Record<string, ResourceTemplate> = {
  hunters_sense: {
    id: "hunters_sense",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "hunters_sense",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "monster_slayer",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  magic_users_nemesis: {
    id: "magic_users_nemesis",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "magic_users_nemesis",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "monster_slayer",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
