import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLOOM_STALKER_RESOURCES: Record<string, ResourceTemplate> = {
  stalkers_flurry: {
    id: "stalkers_flurry",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "stalkers_flurry",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "gloom_stalker",
        },
      },
    ],

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
};
