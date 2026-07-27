import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BERSERKER_POOLS } from "./barbarian/berserker-pools";
import { TOTEM_WARRIOR_POOLS } from "./barbarian/totem-warrior-pools";

import { ANCESTRAL_GUARDIAN_POOLS } from "./barbarian/ancestral-guardian-pools";
import { STORM_HERALD_POOLS } from "./barbarian/storm-herald-pools";
import { ZEALOT_POOLS } from "./barbarian/zealot-pools";

import { BEAST_POOLS } from "./barbarian/beast-pools";
import { WILD_MAGIC_POOLS } from "./barbarian/wild-magic-pools";

export const BARBARIAN_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BERSERKER_POOLS,
  ...TOTEM_WARRIOR_POOLS,

  ...ANCESTRAL_GUARDIAN_POOLS,
  ...STORM_HERALD_POOLS,
  ...ZEALOT_POOLS,

  ...BEAST_POOLS,
  ...WILD_MAGIC_POOLS,
};
