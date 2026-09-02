import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_es } from "../subclasses/abjuration/es/abjuration-es";
import { conjuration_es } from "../subclasses/conjuration/es/conjuration-es";
import { divination_es } from "../subclasses/divination/es/divination-es";
import { enchantment_es } from "../subclasses/enchantment/es/enchantment-es";
import { evocation_es } from "../subclasses/evocation/es/evocation-es";
import { illusion_es } from "../subclasses/illusion/es/illusion-es";
import { necromancy_es } from "../subclasses/necromancy/es/necromancy-es";
import { transmutation_es } from "../subclasses/transmutation/es/transmutation-es";

import { war_magic_es } from "../subclasses/war-magic/es/war-magic-es";

import { bladesinging_es } from "../subclasses/bladesinging/es/bladesinging-es";
import { scribes_es } from "../subclasses/scribes/es/scribes-es";

export const wizard_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...abjuration_es,  
  ...conjuration_es, 
  ...divination_es,
  ...enchantment_es,
  ...evocation_es,
  ...illusion_es,
  ...necromancy_es,
  ...transmutation_es, 

  // XGE
  ...war_magic_es,

  // TCE
  ...bladesinging_es,
  ...scribes_es,
};
