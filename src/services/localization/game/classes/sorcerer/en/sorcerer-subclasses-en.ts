import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { draconic_en } from "../subclasses/draconic/en/draconic-en";
import { wild_magic_sorcerer_en } from "../subclasses/wild/en/wild-magic-en";

import { divine_soul_en } from "../subclasses/divine-soul/en/divine-soul-en";
import { shadow_magic_en } from "../subclasses/shadow/en/shadow-magic-en";
import { storm_en } from "../subclasses/storm/en/storm-en";

import { aberrant_mind_en } from "../subclasses/aberrant-mind/en/aberrant-mind-en";
import { clockwork_soul_en } from "../subclasses/clockwork-soul/en/clockwork-soul-en";

export const sorcerer_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...draconic_en,
  ...wild_magic_sorcerer_en,

  // XGE
  ...divine_soul_en,
  ...shadow_magic_en,
  ...storm_en,

  // TCE
  ...aberrant_mind_en,
  ...clockwork_soul_en,
};
