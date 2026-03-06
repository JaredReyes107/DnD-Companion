import { ResourceTemplate } from "@/game/data/templates/resource-template";

export const RESOURCES_BARD: Record<string, ResourceTemplate> = {
  bardic_inspiration: {
    id: "bardic_inspiration",
    label: "Bardic Inspiration",
    sourceId: "bard",
    category: "class_features",
    scalingType: "CHA",
    recharge: "longRest",
    tags: [
      "combat",
      "utility",
      "ability-checks",
      "attack-rolls",
      "saving-throws",
    ],
  },
};
