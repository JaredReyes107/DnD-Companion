import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  benign_transposition: {
    id: "benign_transposition",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "benign_transposition",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "conjuration",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement"],
  },
};
