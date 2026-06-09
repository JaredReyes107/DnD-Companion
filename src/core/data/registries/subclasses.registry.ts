import { SubclassTemplate } from "@/core/entities/rules/subclass-template";
import { FIGHTER_SUBCLASSES } from "../classes/subclasses/fighter/Fighter-Subclasses";

/**
 * Base subclass definitions imported from data files.
 * Add new subclass imports here as they are implemented.
 */
const BASE_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...FIGHTER_SUBCLASSES,
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
