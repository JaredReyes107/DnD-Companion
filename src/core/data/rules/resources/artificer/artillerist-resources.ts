import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARTILLERIST_RESOURCES: Record<string, ResourceTemplate> = {
  eldritch_cannon_reservoir: {
    id: "eldritch_cannon_reservoir",
    sourceId: "artillerist",
    category: "subclass_features",
    max: E.table(E.classLevel("artificer", "artillerist"), { 3: 1 }),
    recharge: "longRest",
    tags: ["combat", "summoning"],
  },
  eldritch_cannons_limit: {
    id: "eldritch_cannons_limit",
    sourceId: "artillerist",
    category: "subclass_features",
    max: E.table(E.classLevel("artificer", "artillerist"), { 3: 1, 15: 2 }),
    recharge: "none",
    tags: ["combat", "summoning"],
  },
};
