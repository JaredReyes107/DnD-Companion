import { SubclassTemplate } from "@/core/entities/rules/subclass-template";
import { CHAMPION } from "../classes/subclasses/fighter/Champion";

/**
 * Base subclass definitions imported from data files.
 * Add new subclass imports here as they are implemented.
 */
const BASE_SUBCLASSES: Record<string, SubclassTemplate> = {
  // Fighter
  champion: CHAMPION,
  // battle_master: BATTLE_MASTER,
  // eldritch_knight: ELDRITCH_KNIGHT,

  // Barbarian
  // berserker: BERSERKER,
  // totem_warrior: TOTEM_WARRIOR,

  // ... other subclasses added here as data files are created
};

const homebrewSubclasses: Record<string, SubclassTemplate> = {};

export function registerHomebrewSubclass(subclass: SubclassTemplate) {
  homebrewSubclasses[subclass.id] = subclass;
}

export function getSubclassRegistry(): Record<string, SubclassTemplate> {
  return {
    ...BASE_SUBCLASSES,
    ...homebrewSubclasses,
  };
}

export function getSubclassTemplateById(id: string): SubclassTemplate {
  const subclass = getSubclassRegistry()[id];
  if (!subclass) {
    throw new Error(`SubclassTemplate not found: ${id}`);
  }
  return subclass;
}

/**
 * Returns all registered subclasses that belong to a given class.
 * Useful for building subclass pickers in the UI.
 */
export function getSubclassesForClass(classId: string): SubclassTemplate[] {
  return Object.values(getSubclassRegistry()).filter(
    (s) => s.classId === classId,
  );
}
