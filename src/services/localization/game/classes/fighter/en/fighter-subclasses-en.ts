import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { champion_en } from "../subclasses/champion/en/champion-en";
import { battle_master_en } from "../subclasses/battle-master/en/battle-master-en";
import { eldritch_knight_en } from "../subclasses/eldritch-knight/en/eldritch-knight-en";
import { arcane_archer_en } from "../subclasses/arcane-archer/en/arcane-archer-en";
import { cavalier_en } from "../subclasses/cavalier/en/cavalier-en";
import { samurai_en } from "../subclasses/samurai/en/samurai-en";
import { psi_warrior_en } from "../subclasses/psi-warrior/en/psi-warrior-en";
import { rune_knight_en } from "../subclasses/rune-knight/en/rune-knight-en";

export const fighter_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...champion_en,
  ...battle_master_en,
  ...eldritch_knight_en,

  // XGE
  ...arcane_archer_en,
  ...cavalier_en,
  ...samurai_en,

  // TCE
  ...psi_warrior_en,
  ...rune_knight_en,
};
