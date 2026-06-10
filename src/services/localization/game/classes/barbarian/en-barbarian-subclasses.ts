import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_en } from "@/services/localization/game/classes/barbarian/subclasses/berserker/en-berserker";
import { totem_warrior_en } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/en-totem-warrior";

export const barbarian_subclasses_en: GameLocalizationCategory = {
  ...berserker_en,
  ...totem_warrior_en,
}
