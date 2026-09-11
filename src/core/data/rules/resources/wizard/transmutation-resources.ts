import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TRANSMUTATION_RESOURCES: Record<string, ResourceTemplate> = {
  shapechanger: {
    id: "shapechanger",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "shapechanger",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "transmutation",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["spells", "transformation"],
  },
};
