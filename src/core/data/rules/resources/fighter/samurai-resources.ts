import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SAMURAI_RESOURCES: Record<string, ResourceTemplate> = {
  fighting_spirit: {
    id: "fighting_spirit",
    sourceId: "samurai",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["combat", "buff"],
  },
  strength_before_death: {
    id: "strength_before_death",
    sourceId: "samurai",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["defense", "last-stand"],
  },
};
