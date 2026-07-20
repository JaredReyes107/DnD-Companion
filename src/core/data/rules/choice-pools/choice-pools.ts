import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { BARBARIAN_POOLS } from "./barbarian-pools";

export const BASE_POOLS: Record<string, ChoicePoolTemplate> = {
  ...BARBARIAN_POOLS,
};
