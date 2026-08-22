import { GameLocalizationCategory } from "@/services/localization/game-localization.types";
import { devotion_es } from "../subclasses/devotion/es/devotion-es";
import { ancients_es } from "../subclasses/ancients/es/ancients-es";
import { vengeance_es } from "../subclasses/vengeance/es/vengeance-es";
import { oathbreaker_es } from "../subclasses/oathbreaker/es/oathbreaker-es";
import { conquest_es } from "../subclasses/conquest/es/conquest-es";
import { redemption_es } from "../subclasses/redemption/es/redemption-es";
import { glory_es } from "../subclasses/glory/es/glory-es";
import { watchers_es } from "../subclasses/watchers/es/watchers-es";

export const paladin_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...devotion_es,
  ...ancients_es,
  ...vengeance_es,

  // DMG
  ...oathbreaker_es,

  // XGE
  ...conquest_es,
  ...redemption_es,

  // TCE
  ...glory_es,
  ...watchers_es,
};
