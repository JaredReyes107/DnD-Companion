import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_actions_es } from "../subclasses/knowledge/es/knowledge-actions-es";
import { life_actions_es } from "../subclasses/life/es/life-actions-es";
import { light_actions_es } from "../subclasses/light/es/light-actions-es";
import { nature_actions_es } from "../subclasses/nature/es/nature-actions-es";
import { tempest_actions_es } from "../subclasses/tempest/es/tempest-actions-es";
import { war_actions_es } from "../subclasses/war/es/war-actions-es";

import { forge_actions_es } from "../subclasses/forge/es/forge-actions-es";
import { grave_actions_es } from "../subclasses/grave/es/grave-actions-es";

import { order_actions_en } from "../subclasses/order/en/order-actions-en";
import { peace_actions_es } from "../subclasses/peace/es/peace-actions-es";
import { twilight_actions_es } from "../subclasses/twilight/es/twilight-actions-es";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...knowledge_actions_es,
  ...life_actions_es,
  ...light_actions_es,
  ...nature_actions_es,
  ...tempest_actions_es,
  ...tempest_actions_es,
  ...war_actions_es,

  // Xanathar's
  ...forge_actions_es,
  ...grave_actions_es,

  // Tasha's
    ...order_actions_en
    ...peace_actions_es,
    ...twilight_actions_es,
};

export const cleric_actions_es: GameLocalizationCategory = {
  channel_divinity_turn_undead: {
    name: "Expulsar no Muertos",
  },
  channel_divinity_harness_divine_power: {
    name: "Cosechar Poder Divino",
  },
  divine_intervention: {
    name: "Intervención Divina",
  },

  ...subclass_actions,
};
