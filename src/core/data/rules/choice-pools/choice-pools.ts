import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BARBARIAN_POOLS } from "./barbarian-pools";
import { BARD_POOLS } from "./bard-pools";
import { CLERIC_POOLS } from "./cleric-pools";
import { DRUID_POOLS } from "./druid-pools";
import { FIGHTER_POOLS } from "./fighter-pools";
import { MONK_POOLS } from "./monk-pools";
import { RANGER_POOLS } from "./ranger-pools";
import { PALADIN_POOLS } from "./paladin-pools";
import { SORCERER_POOLS } from "./sorcerer-pools";
import { WARLOCK_POOLS } from "./warlock-pools";
import { ARTIFICER_POOLS } from "./artificer/artificer-pools";

export const BASE_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BARBARIAN_POOLS,
  ...BARD_POOLS,
  ...CLERIC_POOLS,
  ...DRUID_POOLS,
  ...FIGHTER_POOLS,
  ...MONK_POOLS,
  ...RANGER_POOLS,
  ...PALADIN_POOLS,
  ...SORCERER_POOLS,
  ...WARLOCK_POOLS,
  ...ARTIFICER_POOLS,
};
