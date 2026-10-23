import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const OPEN_HAND_RESOURCES: Record<string, ResourceTemplate> = {
  wholeness_of_body: {
    id: "wholeness_of_body",
    sourceId: "open_hand",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
