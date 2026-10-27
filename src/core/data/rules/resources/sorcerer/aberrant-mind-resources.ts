import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ABERRANT_MIND_RESOURCES: Record<string, ResourceTemplate> = {
  warping_implosion: {
    id: "warping_implosion",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
