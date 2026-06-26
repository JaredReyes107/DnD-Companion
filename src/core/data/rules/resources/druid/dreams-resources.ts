import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DREAMS_RESOURCES: Record<string, ResourceTemplate> = {
  balm_of_the_summer_court: {
    id: "balm_of_the_summer_court",
    sourceId: "dreams",
    category: "subclass_features",
    scalingType: "class-level",
    recharge: "longRest",
    tags: ["healing", "support"],
  },
  hidden_paths: {
    id: "hidden_paths",
    sourceId: "dreams",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: ["movement", "support"],
  },
  walker_in_dreams: {
    id: "walker_in_dreams",
    sourceId: "dreams",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["spellcasting", "utility"],
  },
};
