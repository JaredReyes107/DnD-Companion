import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { champion_es } from "../subclasses/champion/es/champion-es";
import { battle_master_es } from "../subclasses/battle-master/es/battle-master-es";
import { eldritch_knight_es } from "../subclasses/eldritch-knight/es/eldritch-knight-es";

export const fighter_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...champion_es,
  ...battle_master_es,
  ...eldritch_knight_es,

  // XGE

  // TCE
};
