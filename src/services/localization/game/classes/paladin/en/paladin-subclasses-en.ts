import { GameLocalizationCategory } from "@/services/localization/game-localization.types";
import { devotion_en } from "../subclasses/devotion/en/devotion-en";
import { ancients_en } from "../subclasses/ancients/en/ancients-en";
import { vengeance_en } from "../subclasses/vengeance/en/vengeance-en";
import { oathbreaker_en } from "../subclasses/oathbreaker/en/oathbreaker-en";
import { conquest_en } from "../subclasses/conquest/en/conquest-en";
import { redemption_en } from "../subclasses/redemption/en/redemption-en";
import { glory_en } from "../subclasses/glory/en/glory-en";
import { watchers_en } from "../subclasses/watchers/en/watchers-en";

export const paladin_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...devotion_en,
  ...ancients_en,
  ...vengeance_en,

  // DMG
  ...oathbreaker_en,

  // XGE
  ...conquest_en,
  ...redemption_en,

  // TCE
  ...glory_en,
  ...watchers_en,
};
