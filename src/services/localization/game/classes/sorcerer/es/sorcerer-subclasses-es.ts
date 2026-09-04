import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { draconic_es } from "../subclasses/draconic/es/draconic-es";
import { wild_magic_sorcerer_es } from "../subclasses/wild/es/wild-magic-es";

import { divine_soul_es } from "../subclasses/divine-soul/es/divine-soul-es";
import { shadow_magic_es } from "../subclasses/shadow/es/shadow-magic-es";
import { storm_es } from "../subclasses/storm/es/storm-es";

import { aberrant_mind_es } from "../subclasses/aberrant-mind/es/aberrant-mind-es";
import { clockwork_soul_es } from "../subclasses/clockwork-soul/es/clockwork-soul-es";

export const sorcerer_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...draconic_es,
  ...wild_magic_sorcerer_es,

  // XGE
  ...divine_soul_es,
  ...shadow_magic_es,
  ...storm_es,

  // TCE
  ...aberrant_mind_es,
  ...clockwork_soul_es,
};
