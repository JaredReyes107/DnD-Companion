import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BATTLE_MASTER_POOLS } from "./fighter/battle-master-pools";
import { ARCANE_ARCHER_POOLS } from "./fighter/arcane-archer-pools";
import { RUNE_KNIGHT_POOLS } from "./fighter/rune-knight-pools";

export const FIGHTER_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BATTLE_MASTER_POOLS,
  ...ARCANE_ARCHER_POOLS,
  ...RUNE_KNIGHT_POOLS,
};
