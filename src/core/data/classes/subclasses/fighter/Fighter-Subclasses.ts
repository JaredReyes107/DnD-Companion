import { SubclassTemplate } from "@/core/entities/rules/subclass-template";
import { CHAMPION } from "@/core/data/classes/subclasses/fighter/Champion";
import { BATTLE_MASTER } from "@/core/data/classes/subclasses/fighter/Battle-Master";
import { ELDRITCH_KNIGHT } from "@/core/data/classes/subclasses/fighter/Eldritch-Knight";


const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  // Fighter
  champion: CHAMPION,
  battle_master: BATTLE_MASTER,
  eldritch_knight: ELDRITCH_KNIGHT,

  // Barbarian
  // berserker: BERSERKER,
  // totem_warrior: TOTEM_WARRIOR,

  // ... other subclasses added here as data files are created
};

export const FIGHTER_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES
};
