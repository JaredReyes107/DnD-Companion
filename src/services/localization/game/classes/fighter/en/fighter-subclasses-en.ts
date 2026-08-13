import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { champion_en } from "../subclasses/champion/en/champion-en";
import { battle_master_en } from "../subclasses/battle-master/en/battle-master-en";
import { eldritch_knight_en } from "../subclasses/eldritch-knight/en/eldritch-knight-en";

export const fighter_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...champion_en,
  ...battle_master_en,
  ...eldritch_knight_en,

  // XGE

  // TCE
};
