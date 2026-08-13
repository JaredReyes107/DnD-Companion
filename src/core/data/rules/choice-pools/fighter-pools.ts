import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BATTLE_MASTER_POOLS } from "./fighter/battle-master-pools";

export const FIGHTER_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BATTLE_MASTER_POOLS,
};
