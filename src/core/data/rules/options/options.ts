import { OptionTemplate } from "@/core/entities/rules/option-template";

import { FIGHTING_STYLE_OPTIONS } from "./shared/fighting-styles-options";

import { BARBARIAN_OPTIONS } from "./barbarian-options";
import { BARD_OPTIONS } from "./bard-options";
import { CLERIC_OPTIONS } from "./cleric-options";
import { DRUID_OPTIONS } from "./druid-options";
import { FIGHTER_OPTIONS } from "./fighter-options";
import { MONK_OPTIONS } from "./monk-options";

export const BASE_OPTIONS: Record<string, OptionTemplate> = {
  ...FIGHTING_STYLE_OPTIONS,

  ...BARBARIAN_OPTIONS,
  ...BARD_OPTIONS,
  ...CLERIC_OPTIONS,
  ...DRUID_OPTIONS,
  ...FIGHTER_OPTIONS,
  ...MONK_OPTIONS,
};
