import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  benign_transposition: {
    id: "benign_transposition",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement"],
  },
};
