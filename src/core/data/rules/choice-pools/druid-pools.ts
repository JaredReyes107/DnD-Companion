import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { LAND_POOLS } from "@/core/data/rules/choice-pools/druid/land-pools";
import { MOON_POOLS } from "@/core/data/rules/choice-pools/druid/moon-pools";

import { DREAMS_POOLS } from "./druid/dreams-pools";
import { SHEPHERD_POOLS } from "@/core/data/rules/choice-pools/druid/shepherd-pools";
import { SPORES_POOLS } from "@/core/data/rules/choice-pools/druid/spores-pools";

import { STARS_POOLS } from "@/core/data/rules/choice-pools/druid/stars-pools";
import { WILDFIRE_POOLS } from "@/core/data/rules/choice-pools/druid/wildfire-pools";

export const DRUID_POOLS: Record<string, ChoicePoolTemplate> = {
  ...LAND_POOLS,
  ...MOON_POOLS,

  ...DREAMS_POOLS,
  ...SHEPHERD_POOLS,
  ...SPORES_POOLS,

  ...STARS_POOLS,
  ...WILDFIRE_POOLS,
};
