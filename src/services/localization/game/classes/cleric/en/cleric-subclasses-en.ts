import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_en } from "../subclasses/knowledge/en/knowledge-en";
import { life_en } from "../subclasses/life/en/life-en";
import { light_en } from "../subclasses/light/en/light-en";
import { nature_en } from "../subclasses/nature/en/nature-en";
import { tempest_en } from "../subclasses/tempest/en/tempest-en";
import { trickery_en } from "../subclasses/trickery/en/trickery-en";
import { war_en } from "../subclasses/war/en/war-en";

import { death_en } from "../subclasses/death/en/death-en";

import { forge_en } from "../subclasses/forge/en/forge-en";
import { grave_en } from "../subclasses/grave/en/grave-en";

import { order_en } from "../subclasses/order/en/order-en";
import { peace_en } from "../subclasses/peace/en/peace-en";
import { twilight_en } from "../subclasses/twilight/en/twilight-en";

export const cleric_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...knowledge_en,
  ...life_en,
  ...light_en,
  ...nature_en,
  ...tempest_en,
  ...trickery_en,
  ...war_en,

  // DMG
  ...death_en,

  // Xanathar's
  ...forge_en,
  ...grave_en,

  // Tasha's
  ...order_en,
  ...peace_en,
  ...twilight_en,
};
