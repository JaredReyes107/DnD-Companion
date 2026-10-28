import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ABERRANT_MIND_RESOURCES: Record<string, ResourceTemplate> = {
  warping_implosion: {
    id: "warping_implosion",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "warping_implosion",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "aberrant_mind",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
