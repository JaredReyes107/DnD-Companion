import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const NECROMANCY_RESOURCES: Record<string, ResourceTemplate> = {
  grim_harvest: {
    id: "grim_harvest",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["healing"],
  },
};
