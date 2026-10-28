import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const KENSEI_RESOURCES: Record<string, ResourceTemplate> = {
  deft_strike: {
    id: "deft_strike",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "deft_strike",
        obtainedVia: { via: "subclass", classId: "monk", subclassId: "kensei" },
      },
    ],

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
  unerring_accurracy: {
    id: "unerring_accurracy",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unerring_accurracy",
        obtainedVia: { via: "subclass", classId: "monk", subclassId: "kensei" },
      },
    ],

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
};
