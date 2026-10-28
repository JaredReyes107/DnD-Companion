import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SWASHBUCKLER_RESOURCES: Record<string, ResourceTemplate> = {
  master_duelist: {
    id: "master_duelist",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
