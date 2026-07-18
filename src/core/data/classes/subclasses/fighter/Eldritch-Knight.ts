import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

/**
 * Eldritch Knight — Fighter subclass (Player's Handbook)
 */
export const ELDRITCH_KNIGHT: SubclassTemplate = {
  id: "eldritch_knight",
  classId: "fighter",
  source: "Players Handbook",

  spellcastingTemplate: {
    id: "eldritch_knight_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "third",
  },

  featuresByLevel: {
    3: [
      {
        id: "weapon_bond",
        source: "subclass",
        level: 3,
        grants: [{ type: "action", id: "summon_bonded_weapon" }],
        tags: ["action"],
      },
    ],

    7: [
      {
        id: "war_magic",
        source: "subclass",
        level: 7,
        grants: [{ type: "action", id: "war_magic" }],
        tags: ["combat"],
      },
    ],

    10: [
      {
        id: "eldritch_strike",
        source: "subclass",
        level: 10,
        tags: ["passive"],
      },
    ],

    15: [
      {
        id: "arcane_charge",
        source: "subclass",
        level: 15,
        // TODO: Modify Action Surge Behaviour or tooltip
        tags: ["combat"],
      },
    ],

    18: [
      {
        id: "improved_war_magic",
        source: "subclass",
        level: 18,
        //TODO: Replace the original War Magic Action or just remove the condition of canntrip (spell lv = 0)
        tags: ["action", "combat"],
      },
    ],
  },
};
