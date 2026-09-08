import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SWASHBUCKLER_RESOURCES: Record<string, ResourceTemplate> = {
  master_duelist: {
    id: "master_duelist",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "master_duelist",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "swashbuckler",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
