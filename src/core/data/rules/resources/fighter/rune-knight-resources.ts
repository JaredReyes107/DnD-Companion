import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RUNE_KNIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  giants_might: {
    id: "giants_might",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: [],
  },
  runic_shield: {
    id: "runic_shield",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: [],
  },

  // Rune options
  cloud_rune: {
    id: "cloud_rune",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),
    recharge: "shortRest",
    tags: [],
  },
  fire_rune: {
    id: "fire_rune",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),
    recharge: "shortRest",
    tags: [],
  },
  frost_rune: {
    id: "frost_rune",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),
    recharge: "shortRest",
    tags: [],
  },
  stone_rune: {
    id: "stone_rune",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),
    recharge: "shortRest",
    tags: [],
  },
  hill_rune: {
    id: "hill_rune",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),
    recharge: "shortRest",
    tags: [],
  },
  storm_rune: {
    id: "storm_rune",
    sourceId: "rune_knight",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),
    recharge: "shortRest",
    tags: [],
  },
};
