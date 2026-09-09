import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const EVOCATION_RESOURCES: Record<string, ResourceTemplate> = {
  overchannel: {
    id: "overchannel",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "overchannel",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "evocation",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spells", "damage"],
  },
};
