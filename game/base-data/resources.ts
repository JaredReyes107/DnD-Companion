import { ResourceTemplate as ResourceTemplate } from "@/game/types/templates/resource-template";

const FEATS: Record<string, ResourceTemplate> = {
  /*luck_points: {
    id: "luck_points",
    label: "Luck Points",
    source: "feat",
    category: "feat",
    scalingType: "fixed-3",
    recharge: "longRest",
    tags: ["utility"],
  },*/
};

export const RESOURCES_MONK: Record<string, ResourceTemplate> = {
  ki_points: {
    id: "ki_points",
    label: "Ki Points",
    sourceId: "monk",
    category: "class-feature",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "mobility"],
  },
};

export const RESOURCES_SORCERER: Record<string, ResourceTemplate> = {
  sorcery_points: {
    id: "sorcery_points",
    label: "Sorcery Points",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    sourceId: "sorcerer",
    category: "class-feature", //For UI
    scalingType: "class-level",
    recharge: "longRest",
    tags: ["combat", "support"],
  },
  luck_points: {
    id: "luck_points",
    label: "Luck Points",
    sourceId: "sorcerer",
    category: "feat",
    scalingType: "fixed:3",
    recharge: "longRest",
    tags: ["utility"],
  },
};

export const BASE_RESOURCES: Record<string, ResourceTemplate> = {
  ...FEATS,
  ...RESOURCES_MONK,
  ...RESOURCES_SORCERER,

  bardic_inspiration: {
    id: "bardic_inspiration",
    label: "Bardic Inspiration",
    sourceId: "class",
    category: "class-feature",
    scalingType: "CHA",
    recharge: "longRest",
    tags: ["combat", "support"],
  },

  rage: {
    id: "rage",
    label: "Rage",
    sourceId: "class",
    category: "class-feature",
    scalingType: "level",
    recharge: "longRest",
    tags: ["combat"],
  },
};
