import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { archfey_es } from "../subclasses/archfey/es/archfey-es";
import { fiend_es } from "../subclasses/fiend/es/fiend-es";
import { great_old_one_es } from "../subclasses/great-old-one/es/great-old-one-es";

import { celestial_es } from "../subclasses/celestial/es/celestial-es";
import { hexblade_es } from "../subclasses/hexblade/es/hexblade-es";
import { fathomless_es } from "../subclasses/fathomless/es/fathomless-es";
import { genie_es } from "../subclasses/genie/es/genie-es";

export const warlock_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...archfey_es,
  ...fiend_es,
  ...great_old_one_es,

  // XGE
  ...celestial_es,
  ...hexblade_es,

  // TCE
  ...fathomless_es,
  ...genie_es,
};
