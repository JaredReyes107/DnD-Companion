import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_ARCHER_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_shot: {
    id: "arcane_shot",
    category: "subclass_features",
    max: E.n(2),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_shot",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "arcane_archer",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
