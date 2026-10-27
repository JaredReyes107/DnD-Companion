import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ILLUSION_RESOURCES: Record<string, ResourceTemplate> = {
  illusory_self: {
    id: "illusory_self",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "illusory_self",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "illusion",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense"],
  },
};
