import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLAMOUR_RESOURCES: Record<string, ResourceTemplate> = {
  mantle_of_majesty: {
    id: "mantle_of_majesty",
    sourceId: "glamour",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["combat", "support"],
  },
  enthralling_performance: {
    id: "enthralling_performance",
    sourceId: "glamour",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["roleplay"],
  },
  unbreakable_majesty: {
    id: "unbreakable_majesty",
    sourceId: "glamour",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["combat"],
  },
};
