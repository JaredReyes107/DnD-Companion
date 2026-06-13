import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_es } from "@/services/localization/game/classes/barbarian/subclasses/berserker/es/es-berserker";
import { totem_warrior_es } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/es/es-totem-warrior";
import { ancestral_guardian_es } from "./subclasses/ancestral-guardian/es/es-ancestral-guardian";
import { storm_herald_es } from "./subclasses/storm-herald/es/es-storm-herald";
import { zealot_es } from "./subclasses/zealot/es/es-zealot";
import { beast_es } from "./subclasses/beast/es/es-beast";
import { wild_magic_es } from "./subclasses/wild-magic/es/es-wild-magic";

export const barbarian_subclasses_es: GameLocalizationCategory = {
  ...berserker_es,
  ...totem_warrior_es,

  ...ancestral_guardian_es,
  ...storm_herald_es,
  ...zealot_es,

  ...beast_es,
  ...wild_magic_es,
};
