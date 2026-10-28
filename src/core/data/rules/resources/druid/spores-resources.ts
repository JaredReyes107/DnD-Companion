import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SPORES_RESOURCES: Record<string, ResourceTemplate> = {
  fungal_infestation: {
    id: "fungal_infestation",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "fungal_infestation",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "spores",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
