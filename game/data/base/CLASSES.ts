import { ClassTemplate } from "@/game/data/templates/class-template";

import { ARTIFICER } from "./classes-templates/Artificer";
import { BARBARIAN } from "./classes-templates/Barbarian";
import { BARD } from "./classes-templates/Bard";
import { CLERIC } from "./classes-templates/Cleric";
import { FIGHTER } from "./classes-templates/Fighter";
import { DRUID } from "./classes-templates/Druid";
import { MONK } from "./classes-templates/Monk";
import { PALADIN } from "./classes-templates/Paladin";
import { RANGER } from "./classes-templates/Ranger";
import { ROGUE } from "./classes-templates/Rogue";
import { SORCERER } from "./classes-templates/Sorcerer";
import { WARLOCK } from "./classes-templates/Warlock";
import { WIZARD } from "./classes-templates/Wizard";

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
