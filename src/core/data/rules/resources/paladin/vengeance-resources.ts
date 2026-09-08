import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const VENGEANCE_RESOURCES: Record<string, ResourceTemplate> = {
  avenging_angel: {
    id: "avenging_angel",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "avenging_angel",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "vengeance",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
