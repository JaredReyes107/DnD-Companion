import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ILLUSION_RESOURCES: Record<string, ResourceTemplate> = {
  illusory_self: {
    id: "illusory_self",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense"],
  },
};
