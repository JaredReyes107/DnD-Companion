import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_resources_en } from "../subclasses/knowledge/en/knowledge-resources-en";
import { life_resources_en } from "../subclasses/life/en/life-resources-en";
import { light_resources_en } from "../subclasses/light/en/light-resources-en";
import { nature_resources_en } from "../subclasses/nature/en/nature-resources-en";
import { tempest_resources_en } from "../subclasses/tempest/en/tempest-resources-en";
import { trickery_resources_en } from "../subclasses/trickery/en/trickery-resources-en";
import { war_resources_en } from "../subclasses/war/en/war-resources-en";

import { death_resources_en } from "../subclasses/death/en/death-resources-en";

import { forge_resources_en } from "../subclasses/forge/en/forge-resources-en";
import { grave_resources_en } from "../subclasses/grave/en/grave-resources-en";

import { order_resources_en } from "../subclasses/order/en/order-resources-en";
import { peace_resources_en } from "../subclasses/peace/en/peace-resources-en";
import { twilight_resources_en } from "../subclasses/twilight/en/twilight-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...knowledge_resources_en,
  ...life_resources_en,
  ...light_resources_en,
  ...nature_resources_en,
  ...tempest_resources_en,
  ...trickery_resources_en,
  ...war_resources_en,

  // DMG
  ...death_resources_en,

  // Xanathar's
  ...forge_resources_en,
  ...grave_resources_en,

  // Tasha's
  ...order_resources_en,
  ...peace_resources_en,
  ...twilight_resources_en,
};

export const cleric_resources_en: GameLocalizationCategory = {
  channel_divinity: {
    name: "Channel Divinity",
    description: "",
  },

  ...subclass_resources,
};
