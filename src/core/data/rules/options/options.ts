import { OptionTemplate } from "@/core/entities/rules/option-template";

import { FIGHTING_STYLE_OPTIONS } from "./shared/fighting-styles-options";

import { BARBARIAN_OPTIONS } from "./barbarian-options";
import { BARD_OPTIONS } from "./bard-options";

export const BASE_OPTIONS: Record<string, OptionTemplate> = {
  ...FIGHTING_STYLE_OPTIONS,

  ...BARBARIAN_OPTIONS,
  ...BARD_OPTIONS,
};
