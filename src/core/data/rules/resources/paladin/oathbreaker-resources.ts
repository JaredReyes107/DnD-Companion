import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const OATHBREAKER_RESOURCES: Record<string, ResourceTemplate> = {
  dread_lord: {
    id: "dread_lord",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "DMG" },
    grantors: [
      {
        system: "feature",
        featureId: "dread_lord",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "oathbreaker",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
