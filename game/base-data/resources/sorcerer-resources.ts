import { ResourceTemplate } from "@/game/types/templates/resource-template";

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
};
