import { OptionTemplate } from "@/core/entities/rules/option-template";

export const RUNE_KNIGHT_OPTIONS: Record<string, OptionTemplate> = {
  cloud_rune: {
    id: "cloud_rune",
    poolIds: ["runes"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "cloud_rune" },
      { type: "action", id: "cloud_rune" },
    ],
  },
  fire_rune: {
    id: "fire_rune",
    poolIds: ["runes"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "fire_rune" },
      { type: "action", id: "fire_rune" },
    ],
  },
  frost_rune: {
    id: "frost_rune",
    poolIds: ["runes"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "frost_rune" },
      { type: "action", id: "frost_rune" },
    ],
  },
  stone_rune: {
    id: "stone_rune",
    poolIds: ["runes"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "stone_rune" },
      { type: "action", id: "stone_rune" },
    ],
  },
  hill_rune: {
    id: "hill_rune",
    poolIds: ["runes"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "hill_rune" },
      { type: "action", id: "hill_rune" },
    ],
  },
  storm_rune: {
    id: "storm_rune",
    poolIds: ["runes"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "storm_rune" },
      { type: "action", id: "storm_rune" },
    ],
  },
};
