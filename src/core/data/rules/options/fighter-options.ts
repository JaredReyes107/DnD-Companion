import { OptionTemplate } from "@/core/entities/rules/option-template";

import { BATTLE_MASTER_OPTIONS } from "./fighter/battle-master-options";

export const FIGHTER_OPTIONS: Record<string, OptionTemplate> = {
  ...BATTLE_MASTER_OPTIONS,
};
