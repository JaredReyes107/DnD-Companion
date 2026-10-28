import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HUNTER_RESOURCES: Record<string, ResourceTemplate> = {
  colossus_slayer: {
    id: "colossus_slayer",
    category: "subclass_features",
    max: E.n(1),
    // Any turn

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

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: [],
  },
  horde_breaker: {
    id: "horde_breaker",
    category: "subclass_features",
    max: E.n(1),
    // Own turn

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

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
};
