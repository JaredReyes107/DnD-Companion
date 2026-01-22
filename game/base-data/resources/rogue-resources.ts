import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_ROGUE: Record<string, ResourceTemplate> = {
  stroke_of_luck: {
    id: "stroke_of_luck",
    label: "Stroke of Luck",
    sourceId: "rogue",
    category: "class-feature",
    scalingType: "class-level",
    recharge: "shortRest",
    tags: ["combat", "utility"],
  },
};
