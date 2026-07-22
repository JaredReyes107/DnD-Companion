import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BARBARIAN_POOLS } from "./barbarian-pools";
import { BARD_POOLS } from "./bard-pools";
import { CLERIC_POOLS } from "./cleric-pools";
import { DRUID_POOLS } from "./druid-pools";

export const BASE_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BARBARIAN_POOLS,
  ...BARD_POOLS,
  ...CLERIC_POOLS,
  ...DRUID_POOLS,
};
