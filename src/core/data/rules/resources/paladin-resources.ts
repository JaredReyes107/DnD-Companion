import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_PALADIN: Record<string, ResourceTemplate> = {
  divine_sense: {
    id: "divine_sense",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "CHA:+1",
    recharge: "longRest",
    tags: ["combat", "healing"],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "class-level:*5",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },
  cleansing_touch: {
    id: "cleansing_touch",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "CHA",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },
};
