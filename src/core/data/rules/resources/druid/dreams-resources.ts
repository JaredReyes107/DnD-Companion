import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const DREAMS_RESOURCES: Record<string, ResourceTemplate> = {
  balm_of_the_summer_court: {
    id: "balm_of_the_summer_court",
    sourceId: "dreams",
    category: "subclass_features",
    max: E.classLevel("druid"),
    recharge: "longRest",
    tags: ["healing", "support"],
  },
  hidden_paths: {
    id: "hidden_paths",
    sourceId: "dreams",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: ["movement", "support"],
  },
  walker_in_dreams: {
    id: "walker_in_dreams",
    sourceId: "dreams",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["spellcasting", "utility"],
  },
};
