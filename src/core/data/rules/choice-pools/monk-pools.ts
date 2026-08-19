import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { FOUR_ELEMENTS_POOLS } from "./monk/four-elements-pools";

export const MONK_POOLS: Record<string, ChoicePoolTemplate> = {
  ...FOUR_ELEMENTS_POOLS,
};
