import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILD_MAGIC_SORCERER_RESOURCES: Record<string, ResourceTemplate> = {
  tides_of_chaos: {
    id: "tides_of_chaos",
    sourceId: "wild_magic_sorcerer",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
