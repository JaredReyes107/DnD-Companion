import { OptionTemplate } from "@/core/entities/rules/option-template";

import { LORE_OPTIONS } from "./bard/lore-options";
import { VALOR_OPTIONS } from "./bard/valor-options";

import { GLAMOUR_OPTIONS } from "./bard/glamour-options";
import { SWORDS_OPTIONS } from "./bard/swords-options";
import { WHISPERS_OPTIONS } from "./bard/whispers-options";

import { CREATION_OPTIONS } from "./bard/creation-options";
import { ELOQUENCE_OPTIONS } from "./bard/eloquence-options";

export const BARD_OPTIONS: Record<string, OptionTemplate> = {
  ...LORE_OPTIONS,
  ...VALOR_OPTIONS,

  ...GLAMOUR_OPTIONS,
  ...SWORDS_OPTIONS,
  ...WHISPERS_OPTIONS,

  ...CREATION_OPTIONS,
  ...ELOQUENCE_OPTIONS,
};
