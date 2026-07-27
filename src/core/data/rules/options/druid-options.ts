import { OptionTemplate } from "@/core/entities/rules/option-template";

import { LAND_OPTIONS } from "@/core/data/rules/options/druid/land-options";
import { MOON_OPTIONS } from "@/core/data/rules/options/druid/moon-options";

import { DREAMS_OPTIONS } from "./druid/dreams-options";
import { SHEPHERD_OPTIONS } from "@/core/data/rules/options/druid/shepherd-options";
import { SPORES_OPTIONS } from "@/core/data/rules/options/druid/spores-options";

import { STARS_OPTIONS } from "@/core/data/rules/options/druid/stars-options";
import { WILDFIRE_OPTIONS } from "@/core/data/rules/options/druid/wildfire-options";

export const DRUID_OPTIONS: Record<string, OptionTemplate> = {
  ...LAND_OPTIONS,
  ...MOON_OPTIONS,

  ...DREAMS_OPTIONS,
  ...SHEPHERD_OPTIONS,
  ...SPORES_OPTIONS,

  ...STARS_OPTIONS,
  ...WILDFIRE_OPTIONS,
};
