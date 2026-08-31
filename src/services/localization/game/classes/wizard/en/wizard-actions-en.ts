import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

export const wizard_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

  arcane_recovery: {
    name: "Arcane Recovery",
    description: `You recover spell slots based on how many charges or 'Arcane Recovery' you spend after a short rest.`,
  },
  cast_spell_mastery_1st: {
    name: "Spell Mastery Level 1",
    description: `You cast your level 1 mastered spell at it's lowest level without expending a spell slot.`,
  },
  cast_spell_mastery_2nd: {
    name: "Spell Mastery Level 2",
    description: `You cast your level 2 mastered spell at it's lowest level without expending a spell slot.`,
  },
  cast_signature_spell_1: {
    name: "Signature Spell 1",
    description: `You cast your first signature spell at it's lowest level without expending a spell slot.`,
  },
  cast_signature_spell_2: {
    name: "Signature Spell 2",
    description: `You cast your second signature spell at it's lowest level without expending a spell slot.`,
  },
};
