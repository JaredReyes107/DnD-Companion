import { OptionTemplate } from "@/core/entities/rules/option-template";

export const TOTEM_WARRIOR_OPTIONS: Record<string, OptionTemplate> = {
  // TODO: The rage condition on the modifier is deferred (condition system TBD).
  // For now they grant the modifier unconditionally as a known limitation.

  totem_spirit_bear: {
    id: "totem_spirit_bear",
    poolIds: ["totem_spirit"],
    tags: ["passive", "defense", "rage"],
    grants: [{ type: "modifier", id: "totem_bear_resistance" }],
  },

  totem_spirit_eagle: {
    id: "totem_spirit_eagle",
    poolIds: ["totem_spirit"],
    tags: ["passive", "combat", "rage"],
    // Opportunity attacks against you have disadvantage while raging —
    // condition-gated, deferred. No grants until condition system exists.
    grants: [],
  },

  totem_spirit_wolf: {
    id: "totem_spirit_wolf",
    poolIds: ["totem_spirit"],
    tags: ["passive", "support", "rage"],
    // Allies have advantage on melee attacks vs. enemies adjacent to you —
    // affects other actors, not self. Deferred.
    grants: [],
  },

  totem_spirit_elk: {
    id: "totem_spirit_elk",
    poolIds: ["totem_spirit"],
    tags: ["passive", "movement", "rage"],
    grants: [{ type: "modifier", id: "totem_elk_speed" }],
  },

  totem_spirit_tiger: {
    id: "totem_spirit_tiger",
    poolIds: ["totem_spirit"],
    tags: ["passive", "movement", "rage"],
    // 10ft extra movement before melee attack — action-sequencing concern,
    // deferred.
    grants: [],
  },

  // --- Aspect of the Beast (level 6) ---
  // Exploration/utility passives. None currently map to
  // actions/resources/modifiers in the engine. All deferred.

  aspect_bear: {
    id: "aspect_bear",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "utility"],
    grants: [],
    // Carry capacity doubled, advantage on Str checks for pushing/etc.
    // Passive utility, no mechanical hook yet.
  },

  aspect_eagle: {
    id: "aspect_eagle",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "perception"],
    grants: [],
    // See clearly at long range, no disadvantage in dim light.
  },

  aspect_wolf: {
    id: "aspect_wolf",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "utility"],
    grants: [],
    // Track at fast pace, stealthy at normal pace.
  },

  aspect_elk: {
    id: "aspect_elk",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "movement"],
    grants: [
      { type: "modifier", id: "aspect_elk_speed" },
      // +15ft speed out of combat. In-combat condition deferred.
    ],
  },

  aspect_tiger: {
    id: "aspect_tiger",
    poolIds: ["aspect_of_the_beast"],
    tags: ["passive", "utility"],
    grants: [],
    // Proficiency in two skills from a list.
    // Skill proficiency system not yet modeled via grants.
  },

  // --- Totemic Attunement (level 14) ---

  attunement_bear: {
    id: "attunement_bear",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "support", "rage"],
    grants: [],
    // Enemies adjacent to you have disadvantage attacking others — affects
    // other actors, deferred.
  },

  attunement_eagle: {
    id: "attunement_eagle",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "movement", "rage"],
    grants: [],
    // Fly speed while raging — condition-gated movement, deferred.
  },

  attunement_wolf: {
    id: "attunement_wolf",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "combat", "rage"],
    grants: [],
    // Knock prone as bonus action after hitting — action-sequencing, deferred.
  },

  attunement_elk: {
    id: "attunement_elk",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "combat", "rage"],
    grants: [],
    // Charge knockdown — action-sequencing, deferred.
  },

  attunement_tiger: {
    id: "attunement_tiger",
    poolIds: ["totemic_attunement"],
    tags: ["passive", "combat", "rage"],
    grants: [],
    // Attack up to 3 creatures adjacent to you when you use Dash —
    // action-sequencing, deferred.
  },
};
