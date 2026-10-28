import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const LIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  warding_flare: {
    id: "warding_flare",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "warding_flare",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "light",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
