import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ENCHANTMENT_RESOURCES: Record<string, ResourceTemplate> = {
  hypnotic_gaze: {
    id: "hypnotic_gaze",
    sourceId: "enchantment",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  instinctive_charm: {
    id: "instinctive_charm",
    sourceId: "enchantment",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
