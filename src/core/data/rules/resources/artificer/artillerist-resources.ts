import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARTILLERIST_RESOURCES: Record<string, ResourceTemplate> = {
  eldritch_cannon_reservoir: {
    id: "eldritch_cannon_reservoir",
    sourceId: "artillerist",
    category: "subclass_features",
    scalingType: "eldritch_cannon",
    recharge: "longRest",
    tags: ["combat", "summoning"],
  },
  eldritch_cannons_limit: {
    id: "eldritch_cannons_limit",
    sourceId: "artillerist",
    category: "subclass_features",
    scalingType: "eldritch_cannon",
    recharge: "none",
    tags: ["combat", "summoning"],
  },
};
