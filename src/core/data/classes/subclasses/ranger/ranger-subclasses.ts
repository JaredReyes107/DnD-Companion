import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { BEAST_MASTER } from "./beast-master";
import { HUNTER } from "./hunter";

import { GLOOM_STALKER } from "./gloom-stalker";
import { HORIZON_WALKER } from "./horizon-walker";
import { MONSTER_SLAYER } from "./monster-slayer";

import { FEY_WANDERER } from "./fey-wanderer";
import { SWARMKEEPER } from "./swarmkeeper";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  beast_master: BEAST_MASTER,
  hunter: HUNTER,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  gloom_stalker: GLOOM_STALKER,
  horizon_walker: HORIZON_WALKER,
  monster_slayer: MONSTER_SLAYER,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  fey_wanderer: FEY_WANDERER,
  swarmkeeper: SWARMKEEPER,
};

export const RANGER_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
