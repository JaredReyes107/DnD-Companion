import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_actions_en } from "../subclasses/knowledge/en/knowledge-actions-en";
import { life_actions_en } from "../subclasses/life/en/life-actions-en";
import { light_actions_en } from "../subclasses/light/en/light-actions-en";
import { nature_actions_en } from "../subclasses/nature/en/nature-actions-en";
import { tempest_actions_en } from "../subclasses/tempest/en/tempest-actions-en";
import { war_actions_en } from "../subclasses/war/en/war-actions-en";

import { forge_actions_en } from "../subclasses/forge/en/forge-actions-en";
import { grave_actions_en } from "../subclasses/grave/en/grave-actions-en";

import { order_actions_en } from "../subclasses/order/en/order-actions-en";
import { peace_actions_en } from "../subclasses/peace/en/peace-actions-en";
import { twilight_actions_en } from "../subclasses/twilight/en/twilight-actions-en";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...knowledge_actions_en,
  ...life_actions_en,
  ...light_actions_en,
  ...nature_actions_en,
  ...tempest_actions_en,
  ...tempest_actions_en,
  ...war_actions_en,
  
  // Xanathar's
  ...forge_actions_en,
  ...grave_actions_en,

  // Tasha's
  ...order_actions_en,
  ...peace_actions_en,
  ...twilight_actions_en,
};

export const cleric_actions_en: GameLocalizationCategory = {
  channel_divinity_turn_undead: {
    name: "Turn Undead",
  },
  channel_divinity_harness_divine_power: {
    name: "Harness Divine Power",
  },
  divine_intervention: {
    name: "Divine Intervention",
  },

  ...subclass_actions,
};
