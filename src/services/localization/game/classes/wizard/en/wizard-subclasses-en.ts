import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_en } from "../subclasses/abjuration/en/abjuration-en";
import { conjuration_en } from "../subclasses/conjuration/en/conjuration-en";
import { divination_en } from "../subclasses/divination/en/divination-en";
import { enchantment_en } from "../subclasses/enchantment/en/enchantment-en";
import { evocation_en } from "../subclasses/evocation/en/evocation-en";
import { illusion_en } from "../subclasses/illusion/en/illusion-en";
import { necromancy_en } from "../subclasses/necromancy/en/necromancy-en";
import { transmutation_en } from "../subclasses/transmutation/en/transmutation-en";

import { war_magic_en } from "../subclasses/war-magic/en/war-magic-en";

import { bladesinging_en } from "../subclasses/bladesinging/en/bladesinging-en";
import { scribes_en } from "../subclasses/scribes/en/scribes-en";

export const wizard_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...abjuration_en,
  ...conjuration_en,
  ...divination_en,
  ...enchantment_en,
  ...evocation_en,
  ...illusion_en,
  ...necromancy_en,
  ...transmutation_en,

  // XGE
  ...war_magic_en,

  // TCE
  ...bladesinging_en,
  ...scribes_en,
};
