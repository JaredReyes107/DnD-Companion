import { OptionTemplate } from "@/core/entities/rules/option-template";
import { P } from "@/core/entities/rules/predicate/predicate";

export const RUNE_KNIGHT_OPTIONS: Record<string, OptionTemplate> = {
  cloud_rune: {
    id: "cloud_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "utility"],
    grants: [
      { type: "resource", id: "cloud_rune" },
      { type: "action", id: "cloud_rune" }, // Active: reaction to redirect an attack (not modeled)
      {
        type: "advantage",
        nodeId: "sleight_of_hand",
        polarity: "advantage",
        condition: P.resourceAtLeast("cloud_rune", 1),
      },
      {
        type: "advantage",
        nodeId: "deception",
        polarity: "advantage",
        condition: P.resourceAtLeast("cloud_rune", 1),
      },
    ],
  },

  fire_rune: {
    id: "fire_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "utility"],
    // Passive: double PB on proficient tool checks while charge > 0 (modifier)
    grants: [
      { type: "resource", id: "fire_rune" },
      { type: "action", id: "fire_rune" }, // Active: reaction to redirect an attack (not modeled)
      { type: "modifier", id: "fire_rune_tool_pb" },
    ],
  },

  frost_rune: {
    id: "frost_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "exploration"],
    grants: [
      { type: "resource", id: "frost_rune" },
      { type: "action", id: "frost_rune" },
      {
        type: "advantage",
        nodeId: "animal_handling",
        polarity: "advantage",
        condition: P.resourceAtLeast("frost_rune", 1),
      },
      {
        type: "advantage",
        nodeId: "intimidation",
        polarity: "advantage",
        condition: P.resourceAtLeast("frost_rune", 1),
      },
    ],
  },

  stone_rune: {
    id: "stone_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "roleplay"],
    grants: [
      { type: "resource", id: "stone_rune" },
      { type: "action", id: "stone_rune" }, // Active: not modeled. Charm creature
      {
        type: "advantage",
        nodeId: "insight",
        polarity: "advantage",
        condition: P.resourceAtLeast("stone_rune", 1),
      },
      // TODO: Sense. Darkvision 120 ft.
    ],
  },

  hill_rune: {
    id: "hill_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat"],
    eligibility: P.minClassLevel("fighter", 7),
    grants: [
      { type: "resource", id: "hill_rune" },
      { type: "action", id: "hill_rune" }, // TODO: Resistance. BPS, 1 min.
      // Not modeled passives: adv on saves vs. poisoned
      // TODO: Resistance. Poison damaga
    ],
  },

  storm_rune: {
    id: "storm_rune",
    poolIds: ["rune_knight_runes"],
    tags: ["combat", "exploration", "roleplay"],
    eligibility: P.minClassLevel("fighter", 7),
    grants: [
      { type: "resource", id: "storm_rune" },
      { type: "action", id: "storm_rune" }, // Active: Grant status that unlocks reaction
      { type: "action", id: "storm_rune_foresight" }, // Active: grant adv/disadv to rolls within 60 ft
      {
        type: "advantage",
        nodeId: "arcana",
        polarity: "advantage",
        condition: P.resourceAtLeast("storm_rune", 1),
      },
      // Passive: not modeled can't be surprised
    ],
  },
};
