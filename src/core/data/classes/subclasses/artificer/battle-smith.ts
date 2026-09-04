import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BATTLE_SMITH: SubclassTemplate = {
  id: "battle_smith",
  classId: "artificer",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "tool_proficiency_battle_smith",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool"],
        // TODO: Grant. Smith's tools with selection fallback
      },
      {
        id: "spells_battle_smith",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "battle_ready",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "combat"],
        // TODO: Grant. Martial weapons proficiency
      },
      {
        id: "steel_defender",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "steel_defender_create" },
          { type: "action", id: "steel_defender_command" },
          { type: "action", id: "steel_defender_revive" },
        ],
        tags: ["combat", "summoning"],
      },
    ],

    5: [
      {
        id: "extra_attack",
        source: "subclass" as const,
        level: 5,
        tags: ["combat"],
        // TODO: Override. Base Attack action.
      },
    ],

    9: [
      {
        id: "arcane_jolt",
        source: "subclass" as const,
        level: 9,
        grants: [
          { type: "action", id: "arcane_jolt_burst" },
          { type: "action", id: "arcane_jolt_heal" },
          { type: "resource", id: "arcane_jolt" },
        ],
        tags: ["combat", "damage", "healing"],
      },
    ],

    15: [
      {
        id: "improved_defender",
        source: "subclass" as const,
        level: 15,
        tags: ["combat", "defense"],
        // TODO: Override. Both arcane_jolts increase to 4d6
        // TODO: Override. Steel Defender:
        // - +2 AC
        // - Override. Reaction: Also inflicts 1d4 + your INT damage
      },
    ],
  },
};
