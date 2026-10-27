import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const INQUISITIVE_RESOURCES: Record<string, ResourceTemplate> = {
  unerring_eye: {
    id: "unerring_eye",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unerring_eye",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "inquisitive",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
