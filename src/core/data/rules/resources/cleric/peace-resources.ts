import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PEACE_RESOURCES: Record<string, ResourceTemplate> = {
  emboldening_bond: {
    id: "emboldening_bond",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "emboldening_bond",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "peace",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
