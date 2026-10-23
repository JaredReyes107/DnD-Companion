import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  benign_transposition: {
    id: "benign_transposition",
    sourceId: "conjuration",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["movement"],
  },
};
