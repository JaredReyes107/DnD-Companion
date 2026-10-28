import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TEMPEST_RESOURCES: Record<string, ResourceTemplate> = {
  wrath_of_the_storm: {
    id: "wrath_of_the_storm",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "wrath_of_the_storm",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "tempest",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "reaction"],
  },
};
