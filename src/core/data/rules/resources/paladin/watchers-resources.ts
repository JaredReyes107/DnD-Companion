import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WATCHERS_RESOURCES: Record<string, ResourceTemplate> = {
  mortal_bulwark: {
    id: "mortal_bulwark",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "mortal_bulwark",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "watchers",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
