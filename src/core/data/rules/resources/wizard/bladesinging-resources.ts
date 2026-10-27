import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BLADESINGING_RESOURCES: Record<string, ResourceTemplate> = {
  bladesong: {
    id: "bladesong",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "bladesong",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "bladesinging",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "buff"],
  },
};
