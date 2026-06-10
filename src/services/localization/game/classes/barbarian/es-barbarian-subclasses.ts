import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_es } from "@/services/localization/game/classes/barbarian/subclasses/berserker/es-berserker";
import { totem_warrior_es } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/es-totem-warrior";

export const barbarian_subclasses_es: GameLocalizationCategory = {
  ...berserker_es,
  ...totem_warrior_es,
}
