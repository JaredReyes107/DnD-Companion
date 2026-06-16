import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { BARBARIAN_SUBCLASSES } from "@/core/data/classes/subclasses/barbarian/Barbarian-Subclasses";
import { BARD_SUBCLASSES } from "../classes/subclasses/bard/bard-subclasses";

/**
 * Base subclass definitions imported from data files.
 * Add new subclass imports here as they are implemented.
 */
const BASE_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...BARBARIAN_SUBCLASSES,
  ...BARD_SUBCLASSES,
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
