import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLOOM_STALKER_RESOURCES: Record<string, ResourceTemplate> = {
  stalkers_flurry: {
    id: "stalkers_flurry",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
};
