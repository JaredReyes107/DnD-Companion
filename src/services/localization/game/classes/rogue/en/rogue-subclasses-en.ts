import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { arcane_trickster_en } from "../subclasses/arcane-trickster/en/arcane-trickster-en";
import { assassin_en } from "../subclasses/assassin/en/assassin-en";
import { thief_en } from "../subclasses/thief/en/thief-en";

import { inquisitive_en } from "../subclasses/inquisitive/en/inquisitive-en";
import { mastermind_en } from "../subclasses/mastermind/en/mastermind-en";
import { scout_en } from "../subclasses/scout/en/scout-en";
import { swashbuckler_en } from "../subclasses/swashbuckler/en/swashbuckler-en";

import { phantom_en } from "../subclasses/phantom/en/phantom-en";
import { soulknife_en } from "../subclasses/soulknife/en/soulknife-en";

export const rogue_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...arcane_trickster_en,
  ...assassin_en,
  ...thief_en,
  // XGE
  ...inquisitive_en,
  ...mastermind_en,
  ...scout_en,
  ...swashbuckler_en,
  // TCE
  ...phantom_en,
  ...soulknife_en,
};
