import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_resources_en } from "../subclasses/abjuration/en/abjuration-resources-en";
import { conjuration_resources_en } from "../subclasses/conjuration/en/conjuration-resources-en";
import { divination_resources_en } from "../subclasses/divination/en/divination-resources-en";
import { enchantment_resources_en } from "../subclasses/enchantment/en/enchantment-resources-en";
import { evocation_resources_en } from "../subclasses/evocation/en/evocation-resources-en";
import { illusion_resources_en } from "../subclasses/illusion/en/illusion-resources-en";
import { necromancy_resources_en } from "../subclasses/necromancy/en/necromancy-resources-en";
import { transmutation_resources_en } from "../subclasses/transmutation/en/transmutation-resources-en";

import { war_magic_resources_en } from "../subclasses/war-magic/en/war-magic-resources-en";

import { scribes_resources_en } from "../subclasses/scribes/en/scribes-resources-en";
import { bladesinging_resources_en } from "../subclasses/bladesinging/en/bladesinging-resources-en";

export const subclass_resources: GameLocalizationCategory = {
  // PHB
  ...abjuration_resources_en,  
  ...conjuration_resources_en, 
  ...divination_resources_en,
  ...enchantment_resources_en,
  ...evocation_resources_en,
  ...illusion_resources_en,
  ...necromancy_resources_en,
  ...transmutation_resources_en, 

  // XGE
  ...war_magic_resources_en,

  // TCE
  ...bladesinging_resources_en,
  ...scribes_resources_en,
};

export const wizard_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  arcane_recovery: {
    name: "Arcane Recovery",
    description: `It allows you to recharge a portion of your magical reserves after a short rest. It recharges after a day has passed.`,
  },
  signature_spell_1: {
    name: "Signature Spell 1",
    description: `The amount of times you can cast your first signature spell without using a spell slot. It recharges after a short rest.`,
  },
  signature_spell_2: {
    name: "Signature Spell 2",
    description: `The amount of times you can cast your second signature spell without using a spell slot. It recharges after a short rest.`,
  },
};
