import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TEMPEST_RESOURCES: Record<string, ResourceTemplate> = {
  wrath_of_the_storm: {
    id: "wrath_of_the_storm",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "wrath_of_the_storm",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "tempest",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "reaction"],
  },
};
