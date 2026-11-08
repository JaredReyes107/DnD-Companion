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
  progression: {
    3: [
      "rogue.arcane_trickster.spellcasting_arcane_trickster",
      "rogue.arcane_trickster.mage_hand_legerdemain",
    ],
    9: ["rogue.arcane_trickster.magical_ambush"],
    13: ["rogue.arcane_trickster.versatile_trickster"],
    17: ["rogue.arcane_trickster.spell_thief"],
  },

  featuresByLevel: {
    3: [
      {
        id: "rogue.arcane_trickster.spellcasting_arcane_trickster",
        source: "subclass" as const,
        level: 3,
        tags: ["spellcasting"],
      },
      {
        id: "rogue.arcane_trickster.mage_hand_legerdemain",
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
        id: "rogue.arcane_trickster.magical_ambush",
        source: "subclass" as const,
        level: 9,
        tags: ["spells", "disadvantage"],
      },
    ],

    13: [
      {
        id: "rogue.arcane_trickster.versatile_trickster",
        source: "subclass" as const,
        level: 13,
        tags: ["combat", "advantage", "bonus-action"],
      },
    ],

    17: [
      {
        id: "rogue.arcane_trickster.spell_thief",
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
