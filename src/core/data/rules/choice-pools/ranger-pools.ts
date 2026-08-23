import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { HUNTER_POOLS } from "./ranger/hunter-pools";

export const RANGER_POOLS: Record<string, ChoicePoolTemplate> = {
  ...HUNTER_POOLS,
};
