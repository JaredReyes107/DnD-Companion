import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { KNOWLEDGE_POOLS } from "./cleric/knowledge-pools";
import { LIFE_POOLS } from "./cleric/life-pools";
import { LIGHT_POOLS } from "./cleric/light-pools";
import { NATURE_POOLS } from "./cleric/nature-pools";
import { TEMPEST_POOLS } from "./cleric/tempest-pools";
import { TRICKERY_POOLS } from "./cleric/trickery-pools";
import { WAR_POOLS } from "./cleric/war-pools";

import { DEATH_POOLS } from "./cleric/death-pools";

import { FORGE_POOLS } from "./cleric/forge-pools";
import { GRAVE_POOLS } from "./cleric/grave-pools";

import { ORDER_POOLS } from "./cleric/order-pools";
import { PEACE_POOLS } from "./cleric/peace-pools";
import { TWILIGHT_POOLS } from "./cleric/twilight-pools";

export const CLERIC_POOLS: Record<string, ChoicePoolTemplate> = {
  ...KNOWLEDGE_POOLS,
  ...LIFE_POOLS,
  ...LIGHT_POOLS,
  ...NATURE_POOLS,
  ...TRICKERY_POOLS,
  ...TEMPEST_POOLS,
  ...WAR_POOLS,

  ...DEATH_POOLS,

  ...FORGE_POOLS,
  ...GRAVE_POOLS,

  ...ORDER_POOLS,
  ...PEACE_POOLS,
  ...TWILIGHT_POOLS,
};
