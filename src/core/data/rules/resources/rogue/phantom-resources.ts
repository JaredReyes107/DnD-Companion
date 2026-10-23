import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PHANTOM_RESOURCES: Record<string, ResourceTemplate> = {
  wails_from_the_grave: {
    id: "wails_from_the_grave",
    sourceId: "phantom",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["combat", "damage"],
  },

  soul_trinkets: {
    id: "soul_trinkets",
    sourceId: "phantom",
    category: "subclass_features",
    max: E.pb(),
    recharge: "none",
    tags: ["utility", "consumable"],
  },

  ghost_walk: {
    id: "ghost_walk",
    sourceId: "phantom",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["movement", "transformation"],
    // TODO: Fallback: soul_trinkets
  },
};
