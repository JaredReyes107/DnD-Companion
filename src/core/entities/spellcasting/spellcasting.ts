import { Character } from "@/core/entities/character/Character";
import { SpellSlotLevel } from "@/core/entities/spellcasting/spell-slot-instance";
import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { ClassInstance } from "../character/class-instance";
import { SpellcastingTemplate } from "../rules/spellcasting-template";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";
import { Ability } from "../rules/ability/ability.types";
import { ResolvedBase } from "../rules/resolved-base";

export type SpellcastingEntry = {
  classInstanceId: string; // key in classes.byId / classes.order
  classInstance: ClassInstance;
  spellcastingTemplate: SpellcastingTemplate;
};

export type SpellcastingSource = {
  sourceId: string;
  ability: Ability;
  classInstanceId: string;
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

const CASTER_DIVISOR = { full: 1, half: 2, third: 3 } as const;

export function getTotalCasterLevel(character: Character): number {
  return getSpellcastingEntries(character).reduce(
    (total, { spellcastingTemplate: t, classInstance }) => {
      if (!t.progression) return total; // pact casters don't count
      const raw = classInstance.level / CASTER_DIVISOR[t.progression];
      return total + (t.roundUp ? Math.ceil(raw) : Math.floor(raw));
    },
    0,
  );
}

/**
 * Every independent spellcasting source on the character — one entry
 * per class or subclass that grants its own spellcastingTemplate.
 */
export function getCharacterSpellcastingSources(
  character: Character,
): SpellcastingSource[] {
  const sources: SpellcastingSource[] = [];

  for (const instanceId of character.classes.order) {
    const classInstance = character.classes.byId[instanceId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    const spellcastingTemplate =
      classTemplate.spellcastingTemplate ??
      (classInstance.subclassId
        ? getSubclassTemplateById(classInstance.subclassId).spellcastingTemplate
        : undefined);

    if (!spellcastingTemplate) continue;

    sources.push({
      sourceId: spellcastingTemplate.id,
      ability: spellcastingTemplate.ability,
      classInstanceId: instanceId,
    });
  }

  return sources;
}

export function getBaseSpellAttackModifierForSource(
  base: ResolvedBase,
  source: SpellcastingSource,
): number {
  return (
    getAbilityModifier(base.abilityScores[source.ability]) +
    base.proficiencyBonus
  );
}
export function getBaseSpellSaveDCForSource(
  base: ResolvedBase,
  source: SpellcastingSource,
): number {
  return (
    8 +
    getAbilityModifier(base.abilityScores[source.ability]) +
    base.proficiencyBonus
  );
}

export const PACT_MAGIC_TABLE: Record<
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
