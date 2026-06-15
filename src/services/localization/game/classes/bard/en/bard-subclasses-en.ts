import { GameLocalizationCategory } from "@/services/localization/game-localization.types";
import { lore_en } from "../subclasses/lore/en/lore-en";
import { valor_en } from "../subclasses/valor/en/valor-en";

export const bard_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...lore_en,
  ...valor_en,
};
