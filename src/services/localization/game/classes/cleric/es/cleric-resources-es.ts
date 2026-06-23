import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_resources_es } from "../subclasses/knowledge/es/knowledge-resources-es";
import { life_resources_es } from "../subclasses/life/es/life-resources-es";
import { light_resources_es } from "../subclasses/light/es/light-resources-es";
import { nature_resources_es } from "../subclasses/nature/es/nature-resources-es";
import { tempest_resources_es } from "../subclasses/tempest/es/tempest-resources-es";
import { trickery_resources_es } from "../subclasses/trickery/es/trickery-resources-es";
import { war_resources_es } from "../subclasses/war/es/war-resources-es";

import { forge_resources_es } from "../subclasses/forge/es/forge-resources-es";
import { grave_resources_es } from "../subclasses/grave/es/grave-resources-es";

import { order_resources_es } from "../subclasses/order/es/order-resources-es";
import { peace_resources_es } from "../subclasses/peace/es/peace-resources-es";
import { twilight_resources_es } from "../subclasses/twilight/es/twilight-resources-es";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...knowledge_resources_es,
  ...life_resources_es,
  ...light_resources_es,
  ...nature_resources_es,
  ...tempest_resources_es,
  ...trickery_resources_es,
  ...war_resources_es,

  // Xanathar's
  ...forge_resources_es,
  ...grave_resources_es,

  // Tasha's
  ...order_resources_es,
  ...peace_resources_es,
  ...twilight_resources_es,
};

export const cleric_resources_es: GameLocalizationCategory = {
  channel_divinity: {
    name: "Canalizar Divinidad",
    description: "",
  },

  ...subclass_resources,
};
