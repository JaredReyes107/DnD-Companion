import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TRANSMUTATION_RESOURCES: Record<string, ResourceTemplate> = {
  shapechanger: {
    id: "shapechanger",
    sourceId: "transmutation",
    category: "subclass_features",
    max: E.n(1),
    recharge: "shortRest",
    tags: ["spells", "transformation"],
  },
};
