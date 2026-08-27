import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ABERRANT_MIND: SubclassTemplate = {
  id: "aberrant_mind",
  classId: "sorcerer",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    1: [
      {
        id: "psionic_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "telepathic_speech",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "telepathic_speech" }],
        tags: ["utility", "communication", "bonus-action"],
      },
    ],

    6: [
      {
        id: "psionic_sorcery",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "psionic_sorcery" }],
        tags: ["spellcasting"],
      },
      {
        id: "psychic_defenses",
        source: "subclass" as const,
        level: 6,
        tags: ["defense", "resistance"],
      },
    ],

    14: [
      {
        id: "revelation_in_flesh",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "revelation_in_flesh" }],
        tags: ["transformation", "utility", "bonus-action"],
      },
    ],

    18: [
      {
        id: "warping_implosion",
        source: "subclass" as const,
        level: 18,
        grants: [
          { type: "action", id: "warping_implosion" },
          { type: "resource", id: "warping_implosion" },
        ],
        tags: ["combat", "damage", "movement", "aoe"],
      },
    ],
  },
};
