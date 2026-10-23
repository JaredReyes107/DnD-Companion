import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ILLUSION_RESOURCES: Record<string, ResourceTemplate> = {
  illusory_self: {
    id: "illusory_self",
    sourceId: "illusion",
    category: "subclass_features",
    max: E.n(1),
    recharge: "shortRest",
    tags: ["defense"],
  },
};
