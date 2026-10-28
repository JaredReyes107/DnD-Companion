import { ClassTemplate } from "@/core/entities/rules/class-template";

export const SORCERER: ClassTemplate = {
  id: "sorcerer",

  hitDie: 6,

  primaryAbilities: ["CHA"],
  savingThrows: ["CON", "CHA"],

  spellcastingTemplate: {
    id: "sorcerer_spellcasting",
    ability: "CHA",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "spellcasting_sorcerer",
        source: "class",
        level: 1,
      },
      {
        id: "sorcerous_origin",
        source: "class",
        level: 1,
        tags: ["subclass"],
      },
    ],

    2: [
      {
        id: "font_of_magic",
        source: "class",
        level: 2,
        grants: [
          { type: "resource", id: "sorcery_points" },
          { type: "action", id: "font_of_magic_to_spellslots" },
          { type: "action", id: "font_of_magic_from_spellslots" },
        ],
        tags: ["resource"],
      },
    ],

    3: [
      {
        id: "metamagic",
        source: "class",
        level: 3,
        grants: [{ type: "choice", id: "metamagic" }],
        tags: ["build-choice"],
      },
    ],

    20: [
      {
        id: "sorcerous_restoration",
        source: "class",
        level: 20,
        grants: [{ type: "action", id: "sorcerous_restoration" }],
        tags: ["resource"],
        // TODO: Override. Add resource trigger (4 sp on shortRest)
      },
    ],
  },
};
