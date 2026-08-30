import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HEXBLADE_RESOURCES: Record<string, ResourceTemplate> = {
  hexblades_curse: {
    id: "hexblades_curse",
    sourceId: "hexblade",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat"],
  },

  accursed_specter: {
    id: "accursed_specter",
    sourceId: "hexblade",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat", "summoning"],
  },
};
