import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const FIEND: SubclassTemplate = {
  id: "fiend",
  classId: "warlock",
  source: "Player's Handbook",

  featuresByLevel: {
    1: [
      {
        id: "fiend_expanded_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "dark_ones_blessing",
        source: "subclass" as const,
        level: 1,
        tags: ["combat", "defense"],
        // Automatic temp HP on reducing a hostile creature to 0 HP —
        // triggered by a specific situation, included per your rule
        // even with no player choice in the moment.
        grants: [{ type: "action", id: "dark_ones_blessing" }],
      },
    ],

    6: [
      {
        id: "dark_ones_own_luck",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "dark_ones_own_luck" },
          { type: "resource", id: "dark_ones_own_luck" },
        ],
        tags: ["utility"],
      },
    ],

    10: [
      {
        id: "fiendish_resilience",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "fiendish_resilience" }],
        tags: ["defense", "resistance", "build-choice"],
        // Choice made at each short/long rest, not a permanent build
        // choice — same re-choose-every-activation shape flagged for
        // Gathered Swarm, modeled as a plain action with no dedicated
        // ChoicePoolTemplate for the same reason.
      },
    ],

    14: [
      {
        id: "hurl_through_hell",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "hurl_through_hell" },
          { type: "resource", id: "hurl_through_hell" },
        ],
        tags: ["combat", "damage", "control"],
      },
    ],
  },
};
