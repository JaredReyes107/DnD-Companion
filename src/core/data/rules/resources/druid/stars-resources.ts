import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const STARS_RESOURCES: Record<string, ResourceTemplate> = {
  star_map_guiding_bolt: {
    id: "star_map_guiding_bolt",
    sourceId: "stars",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  cosmic_omen: {
    id: "cosmic_omen",
    sourceId: "stars",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: ["reaction", "support"],
  },
};
