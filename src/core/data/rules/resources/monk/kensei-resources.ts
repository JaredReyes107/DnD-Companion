import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const KENSEI_RESOURCES: Record<string, ResourceTemplate> = {
  deft_strike: {
    id: "deft_strike",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "deft_strike",
        obtainedVia: { via: "subclass", classId: "monk", subclassId: "kensei" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: [],
  },
  unerring_accurracy: {
    id: "unerring_accurracy",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unerring_accurracy",
        obtainedVia: { via: "subclass", classId: "monk", subclassId: "kensei" },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: [],
  },
};
