import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const OATHBREAKER_RESOURCES: Record<string, ResourceTemplate> = {
  dread_lord: {
    id: "dread_lord",
    category: "subclass_features",
    origin: { book: "DMG" },
    grantors: [
      {
        system: "feature",
        featureId: "dread_lord",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "oathbreaker",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
