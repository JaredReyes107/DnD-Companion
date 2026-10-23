import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONQUEST_RESOURCES: Record<string, ResourceTemplate> = {
  invincible_conqueror: {
    id: "invincible_conqueror",
    sourceId: "conquest",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};
