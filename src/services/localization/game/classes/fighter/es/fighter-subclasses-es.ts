import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { champion_es } from "../subclasses/champion/es/champion-es";
import { battle_master_es } from "../subclasses/battle-master/es/battle-master-es";
import { eldritch_knight_es } from "../subclasses/eldritch-knight/es/eldritch-knight-es";
import { arcane_archer_es } from "../subclasses/arcane-archer/es/arcane-archer-es";
import { cavalier_es } from "../subclasses/cavalier/es/cavalier-es";
import { samurai_es } from "../subclasses/samurai/es/samurai-es";
import { psi_warrior_es } from "../subclasses/psi-warrior/es/psi-warrior-es";
import { rune_knight_es } from "../subclasses/rune-knight/es/rune-knight-es";

export const fighter_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...champion_es,
  ...battle_master_es,
  ...eldritch_knight_es,

  // XGE
  ...arcane_archer_es,
  ...cavalier_es,
  ...samurai_es,

  // TCE
  ...psi_warrior_es,
  ...rune_knight_es,
};
