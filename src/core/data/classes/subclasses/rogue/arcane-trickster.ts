import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARCANE_TRICKSTER: SubclassTemplate = {
  id: "arcane_trickster",
  classId: "rogue",
  source: "Player's Handbook",

  spellcastingTemplate: {
    id: "arcane_trickster_spellcasting",
    kind: "standard",
    progression: "third",
    ability: "INT",
  },

  featuresByLevel: {
    3: [
      {
        id: "spellcasting_arcane_trickster",
        source: "subclass" as const,
        level: 3,
        tags: ["spellcasting"],
      },
      {
        id: "mage_hand_legerdemain",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "mage_hand" }],
        tags: ["utility", "spells"],
        //TODO: Grant actual 'Mage Hand' spell. Modify/Override/Append to spell
        //TODO: Use as bonus action
      },
    ],

    9: [
      {
        id: "magical_ambush",
        source: "subclass" as const,
        level: 9,
        tags: ["spells", "disadvantage"],
      },
    ],

    13: [
      {
        id: "versatile_trickster",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "versatile_trickster" }],
        tags: ["combat", "advantage", "bonus-action"],
      },
    ],

    17: [
      {
        id: "spell_thief",
        source: "subclass" as const,
        level: 17,
        grants: [
          { type: "action", id: "spell_thief" },
          { type: "resource", id: "spell_thief" },
        ],
        tags: ["combat", "control", "reaction", "spells"],
      },
    ],
  },
};
