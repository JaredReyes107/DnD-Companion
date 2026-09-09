import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HUNTER_RESOURCES: Record<string, ResourceTemplate> = {
  colossus_slayer: {
    id: "colossus_slayer",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "colossus_slayer",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "hunter",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: [],
  },
  horde_breaker: {
    id: "horde_breaker",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "horde_breaker",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "hunter",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "perRound" }, amount: "full" }],
    tags: [],
  },
};
