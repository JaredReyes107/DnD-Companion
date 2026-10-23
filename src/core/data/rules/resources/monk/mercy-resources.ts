import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MERCY_RESOURCES: Record<string, ResourceTemplate> = {
  hand_of_ultimate_mercy: {
    id: "hand_of_ultimate_mercy",
    sourceId: "mercy",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
