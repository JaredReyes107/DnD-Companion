import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const CELESTIAL_RESOURCES: Record<string, ResourceTemplate> = {
  healing_light_dice: {
    id: "healing_light_dice",
    sourceId: "celestial",
    category: "subclass_features",
    max: E.add(E.classLevel("warlock"), E.n(1)),
    recharge: "longRest",
    tags: ["healing"],
  },

  searing_vengeance: {
    id: "searing_vengeance",
    sourceId: "celestial",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["combat", "healing"],
  },
};
