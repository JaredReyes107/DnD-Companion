import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ABERRANT_MIND_RESOURCES: Record<string, ResourceTemplate> = {
  warping_implosion: {
    id: "warping_implosion",
    sourceId: "aberrant_mind",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
