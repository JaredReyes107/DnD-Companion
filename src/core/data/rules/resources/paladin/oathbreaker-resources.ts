import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const OATHBREAKER_RESOURCES: Record<string, ResourceTemplate> = {
  dread_lord: {
    id: "dread_lord",
    sourceId: "oathbreaker",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
