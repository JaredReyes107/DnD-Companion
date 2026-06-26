import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_STARS: Record<string, ResourceTemplate> = {
  star_map_guiding_bolt: {
    id: "star_map_guiding_bolt",
    sourceId: "stars",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  cosmic_omen: {
    id: "cosmic_omen",
    sourceId: "stars",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: ["reaction", "support"],
  },
};