import { Character } from "@/core/entities/character/Character";
import { SpellSlotLevel } from "@/core/entities/spellcasting/spell-slot-instance";
import {
  getClassInstanceByTemplateId,
  getClassTemplateById,
} from "@/core/data/registries/classes.registry";
import { ClassInstance } from "../character/class-instance";
import { SpellcastingTemplate } from "../rules/spellcasting-template";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/core/rules/character/abilities-modifiers";

export type SpellcastingEntry = {
  classInstanceId: string; // key in classes.byId / classes.order
  classInstance: ClassInstance;
  spellcastingTemplate: SpellcastingTemplate;
};

export function getSpellcastingEntries(
  character: Character,
): SpellcastingEntry[] {
  const entries: SpellcastingEntry[] = [];

  for (const classInstanceId of character.classes.order) {
    const classInstance = character.classes.byId[classInstanceId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    const subclassTemplate = classInstance.subclassId
      ? getSubclassTemplateById(classInstance.subclassId)
      : undefined;

    // Class-level spellcasting takes priority; a subclass grants it only
    // when the base class itself doesn't (e.g. Eldritch Knight, Arcane Trickster).
    const spellcastingTemplate =
      classTemplate?.spellcastingTemplate ??
      subclassTemplate?.spellcastingTemplate;

    if (!spellcastingTemplate) continue;

    entries.push({ classInstanceId, classInstance, spellcastingTemplate });
  }

  return entries;
}

export function hasSpellcasting(character: Character): boolean {
  return getSpellcastingEntries(character).length > 0;
}

export function getTotalCasterLevel(character: Character): number {
  return getSpellcastingEntries(character).reduce((total, entry) => {
    switch (entry.spellcastingTemplate.progression) {
      case "full":
        return total + entry.classInstance.level;
      case "half":
        return total + Math.floor(entry.classInstance.level / 2);
      case "third":
        return total + Math.floor(entry.classInstance.level / 3);
      default:
        return total;
    }
  }, 0);
}

//TODO: Make it per class
export function getSpellAttackModifierForEntry(
  character: Character,
  entry: SpellcastingEntry,
): number {
  const ability = entry.spellcastingTemplate.ability;
  //TODO: [Modifiers] Replace attribute with derived data resolver
  const abilityScore = character.baseAbilityScores[ability];

  return getAbilityModifier(abilityScore) + getProficiencyBonus(character);
}

//TODO: Make it per class
export function getSpellSaveDCForEntry(
  character: Character,
  entry: SpellcastingEntry,
): number {
  const ability = entry.spellcastingTemplate.ability;
  //TODO: [Modifiers] Replace attribute with derived data resolver
  const abilityScore = character.baseAbilityScores[ability];

  return 8 + getAbilityModifier(abilityScore) + getProficiencyBonus(character);
}

/**
 * @deprecated Temporary aggregate for single-value stat resolution
 * (stat-resolver.ts). Picks the character's first spellcasting class
 * arbitrarily. Once the UI supports per-class display, callers should
 * use getSpellAttackModifierForEntry with a specific SpellcastingEntry
 * instead, and this should be removed.
 */
export function getSpellAttackModifier(character: Character): number {
  const [firstEntry] = getSpellcastingEntries(character);
  return firstEntry ? getSpellAttackModifierForEntry(character, firstEntry) : 0;
}

/** @deprecated same caveat as getSpellAttackModifier */
export function getSpellSaveDC(character: Character): number {
  const [firstEntry] = getSpellcastingEntries(character);
  return firstEntry ? getSpellSaveDCForEntry(character, firstEntry) : 0;
}

const STANDARD_SPELL_SLOTS: number[][] = [
  // character level: 1 → 20
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1],
];

function buildStandardSpellSlots(casterLevel: number): CharacterResources {
  const row = STANDARD_SPELL_SLOTS[casterLevel - 1];
  if (!row) return {};

  const slots: CharacterResources = {};

  row.forEach((max, index) => {
    const resourceId = "spell_slot_" + (index + 1);

    slots[resourceId] = {
      resourceId,
      max,
      min: 0,
      current: max,
    };
  });

  return slots;
}

const PACT_MAGIC_TABLE: Record<
  number,
  { level: SpellSlotLevel; slots: number }
> = {
  1: { level: 1, slots: 1 },
  2: { level: 1, slots: 2 },
  3: { level: 2, slots: 2 },
  4: { level: 2, slots: 2 },
  5: { level: 3, slots: 2 },
  6: { level: 3, slots: 2 },
  7: { level: 4, slots: 2 },
  8: { level: 4, slots: 2 },
  9: { level: 5, slots: 2 },
  10: { level: 5, slots: 2 },
  11: { level: 5, slots: 3 },
  12: { level: 5, slots: 3 },
  13: { level: 5, slots: 3 },
  14: { level: 5, slots: 3 },
  15: { level: 5, slots: 3 },
  16: { level: 5, slots: 3 },
  17: { level: 5, slots: 4 },
  18: { level: 5, slots: 4 },
  19: { level: 5, slots: 4 },
  20: { level: 5, slots: 4 },
};

function buildPactMagicSlots(warlockLevel: number): CharacterResources {
  const row = PACT_MAGIC_TABLE[warlockLevel];
  if (!row) return {};

  return {
    ["pact_slots"]: {
      resourceId: "pact_slots",
      max: row.slots,
      min: 0,
      current: row.slots,
    },
  };
}

export function buildSpellSlots(character: Character): CharacterResources {
  let characterSpellSlots: CharacterResources = {};

  let hasStandardCaster = false;
  let hasWarlock = false;

  for (const instanceId of character.classes.order) {
    const classInstance = character.classes.byId[instanceId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    const spellcastingTemplate =
      classTemplate.spellcastingTemplate ??
      (classInstance.subclassId
        ? getSubclassTemplateById(classInstance.subclassId).spellcastingTemplate
        : undefined);

    if (!spellcastingTemplate) continue;

    if (spellcastingTemplate.kind === "pact") {
      hasWarlock = true;
    } else {
      hasStandardCaster = true;
    }
  }

  if (hasStandardCaster) {
    characterSpellSlots = {
      ...buildStandardSpellSlots(getTotalCasterLevel(character)),
    };
  }

  if (hasWarlock) {
    const warlockInstance = getClassInstanceByTemplateId(
      character.classes,
      "warlock",
    );
    if (warlockInstance) {
      characterSpellSlots = {
        ...characterSpellSlots,
        ...buildPactMagicSlots(warlockInstance.level),
      };
    }
  }

  return characterSpellSlots;
}
