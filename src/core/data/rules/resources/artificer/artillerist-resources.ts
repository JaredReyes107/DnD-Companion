import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARTILLERIST_RESOURCES: Record<string, ResourceTemplate> = {
  eldritch_cannon_reservoir: {
    id: "eldritch_cannon_reservoir",
    category: "subclass_features",
    max: E.table(E.classLevel("artificer", "artillerist"), { 3: 1 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "eldritch_cannon_reservoir",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "artillerist",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "summoning"],
  },
  eldritch_cannons_limit: {
    id: "eldritch_cannons_limit",
    category: "subclass_features",
    max: E.table(E.classLevel("artificer", "artillerist"), { 3: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "eldritch_cannons_limit",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "artillerist",
        },
      },
    ],

    recharge: [],
    tags: ["combat", "summoning"],
  },
};
