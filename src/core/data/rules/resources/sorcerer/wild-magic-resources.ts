import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILD_MAGIC_SORCERER_RESOURCES: Record<string, ResourceTemplate> = {
  tides_of_chaos: {
    id: "tides_of_chaos",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "tides_of_chaos",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "wild_magic",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
