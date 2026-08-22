import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { CHAMPION } from "@/core/data/classes/subclasses/fighter/Champion";
import { BATTLE_MASTER } from "@/core/data/classes/subclasses/fighter/Battle-Master";
import { ELDRITCH_KNIGHT } from "@/core/data/classes/subclasses/fighter/Eldritch-Knight";

import { ARCANE_ARCHER } from "./arcane-archer";
import { CAVALIER } from "./cavalier";
import { SAMURAI } from "./samurai";

import { PSI_WARRIOR } from "./psi-warrior";
import { RUNE_KNIGHT } from "./rune-knight";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  champion: CHAMPION,
  battle_master: BATTLE_MASTER,
  eldritch_knight: ELDRITCH_KNIGHT,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  arcane_archer: ARCANE_ARCHER,
  cavalier: CAVALIER,
  samurai: SAMURAI,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  psi_warrior: PSI_WARRIOR,
  rune_knight: RUNE_KNIGHT,
};

export const FIGHTER_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
