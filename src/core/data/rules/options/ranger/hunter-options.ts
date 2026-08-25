import { OptionTemplate } from "@/core/entities/rules/option-template";

export const HUNTER_OPTIONS: Record<string, OptionTemplate> = {
  // --- Hunter's Prey (3rd) ---
  colossus_slayer: {
    id: "colossus_slayer",
    poolIds: ["hunters_prey"],
    grants: [
      { type: "resource", id: "colossus_slayer" },
      { type: "action", id: "colossus_slayer" },
    ],
    tags: ["combat", "damage", "passive"],
  },
  giant_killer: {
    id: "giant_killer",
    poolIds: ["hunters_prey"],
    tags: ["combat", "reaction"],
    grants: [{ type: "action", id: "giant_killer" }],
  },
  horde_breaker: {
    id: "horde_breaker",
    poolIds: ["hunters_prey"],
    tags: ["combat"],
    grants: [
      { type: "resource", id: "horde_breaker" },
      { type: "action", id: "horde_breaker" },
    ],
  },

  // --- Defensive Tactics (7th) ---
  escape_the_horde: {
    id: "escape_the_horde",
    poolIds: ["defensive_tactics"],
    tags: ["passive", "defense"],
    grants: [],
  },
  multiattack_defense: {
    id: "multiattack_defense",
    poolIds: ["defensive_tactics"],
    grants: [
      //TODO: +4 AC after enemy hits, but only against that enemy
    ],
    tags: ["passive", "defense"],
  },
  steel_will: {
    id: "steel_will",
    poolIds: ["defensive_tactics"],
    tags: ["passive", "defense"],
    grants: [],
  },

  // --- Multiattack (11th) ---
  volley: {
    id: "volley",
    poolIds: ["multiattack"],
    tags: ["combat", "damage", "aoe", "ranged"],
    grants: [{ type: "action", id: "volley" }],
  },
  whirlwind_attack: {
    id: "whirlwind_attack",
    poolIds: ["multiattack"],
    tags: ["combat", "damage", "aoe", "melee"],
    grants: [{ type: "action", id: "whirlwind_attack" }],
  },

  // --- Superior Hunter's Defense (15th) ---
  evasion_hunter: {
    id: "evasion_hunter",
    poolIds: ["superior_hunters_defense"],
    tags: ["passive", "defense"],
    grants: [],
  },
  stand_against_the_tide: {
    id: "stand_against_the_tide",
    poolIds: ["superior_hunters_defense"],
    tags: ["reaction", "defense", "control"],
    grants: [{ type: "action", id: "stand_against_the_tide" }],
  },
  uncanny_dodge_hunter: {
    id: "uncanny_dodge_hunter",
    poolIds: ["superior_hunters_defense"],
    tags: ["reaction", "defense"],
    grants: [{ type: "action", id: "uncanny_dodge_hunter" }],
  },
};
