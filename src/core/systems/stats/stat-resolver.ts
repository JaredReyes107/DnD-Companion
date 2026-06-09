import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";
import {
  EvaluationContext,
  evaluateCondition,
} from "../../rules/modifiers/condition-evaluator";
import {
  applyStackingRules,
  sortModifiersByPriority,
  resolveModifierValue,
} from "../../rules/modifiers/stacking";

import { Character } from "../../entities/character/Character";
import {
  StatModel,
  StatModifierInstance,
} from "../../entities/rules/stats.types";
import { ABILITIES } from "../../entities/rules/ability/ability.types";
import { SKILL_KEYS } from "../../data/rules/SKILLS";
import { EncounterState } from "../../entities/combat/encounter-state";
import { getInitiativeBonus } from "../../entities/combat/initiative";
import { getArmorClass } from "../../rules/character/armor-class";
import { getSavingThrowModifier } from "../../rules/combat/saving-throws-modifiers";
import { getSkillModifier } from "../../rules/combat/skills-modifiers";
import {
  getSpellAttackModifier,
  getSpellSaveDC,
  hasSpellcasting,
} from "../../entities/spellcasting/spellcasting";

// ---------------------------------------------------------------------------
// New modifier-system resolveStat (used by tests and the new engine)
// ---------------------------------------------------------------------------

export interface ResolvedStat {
  statId: string;
  baseValue: number;
  finalValue: number;
  activeModifiers: ModifierInstance[];
}

export function resolveStat(
  statId: string,
  baseValue: number,
  modifiers: ModifierInstance[],
  context: EvaluationContext = {},
): ResolvedStat {
  const activeModifiers = modifiers.filter((mod) =>
    evaluateCondition(mod.condition, context),
  );
  const stacked = applyStackingRules(activeModifiers, context);
  const ordered = sortModifiersByPriority(stacked);

  let finalValue = baseValue;

  for (const mod of ordered) {
    const modValue = resolveModifierValue(mod, context);
    switch (mod.type) {
      case ModifierType.SET:
        finalValue = modValue;
        break;
      case ModifierType.ADDITIVE:
        finalValue += modValue;
        break;
      case ModifierType.MULTIPLICATIVE:
        finalValue *= modValue;
        break;
      case ModifierType.ADVANTAGE:
      case ModifierType.DISADVANTAGE:
      case ModifierType.REROLL:
        break;
    }
  }

  return {
    statId,
    baseValue,
    finalValue: Math.floor(finalValue),
    activeModifiers: ordered,
  };
}

// ---------------------------------------------------------------------------
// Legacy stat-model resolver (used by character sheet and combat tabs)
// ---------------------------------------------------------------------------

export type LegacyResolvedStat = {
  statModel: StatModel;
  base: number;
  finalValue: number;
  modifiers: StatModifierInstance[];
};

export type ResolvedCharacter = {
  stats: Map<string, LegacyResolvedStat>;
};

export function serializeStatModel(statModel: StatModel): string {
  switch (statModel.type) {
    case "ability":
      return `ability:${statModel.ability}`;
    case "save":
      return `save:${statModel.ability}`;
    case "skill":
      return `skill:${statModel.skill.skillId}`;
    case "derived":
      return `derived:${statModel.key}`;
    case "custom":
      return `custom:${statModel.key}`;
  }
}

// Keep the old export name so existing callers don't break.
export const serializeStatTemplate = serializeStatModel;

function isSameStat(
  a: StatModel | undefined,

  b: StatModel | undefined,
): boolean {
  if (!a || !b) return false;
  if (a.type !== b.type) return false;

  switch (a.type) {
    case "ability":
    case "save":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return a.ability === (b as any).ability;
    case "skill":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return a.skill.skillId === (b as any).skill.skillId;
    case "derived":
    case "custom":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return a.key === (b as any).key;
  }
}

function applyLegacyModifiers(
  statModel: StatModel,
  base: number,
  modifiers: StatModifierInstance[],
): LegacyResolvedStat {
  const sorted = [...modifiers].sort(
    (a, b) => (a.priority ?? 0) - (b.priority ?? 0),
  );

  let value = base;

  for (const mod of sorted) {
    switch (mod.mode) {
      case "add":
        value += mod.value;
        break;
      case "subtract":
        value -= mod.value;
        break;
      case "multiply":
        value *= mod.value;
        break;
      case "override":
        value = mod.value;
        break;
      case "min":
        value = Math.min(value, mod.value);
        break;
      case "max":
        value = Math.max(value, mod.value);
        break;
    }
  }

  return {
    statModel,
    base,
    finalValue: Math.floor(value),
    modifiers: sorted,
  };
}

function getBaseValue(stat: StatModel, character: Character): number {
  switch (stat.type) {
    case "ability":
      return character.baseAbilityScores[stat.ability];
    case "save":
      return getSavingThrowModifier(character, stat.ability);
    case "skill":
      return getSkillModifier(character, character.skills[stat.skill.skillId]);
    case "derived":
      switch (stat.key) {
        case "maxHp":
          return character.hitPoints.currentMaximumHP;
        case "speed":
          return character.baseSpeed;
        case "initiative":
          return getInitiativeBonus(character);
        case "ac":
          return getArmorClass(character);
        case "spellAttackModifier":
          return hasSpellcasting(character)
            ? getSpellAttackModifier(character)
            : 0;
        case "spellSaveDC":
          return hasSpellcasting(character) ? getSpellSaveDC(character) : 0;
      }
      break;
    case "custom":
      return 0;
  }
  return 0;
}

function buildAllStatModels(character: Character): StatModel[] {
  const abilityStats: StatModel[] = ABILITIES.map((ability) => ({
    type: "ability" as const,
    ability,
  }));

  const saveStats: StatModel[] = ABILITIES.map((ability) => ({
    type: "save" as const,
    ability,
  }));

  const skillStats: StatModel[] = SKILL_KEYS.map((skillId) => ({
    type: "skill" as const,
    skill: character.skills[skillId],
  }));

  const derivedStats: StatModel[] = [
    { type: "derived" as const, key: "maxHp" as const },
    { type: "derived" as const, key: "speed" as const },
    { type: "derived" as const, key: "initiative" as const },
    { type: "derived" as const, key: "ac" as const },
    { type: "derived" as const, key: "spellAttackModifier" as const },
    { type: "derived" as const, key: "spellSaveDC" as const },
  ];

  return [...abilityStats, ...saveStats, ...skillStats, ...derivedStats];
}

export function resolveOutOfCombat(character: Character): ResolvedCharacter {
  const stats = new Map<string, LegacyResolvedStat>();
  const allStats = buildAllStatModels(character);

  for (const statModel of allStats) {
    const base = getBaseValue(statModel, character);
    const relevantModifiers = Object.values(character.statModifiers).filter(
      (mod) => isSameStat(mod.statModel, statModel),
    );
    const resolved = applyLegacyModifiers(statModel, base, relevantModifiers);
    stats.set(serializeStatModel(statModel), resolved);
  }

  return { stats };
}

export function resolveInCombat(
  character: Character,
  encounterState: EncounterState,
): ResolvedCharacter {
  const passiveResolved = resolveOutOfCombat(character);

  const combatState = encounterState.participants[character.id];
  if (!combatState?.runtimeModifiers) return passiveResolved;

  const stats = new Map<string, LegacyResolvedStat>();

  const combatModifiers = Object.values(combatState.runtimeModifiers)
    .filter(
      (m) =>
        m.expiresAtRound === undefined ||
        m.expiresAtRound >= encounterState.currentRound,
    )
    .map((m) => m.modifier);

  for (const [key, resolvedBase] of passiveResolved.stats.entries()) {
    const relevantCombatMods = combatModifiers.filter((m) =>
      isSameStat(m.statModel, resolvedBase.statModel),
    );

    if (relevantCombatMods.length === 0) {
      stats.set(key, resolvedBase);
      continue;
    }

    const finalResolved = applyLegacyModifiers(
      resolvedBase.statModel,
      resolvedBase.base,
      [...resolvedBase.modifiers, ...relevantCombatMods],
    );

    stats.set(key, finalResolved);
  }

  return { stats };
}
