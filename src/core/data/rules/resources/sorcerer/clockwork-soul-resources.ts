import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CLOCKWORK_SOUL_RESOURCES: Record<string, ResourceTemplate> = {
  restore_balance: {
    id: "restore_balance",
    category: "subclass_features",
    max: E.pb(),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  trance_of_order: {
    id: "trance_of_order",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  clockwork_cavalcade: {
    id: "clockwork_cavalcade",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
