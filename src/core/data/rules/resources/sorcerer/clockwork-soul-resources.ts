import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CLOCKWORK_SOUL_RESOURCES: Record<string, ResourceTemplate> = {
  restore_balance: {
    id: "restore_balance",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "restore_balance",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "clockwork_soul",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  trance_of_order: {
    id: "trance_of_order",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "trance_of_order",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "clockwork_soul",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  clockwork_cavalcade: {
    id: "clockwork_cavalcade",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "clockwork_cavalcade",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "clockwork_soul",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
