import { ResourceTemplate as ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_SORCERER: Record<string, ResourceTemplate> = {
  sorcery_points: {
    id: "sorcery_points",
    label: "Sorcery Points",
    source: "class",
    category: "class-feature",
    scalingType: "level",
    recharge: "longRest",
    tags: ["combat", "support"],
  },
};

export const BASE_RESOURCES: Record<string, ResourceTemplate> = {
  ...RESOURCES_SORCERER,

  bardic_inspiration: {
    id: "bardic_inspiration",
    label: "Bardic Inspiration",
    source: "class",
    category: "class-feature",
    scalingType: "CHA",
    recharge: "longRest",
    tags: ["combat", "support"],
  },

  rage: {
    id: "rage",
    label: "Rage",
    source: "class",
    category: "class-feature",
    scalingType: "level",
    recharge: "longRest",
    tags: ["combat"],
  },
};
