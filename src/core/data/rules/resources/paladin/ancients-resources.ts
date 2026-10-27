import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ANCIENTS_RESOURCES: Record<string, ResourceTemplate> = {
  undying_sentinel: {
    id: "undying_sentinel",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  elder_champion: {
    id: "elder_champion",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
