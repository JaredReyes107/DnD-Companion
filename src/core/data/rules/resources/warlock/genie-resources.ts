import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GENIE_RESOURCES: Record<string, ResourceTemplate> = {
  bottled_respite: {
    id: "bottled_respite",
    sourceId: "genie",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["utility"],
  },

  genies_wrath: {
    id: "genies_wrath",
    sourceId: "genie",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perRound",
    tags: ["combat", "damage"],
  },

  elemental_gift_flight: {
    id: "elemental_gift_flight",
    sourceId: "genie",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["movement"],
  },

  limited_wish: {
    id: "limited_wish",
    sourceId: "genie",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest", // TODO: 1d4 long rests
    tags: ["spells"],
  },
};
