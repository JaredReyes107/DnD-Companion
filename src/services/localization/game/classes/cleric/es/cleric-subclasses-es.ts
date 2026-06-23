import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_es } from "../subclasses/knowledge/es/knowledge-es";
import { life_es } from "../subclasses/life/es/life-es";
import { light_es } from "../subclasses/light/es/light-es";
import { nature_es } from "../subclasses/nature/es/nature-es";
import { tempest_es } from "../subclasses/tempest/es/tempest-es";
import { trickery_es } from "../subclasses/trickery/es/trickery-es";
import { war_es } from "../subclasses/war/es/war-es";

import { forge_es } from "../subclasses/forge/es/forge-es";
import { grave_es } from "../subclasses/grave/es/grave-es";

import { order_es } from "../subclasses/order/es/order-es";
import { peace_es } from "../subclasses/peace/es/peace-es";
import { twilight_es } from "../subclasses/twilight/es/twilight-es";

export const cleric_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...knowledge_es,
  ...life_es,
  ...light_es,
  ...nature_es,
  ...tempest_es,
  ...trickery_es,
  ...war_es,

  // Xanathar's
  ...forge_es,
  ...grave_es,

  // Tasha's
  ...order_es,
  ...peace_es,
  ...twilight_es,
};
