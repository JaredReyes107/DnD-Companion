import { OptionTemplate } from "@/core/entities/rules/option-template";

// Fighting style options shared across Bard (Swords), Fighter,
// Paladin, and Ranger. Each class defines its own pool with its
// own optionIds subset — that pool membership is what restricts
// which styles a given class can pick, not anything on the option itself.
//
// When a new class pool is added, add its poolId to the relevant
// option's poolIds array here. No other file needs to change.

export const FIGHTING_STYLE_OPTIONS: Record<string, OptionTemplate> = {
  fighting_style_archery: {
    id: "fighting_style_archery",
    poolIds: [
      // "fighter_fighting_styles",
      // "ranger_fighting_styles",
    ],
    tags: ["combat", "fighting-style"],
    grants: [{ type: "modifier", id: "fighting_style_archery_attack" }],
  },

  fighting_style_defense: {
    id: "fighting_style_defense",
    poolIds: [
      "fighting_style_swords",
      // "fighter_fighting_styles",
      // "paladin_fighting_styles",
      // "ranger_fighting_styles",
    ],
    tags: ["defense", "fighting-style"],
    grants: [{ type: "modifier", id: "fighting_style_defense_ac" }],
  },

  fighting_style_dueling: {
    id: "fighting_style_dueling",
    poolIds: [
      "fighting_style_swords",
      // "fighter_fighting_styles",
      // "paladin_fighting_styles",
      // "ranger_fighting_styles",
    ],
    tags: ["combat", "fighting-style"],
    grants: [{ type: "modifier", id: "fighting_style_dueling_damage" }],
  },

  fighting_style_great_weapon_fighting: {
    id: "fighting_style_great_weapon_fighting",
    poolIds: [
      // "fighter_fighting_styles",
      // "paladin_fighting_styles",
    ],
    tags: ["combat", "fighting-style"],
    // Reroll 1s and 2s on damage — dice-roll hook, deferred.
    grants: [],
  },

  fighting_style_protection: {
    id: "fighting_style_protection",
    poolIds: [
      // "fighter_fighting_styles",
      // "paladin_fighting_styles",
    ],
    tags: ["defense", "fighting-style"],
    // Impose disadvantage on attack against ally — affects other
    // actors, deferred.
    grants: [],
  },

  fighting_style_two_weapon_fighting: {
    id: "fighting_style_two_weapon_fighting",
    poolIds: [
      "fighting_style_swords",
      // "fighter_fighting_styles",
      // "ranger_fighting_styles",
    ],
    tags: ["combat", "fighting-style"],
    // Off-hand attack damage bonus — equipment-dependent, deferred.
    grants: [],
  },
};
