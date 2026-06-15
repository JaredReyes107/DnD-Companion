import { GameLocalizationCategory } from "@/services/localization/game-localization.types";
import { lore_es } from "../subclasses/lore/es/lore-es";
import { valor_es } from "../subclasses/valor/es/valor-es";

export const bard_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...lore_es,
  ...valor_es,
};
