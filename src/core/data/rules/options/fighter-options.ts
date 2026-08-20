import { OptionTemplate } from "@/core/entities/rules/option-template";

import { BATTLE_MASTER_OPTIONS } from "./fighter/battle-master-options";
import { ARCANE_ARCHER_OPTIONS } from "./fighter/arcane-archer-options";
import { RUNE_KNIGHT_OPTIONS } from "./fighter/rune-knight-options";

export const FIGHTER_OPTIONS: Record<string, OptionTemplate> = {
  ...BATTLE_MASTER_OPTIONS,
  ...ARCANE_ARCHER_OPTIONS,
  ...RUNE_KNIGHT_OPTIONS,
};
