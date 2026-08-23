import { OptionTemplate } from "@/core/entities/rules/option-template";

import { HUNTER_OPTIONS } from "./ranger/hunter-options";

export const RANGER_OPTIONS: Record<string, OptionTemplate> = {
  ...HUNTER_OPTIONS,
};
