import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WATCHERS_RESOURCES: Record<string, ResourceTemplate> = {
  mortal_bulwark: {
    id: "mortal_bulwark",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "mortal_bulwark",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "watchers",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
