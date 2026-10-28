import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ANCIENTS_RESOURCES: Record<string, ResourceTemplate> = {
  undying_sentinel: {
    id: "undying_sentinel",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "undying_sentinel",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "ancients",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  elder_champion: {
    id: "elder_champion",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "elder_champion",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "ancients",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
