import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { archfey_en } from "../subclasses/archfey/en/archfey-en";
import { fiend_en } from "../subclasses/fiend/en/fiend-en";
import { great_old_one_en } from "../subclasses/great-old-one/en/great-old-one-en";

import { celestial_en } from "../subclasses/celestial/en/celestial-en";
import { hexblade_en } from "../subclasses/hexblade/en/hexblade-en";
import { fathomless_en } from "../subclasses/fathomless/en/fathomless-en";
import { genie_en } from "../subclasses/genie/en/genie-en";

export const warlock_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...archfey_en,
  ...fiend_en,
  ...great_old_one_en,

  // XGE
  ...celestial_en,
  ...hexblade_en,

  // TCE
  ...fathomless_en,
  ...genie_en,
};
