import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const WILDFIRE_RESOURCES: Record<string, ResourceTemplate> = {
  cauterizing_flames: {
    id: "cauterizing_flames",
    sourceId: "wildfire",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: [],
  },
  blazing_revival: {
    id: "blazing_revival",
    sourceId: "wildfire",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
