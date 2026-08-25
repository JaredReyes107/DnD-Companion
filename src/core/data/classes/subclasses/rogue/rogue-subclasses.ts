import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { ARCANE_TRICKSTER } from "./arcane-trickster";
import { ASSASSIN } from "./assassin";
import { THIEF } from "./thief";

import { INQUISITIVE } from "./inquisitive";
import { MASTERMIND } from "./mastermind";
import { SCOUT } from "./scout";
import { SWASHBUCKLER } from "./swashbuckler";

import { PHANTOM } from "./phantom";
import { SOULKNIFE } from "./soulknife";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  arcane_trickster: ARCANE_TRICKSTER,
  assassin: ASSASSIN,
  thief: THIEF,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  inquisitive: INQUISITIVE,
  mastermind: MASTERMIND,
  scout: SCOUT,
  swashbuckler: SWASHBUCKLER,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  phantom: PHANTOM,
  soulknife: SOULKNIFE,
};

export const ROGUE_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
