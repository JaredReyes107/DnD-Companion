import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { CHAMPION } from "@/core/data/classes/subclasses/fighter/Champion";
import { BATTLE_MASTER } from "@/core/data/classes/subclasses/fighter/Battle-Master";
import { ELDRITCH_KNIGHT } from "@/core/data/classes/subclasses/fighter/Eldritch-Knight";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  champion: CHAMPION,
  battle_master: BATTLE_MASTER,
  eldritch_knight: ELDRITCH_KNIGHT,
};

export const FIGHTER_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
};
