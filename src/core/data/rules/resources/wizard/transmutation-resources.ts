import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TRANSMUTATION_RESOURCES: Record<string, ResourceTemplate> = {
  shapechanger: {
    id: "shapechanger",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "shapechanger",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "transmutation",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["spells", "transformation"],
  },
};
