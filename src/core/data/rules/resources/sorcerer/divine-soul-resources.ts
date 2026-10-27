import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DIVINE_SOUL_RESOURCES: Record<string, ResourceTemplate> = {
  favored_by_the_gods: {
    id: "favored_by_the_gods",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "favored_by_the_gods",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "divine_soul",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["utility", "bonus", "saving-throw", "attack-roll"],
  },

  empowered_healing: {
    id: "empowered_healing",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "empowered_healing",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "divine_soul",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["healing"],
  },

  unearthly_recovery: {
    id: "unearthly_recovery",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unearthly_recovery",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "divine_soul",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing"],
  },
};
