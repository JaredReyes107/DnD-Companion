import { ClassTemplate } from "@/core/entities/rules/class-template";

export const WIZARD: ClassTemplate = {
  id: "wizard",

  hitDie: 6,

  primaryAbilities: ["INT"],
  savingThrows: ["INT", "WIS"],

  spellcastingTemplate: {
    id: "wizard_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "spellcasting_wizard",
        source: "class" as const,
        level: 1,
        grants: [{ type: "resource", id: "spell_slots" }],
        tags: ["spells", "spellcasting"],
      },
      {
        id: "arcane_recovery",
        source: "class" as const,
        level: 1,
        grants: [
          { type: "action", id: "arcane_recovery" },
          { type: "resource", id: "arcane_recovery" },
        ],
        tags: ["utility"],
      },
    ],

    2: [
      {
        id: "arcane_tradition",
        source: "class" as const,
        level: 2,
        grants: [{ type: "choice", id: "arcane_tradition" }],
        tags: ["build-choice", "subclass"],
      },
    ],

    18: [
      {
        id: "spell_mastery",
        source: "class" as const,
        level: 18,
        grants: [
          { type: "choice", id: "spell_mastery_1" },
          { type: "choice", id: "spell_mastery_2" },
          { type: "action", id: "cast_spell_mastery_1st" },
          { type: "action", id: "cast_spell_mastery_2nd" },
          { type: "action", id: "replace_spell_mastery" },
        ],
        tags: ["spells", "spellcasting", "build-choice"],
      },
    ],

    20: [
      {
        id: "signature_spells",
        source: "class" as const,
        level: 20,
        grants: [
          { type: "choice", id: "signature_spells" },
          { type: "action", id: "cast_signature_spell_1" },
          { type: "action", id: "cast_signature_spell_2" },
          { type: "resource", id: "signature_spell_1" },
          { type: "resource", id: "signature_spell_2" },
        ],
        tags: ["spells", "spellcasting", "build-choice"],
      },
    ],
  },
};
