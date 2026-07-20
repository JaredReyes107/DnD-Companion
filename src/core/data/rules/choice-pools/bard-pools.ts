import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

import { LORE_POOLS } from "./bard/lore-pools";
import { VALOR_POOLS } from "./bard/valor-pools";

import { GLAMOUR_POOLS } from "./bard/glamour-pools";
import { SWORDS_POOLS } from "./bard/swords-pools";
import { WHISPERS_POOLS } from "./bard/whispers-pools";

import { CREATION_POOLS } from "./bard/creation-pools";
import { ELOQUENCE_POOLS } from "./bard/eloquence-pools";

export const BARD_POOLS: Record<string, ChoicePoolTemplate> = {
  ...LORE_POOLS,
  ...VALOR_POOLS,

  ...GLAMOUR_POOLS,
  ...SWORDS_POOLS,
  ...WHISPERS_POOLS,

  ...CREATION_POOLS,
  ...ELOQUENCE_POOLS,
};
