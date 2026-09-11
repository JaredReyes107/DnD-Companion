import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DEVOTION_RESOURCES: Record<string, ResourceTemplate> = {
  holy_nimbus: {
    id: "holy_nimbus",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "holy_nimbus",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "devotion",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
