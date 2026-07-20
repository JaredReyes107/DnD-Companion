import { OptionTemplate } from "@/core/entities/rules/option-template";

import { KNOWLEDGE_OPTIONS } from "./cleric/knowledge-options";
import { LIFE_OPTIONS } from "./cleric/life-options";
import { LIGHT_OPTIONS } from "./cleric/light-options";
import { NATURE_OPTIONS } from "./cleric/nature-options";
import { TEMPEST_OPTIONS } from "./cleric/tempest-options";
import { TRICKERY_OPTIONS } from "./cleric/trickery-options";
import { WAR_OPTIONS } from "./cleric/war-options";

import { DEATH_OPTIONS } from "./cleric/death-options";

import { FORGE_OPTIONS } from "./cleric/forge-options";
import { GRAVE_OPTIONS } from "./cleric/grave-options";

import { PEACE_OPTIONS } from "./cleric/peace-options";
import { ORDER_OPTIONS } from "./cleric/order-options";
import { TWILIGHT_OPTIONS } from "./cleric/twilight-options";

export const CLERIC_OPTIONS: Record<string, OptionTemplate> = {
  ...KNOWLEDGE_OPTIONS,
  ...LIFE_OPTIONS,
  ...LIGHT_OPTIONS,
  ...NATURE_OPTIONS,
  ...TRICKERY_OPTIONS,
  ...TEMPEST_OPTIONS,
  ...WAR_OPTIONS,

  ...DEATH_OPTIONS,

  ...FORGE_OPTIONS,
  ...GRAVE_OPTIONS,

  ...ORDER_OPTIONS,
  ...PEACE_OPTIONS,
  ...TWILIGHT_OPTIONS,
};
