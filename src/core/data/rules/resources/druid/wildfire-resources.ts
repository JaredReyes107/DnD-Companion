import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const WILDFIRE_RESOURCES: Record<string, ResourceTemplate> = {
  cauterizing_flames: {
    id: "cauterizing_flames",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "cauterizing_flames",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "wildfire",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  blazing_revival: {
    id: "blazing_revival",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "blazing_revival",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "wildfire",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
