import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ELDRITCH_KNIGHT: SubclassTemplate = {
  id: "eldritch_knight",
  classId: "fighter",

  spellcastingTemplate: {
    id: "eldritch_knight_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "third",
  },

  featuresByLevel: {
    3: [
      {
        id: "spellcasting",
        source: "subclass" as const,
        level: 3,
        tags: ["spellcasting"],
      },
      {
        id: "weapon_bond",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "weapon_bond" }],
        tags: [],
      },
    ],

    7: [
      {
        id: "war_magic",
        source: "subclass" as const,
        level: 7,
        grants: [{ type: "action", id: "war_magic" }],
        tags: [],
      },
    ],

    10: [
      {
        id: "eldritch_strike",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "eldritch_strike" }],
        tags: [],
      },
    ],

    15: [
      {
        id: "arcane_charge",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "arcane_charge" }],
        tags: [],
      },
    ],

    18: [
      {
        id: "improved_war_magic",
        source: "subclass" as const,
        level: 18,
        grants: [{ type: "action", id: "improved_war_magic" }],
        tags: [],
      },
    ],
  },
};
