import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ALCHEMIST_RESOURCES: Record<string, ResourceTemplate> = {
  experimental_elixir_fabricate: {
    id: "experimental_elixir_fabricate",
    sourceId: "alchemist",
    category: "subclass_features",
    scalingType: "experimental-elixir",
    recharge: "longRest",
    tags: ["utility"],
  },

  cast_lesser_restoration_free: {
    id: "cast_lesser_restoration_free",
    sourceId: "alchemist",
    category: "subclass_features",
    scalingType: "INT",
    recharge: "shortRest",
    tags: ["healing"],
  },

  cast_greater_restoration_free: {
    id: "cast_greater_restoration_free",
    sourceId: "alchemist",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["healing"],
  },

  cast_heal_free: {
    id: "cast_heal_free",
    sourceId: "alchemist",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["healing"],
  },
};
