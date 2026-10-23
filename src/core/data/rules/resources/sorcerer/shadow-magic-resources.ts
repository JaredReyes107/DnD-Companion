import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHADOW_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  strength_of_the_grave: {
    id: "strength_of_the_grave",
    sourceId: "shadow_magic",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["defense"],
  },
};
