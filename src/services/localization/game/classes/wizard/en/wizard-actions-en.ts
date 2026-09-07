import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_actions_en } from "../subclasses/abjuration/en/abjuration-actions-en";
import { conjuration_actions_en } from "../subclasses/conjuration/en/conjuration-actions-en";
import { divination_actions_en } from "../subclasses/divination/en/divination-actions-en";
import { enchantment_actions_en } from "../subclasses/enchantment/en/enchantment-actions-en";
import { evocation_actions_en } from "../subclasses/evocation/en/evocation-actions-en";
import { illusion_actions_en } from "../subclasses/illusion/en/illusion-actions-en";
import { necromancy_actions_en } from "../subclasses/necromancy/en/necromancy-actions-en";
import { transmutation_actions_en } from "../subclasses/transmutation/en/transmutation-actions-en";

import { war_magic_actions_en } from "../subclasses/war-magic/en/war-magic-actions-en";

import { scribes_actions_en } from "../subclasses/scribes/en/scribes-actions-en";
import { bladesinging_actions_en } from "../subclasses/bladesinging/en/bladesinging-actions-en";

export const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...abjuration_actions_en,
  ...conjuration_actions_en,
  ...divination_actions_en,
  ...enchantment_actions_en,
  ...evocation_actions_en,
  ...illusion_actions_en,
  ...necromancy_actions_en,
  ...transmutation_actions_en,

  // XGE
  ...war_magic_actions_en,

  // TCE
  ...bladesinging_actions_en,
  ...scribes_actions_en,
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
  replace_spell_mastery: {
    name: "Replace Spell Mastery",
    description: `You dedicate 8 hours and replace any of your Spell Mastery spells for any other spell on your spellbook of the same level.`,
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
