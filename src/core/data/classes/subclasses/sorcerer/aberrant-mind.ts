import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ABERRANT_MIND: SubclassTemplate = {
  id: "aberrant_mind",
  classId: "sorcerer",
  source: "Tasha's Cauldron of Everything",
  progression: {
    1: [
      "sorcerer.aberrant_mind.psionic_spells",
      "sorcerer.aberrant_mind.telepathic_speech",
    ],
    6: [
      "sorcerer.aberrant_mind.psionic_sorcery",
      "sorcerer.aberrant_mind.psychic_defenses",
    ],
    14: ["sorcerer.aberrant_mind.revelation_in_flesh"],
    18: ["sorcerer.aberrant_mind.warping_implosion"],
  },

  featuresByLevel: {
    1: [
      {
        id: "sorcerer.aberrant_mind.psionic_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "sorcerer.aberrant_mind.telepathic_speech",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "telepathic_speech" }],
        tags: ["utility", "communication", "bonus-action"],
      },
    ],

    6: [
      {
        id: "sorcerer.aberrant_mind.psionic_sorcery",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "psionic_sorcery" }],
        tags: ["spellcasting"],
      },
      {
        id: "sorcerer.aberrant_mind.psychic_defenses",
        source: "subclass" as const,
        level: 6,
        tags: ["defense", "resistance"],
      },
    ],

    14: [
      {
        id: "sorcerer.aberrant_mind.revelation_in_flesh",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "revelation_in_flesh" }],
        tags: ["transformation", "utility", "bonus-action"],
      },
    ],

    18: [
      {
        id: "sorcerer.aberrant_mind.warping_implosion",
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
