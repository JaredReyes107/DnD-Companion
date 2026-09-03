import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { BARBARIAN_SUBCLASSES } from "@/core/data/classes/subclasses/barbarian/Barbarian-Subclasses";
import { BARD_SUBCLASSES } from "../classes/subclasses/bard/bard-subclasses";
import { CLERIC_SUBCLASSES } from "@/core/data/classes/subclasses/cleric/cleric-subclasses";
import { DRUID_SUBCLASSES } from "../classes/subclasses/druid/druid-subclasses";
import { FIGHTER_SUBCLASSES } from "../classes/subclasses/fighter/Fighter-Subclasses";
import { MONK_SUBCLASSES } from "../classes/subclasses/monk/monk-subclasses";
import { PALADIN_SUBCLASSES } from "../classes/subclasses/paladin/paladin-subclasses";
import { RANGER_SUBCLASSES } from "../classes/subclasses/ranger/ranger-subclasses";
import { ROGUE_SUBCLASSES } from "../classes/subclasses/rogue/rogue-subclasses";
import { SORCERER_SUBCLASSES } from "../classes/subclasses/sorcerer/sorcerer-subclasses";
import { WARLOCK_SUBCLASSES } from "../classes/subclasses/warlock/warlock-subclasses";
import { WIZARD_SUBCLASSES } from "../classes/subclasses/wizard/wizard-subclasses";
import { ARTIFICER_SUBCLASSES } from "../classes/subclasses/artificer/artificer-subclasses";

/**
 * Base subclass definitions imported from data files.
 * Add new subclass imports here as they are implemented.
 */
const BASE_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...BARBARIAN_SUBCLASSES,
  ...BARD_SUBCLASSES,
  ...CLERIC_SUBCLASSES,
  ...DRUID_SUBCLASSES,
  ...FIGHTER_SUBCLASSES,
  ...MONK_SUBCLASSES,
  ...PALADIN_SUBCLASSES,
  ...RANGER_SUBCLASSES,
  ...ROGUE_SUBCLASSES,
  ...SORCERER_SUBCLASSES,
  ...WARLOCK_SUBCLASSES,
  ...WIZARD_SUBCLASSES,
  ...ARTIFICER_SUBCLASSES,
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
