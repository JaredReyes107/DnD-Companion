import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_ARCHER_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_shot: {
    id: "arcane_shot",
    sourceId: "arcane_archer",
    category: "subclass_features",
    max: E.n(2),
    recharge: "shortRest",
    tags: [],
  },
};
