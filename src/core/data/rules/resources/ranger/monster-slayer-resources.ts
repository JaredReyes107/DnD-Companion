import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MONSTER_SLAYER_RESOURCES: Record<string, ResourceTemplate> = {
  hunters_sense: {
    id: "hunters_sense",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  magic_users_nemesis: {
    id: "magic_users_nemesis",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
