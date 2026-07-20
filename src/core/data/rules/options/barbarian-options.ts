import { OptionTemplate } from "@/core/entities/rules/option-template";

import { BERSERKER_OPTIONS } from "./barbarian/berserker-options";
import { TOTEM_WARRIOR_OPTIONS } from "./barbarian/totem-warrior-options";

import { ANCESTRAL_GUARDIAN_OPTIONS } from "./barbarian/ancestral-guardian-options";
import { STORM_HERALD_OPTIONS } from "./barbarian/storm-herald-options";
import { ZEALOT_OPTIONS } from "./barbarian/zealot-options";

import { BEAST_OPTIONS } from "./barbarian/beast-options";
import { WILD_MAGIC_OPTIONS } from "./barbarian/wild-magic-options";

export const BARBARIAN_OPTIONS: Record<string, OptionTemplate> = {
  ...BERSERKER_OPTIONS,
  ...TOTEM_WARRIOR_OPTIONS,
  ...ANCESTRAL_GUARDIAN_OPTIONS,
  ...STORM_HERALD_OPTIONS,
  ...ZEALOT_OPTIONS,
  ...BEAST_OPTIONS,
  ...WILD_MAGIC_OPTIONS,
};
