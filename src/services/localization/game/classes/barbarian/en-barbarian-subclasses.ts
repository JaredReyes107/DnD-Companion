import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_en } from "@/services/localization/game/classes/barbarian/subclasses/berserker/en/en-berserker";
import { totem_warrior_en } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/en/en-totem-warrior";
import { ancestral_guardian_en } from "./subclasses/ancestral-guardian/en/en-ancestral-guardian";
import { storm_herald_en } from "./subclasses/storm-herald/en/en-storm-herald";
import { zealot_en } from "./subclasses/zealot/en/en-zealot";
import { beast_en } from "./subclasses/beast/en/en-beast";
import { wild_magic_en } from "./subclasses/wild-magic/en/en-wild-magic";

export const barbarian_subclasses_en: GameLocalizationCategory = {
  ...berserker_en,
  ...totem_warrior_en,

  ...ancestral_guardian_en,
  ...storm_herald_en,
  ...zealot_en,

  ...beast_en,
  ...wild_magic_en,
};
