import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PEACE_RESOURCES: Record<string, ResourceTemplate> = {
  emboldening_bond: {
    id: "emboldening_bond",
    sourceId: "peace",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: [],
  },
};
