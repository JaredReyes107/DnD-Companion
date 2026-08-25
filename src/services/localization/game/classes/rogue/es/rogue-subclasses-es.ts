import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { arcane_trickster_es } from "../subclasses/arcane-trickster/es/arcane-trickster-es";
import { assassin_es } from "../subclasses/assassin/es/assassin-es";
import { thief_es } from "../subclasses/thief/es/thief-es";

import { inquisitive_es } from "../subclasses/inquisitive/es/inquisitive-es";
import { mastermind_es } from "../subclasses/mastermind/es/mastermind-es";
import { scout_es } from "../subclasses/scout/es/scout-es";
import { swashbuckler_es } from "../subclasses/swashbuckler/es/swashbuckler-es";

import { phantom_es } from "../subclasses/phantom/es/phantom-es";
import { soulknife_es } from "../subclasses/soulknife/es/soulknife-es";

export const rogue_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...arcane_trickster_es,
  ...assassin_es,
  ...thief_es,
  // XGE
  ...inquisitive_es,
  ...mastermind_es,
  ...scout_es,
  ...swashbuckler_es,
  // TCE
  ...phantom_es,
  ...soulknife_es,
};
