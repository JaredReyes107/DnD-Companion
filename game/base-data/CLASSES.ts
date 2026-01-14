/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

import { ARTIFICER } from "./classes/Artificer";
import { BARBARIAN } from "./classes/Barbarian";
import { BARD } from "./classes/Bard";
import { CLERIC } from "./classes/Cleric";
import { FIGHTER } from "./classes/Fighter";
import { DRUID } from "./classes/Druid";
import { MONK } from "./classes/Monk";
import { PALADIN } from "./classes/Paladin";
import { RANGER } from "./classes/Ranger";
import { ROGUE } from "./classes/Rogue";
import { SORCERER } from "./classes/Sorcerer";
import { WARLOCK } from "./classes/Warlock";
import { WIZARD } from "./classes/Wizard";

export const CLASSES: Record<string, ClassTemplate> = {
  artificer: ARTIFICER,
  barbarian: BARBARIAN,
  bard: BARD,
  cleric: CLERIC,
  druid: DRUID,
  fighter: FIGHTER,
  monk: MONK,
  paladin: PALADIN,
  ranger: RANGER,
  rogue: ROGUE,
  sorcerer: SORCERER,
  warlock: WARLOCK,
  wizard: WIZARD,
};
