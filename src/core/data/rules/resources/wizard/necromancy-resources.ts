import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const NECROMANCY_RESOURCES: Record<string, ResourceTemplate> = {
  grim_harvest: {
    id: "grim_harvest",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "grim_harvest",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "necromancy",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["healing"],
  },
};
