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
} from "../../rules/modifiers/stacking";

import { Character } from "../../entities/character/Character";
import { StatModel } from "../../entities/rules/stats.types";
import { ABILITIES, Ability } from "../../entities/rules/ability/ability.types";
import { EncounterState } from "../../entities/combat/encounter-state";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/core/rules/character/abilities-modifiers";
import {
  resolveCheckAbility,
  resolveCheckExpertise,
  resolveCheckProficiency,
} from "@/core/rules/character/checks-helper";
import { getInitiativeBonus } from "../../entities/combat/initiative";
import { getArmorClass } from "../../rules/character/armor-class";
import {
  getBaseSpellAttackModifierForSource,
  getBaseSpellSaveDCForSource,
  getCharacterSpellcastingSources,
} from "../../entities/spellcasting/spellcasting";
import { getAllCheckNodeIdsByCategory } from "@/core/data/registries/check-nodes.registry";
import { matchesStatTarget } from "@/core/rules/shared/stat-targeting";
import { getStatusModifierInstances } from "@/core/rules/character/status-effects-helper";

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
  const stacked = applyStackingRules(activeModifiers);
  const ordered = sortModifiersByPriority(stacked);

  let finalValue = baseValue;

  for (const mod of ordered) {
    switch (mod.type) {
      case ModifierType.SET:
        finalValue = mod.value;
        break;
      case ModifierType.ADDITIVE:
        finalValue += mod.value;
        break;
      case ModifierType.MULTIPLICATIVE:
        finalValue *= mod.value;
        break;
      case ModifierType.FLOOR:
        finalValue = Math.max(finalValue, mod.value);
        break;
      case ModifierType.CAP:
        finalValue = Math.min(finalValue, mod.value);
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

export function serializeStatModel(statModel: StatModel): string {
  switch (statModel.type) {
    case "ability":
      return `ability:${statModel.ability}`;
    case "check":
      return `check:${statModel.nodeId}`;
    case "spellcasting":
      return `spellcasting:${statModel.sourceId}:${statModel.key}`;
    case "spellcastingByAbility":
      return `spellcastingByAbility:${statModel.ability}:${statModel.key}`;
    case "spellcastingGlobal":
      return `spellcastingGlobal:${statModel.key}`;
    case "derived":
      return `derived:${statModel.key}`;
    case "custom":
      return `custom:${statModel.key}`;
  }
}

export const serializeStatTemplate = serializeStatModel;

function getBaseValue(stat: StatModel, character: Character): number {
  switch (stat.type) {
    case "ability":
      return character.baseAbilityScores[stat.ability];
    case "check": {
      const ability = resolveCheckAbility(character, stat.nodeId);
      const abilityMod = ability
        ? getAbilityModifier(character.baseAbilityScores[ability])
        : 0;

      const proficient = resolveCheckProficiency(character, stat.nodeId);
      const expertise =
        proficient && resolveCheckExpertise(character, stat.nodeId);
      const pbMultiplier = expertise ? 2 : proficient ? 1 : 0;

      return abilityMod + pbMultiplier * getProficiencyBonus(character);
    }
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
        case "spellAttackModifier": {
          const sources = getCharacterSpellcastingSources(character);
          if (sources.length === 0) return 0;
          return getBaseSpellAttackModifierForSource(character, sources[0]);
        }
        case "spellSaveDC": {
          const sources = getCharacterSpellcastingSources(character);
          if (sources.length === 0) return 0;
          return getBaseSpellSaveDCForSource(character, sources[0]);
        }
        case "concentrationLimit":
          return 1;
      }
      break;
    case "custom":
      return 0;
  }
  return 0;
}

function buildAllStatModels(): StatModel[] {
  const abilityStats: StatModel[] = ABILITIES.map((ability) => ({
    type: "ability" as const,
    ability,
  }));

  const saveStats: StatModel[] = getAllCheckNodeIdsByCategory(
    "savingThrow",
  ).map((nodeId) => ({ type: "check" as const, nodeId }));

  const skillStats: StatModel[] = getAllCheckNodeIdsByCategory(
    "skillCheck",
  ).map((nodeId) => ({ type: "check" as const, nodeId }));

  const toolStats: StatModel[] = getAllCheckNodeIdsByCategory("toolCheck").map(
    (nodeId) => ({ type: "check" as const, nodeId }),
  );

  const derivedStats: StatModel[] = [
    { type: "derived" as const, key: "maxHp" as const },
    { type: "derived" as const, key: "speed" as const },
    { type: "derived" as const, key: "initiative" as const },
    { type: "derived" as const, key: "ac" as const },
    { type: "derived" as const, key: "spellAttackModifier" as const },
    { type: "derived" as const, key: "spellSaveDC" as const },
    { type: "derived" as const, key: "concentrationLimit" as const },
  ];

  return [
    ...abilityStats,
    ...saveStats,
    ...toolStats,
    ...skillStats,
    ...derivedStats,
  ];
}

export function resolveStatValue(
  character: Character,
  statModel: StatModel,
): number {
  const base = getBaseValue(statModel, character);
  const runtime = character.combatState
    ? Object.values(character.combatState.runtimeModifiers).map(
        (m) => m.modifier,
      )
    : [];
  const all = gatherAllModifiers(character, runtime);
  const relevant = gatherModifiersFor(statModel, all, {});
  return resolveStat(
    serializeStatModel(statModel),
    base,
    relevant,
    buildEvaluationContext(character),
  ).finalValue;
}

function gatherAllModifiers(
  character: Character,
  runtime: ModifierInstance[],
): ModifierInstance[] {
  return [
    ...Object.values(character.statModifiers),
    ...getStatusModifierInstances(character),
    ...runtime,
  ];
}

export type ResolvedCharacter = {
  stats: Map<string, ResolvedStat>;
};

function gatherModifiersFor(
  statModel: StatModel,
  allModifiers: ModifierInstance[],
  context: { sourceAbility?: Ability },
): ModifierInstance[] {
  return allModifiers.filter((m) =>
    matchesStatTarget(m.statModel, statModel, context),
  );
}

function buildEvaluationContext(character: Character): EvaluationContext {
  return {
    currentHp: character.hitPoints.currentHP,
    maxHp: character.hitPoints.currentMaximumHP,
    // targetIsRanged/targetIsMelee/targetStatuses/distanceToTarget intentionally
    // left unset here — those depend on a specific target in combat, which
    // isn't resolvable from the character alone. Out of scope for now
  };
}

function resolveAllStats(
  character: Character,
  extraModifiers: ModifierInstance[],
): ResolvedCharacter {
  const stats = new Map<string, ResolvedStat>();
  const allStats = buildAllStatModels();
  const allModifiers = gatherAllModifiers(character, extraModifiers);
  const evalContext = buildEvaluationContext(character);

  for (const statModel of allStats) {
    const base = getBaseValue(statModel, character);
    const relevant = gatherModifiersFor(statModel, allModifiers, {});
    const resolved = resolveStat(
      serializeStatModel(statModel),
      base,
      relevant,
      evalContext,
    );
    stats.set(serializeStatModel(statModel), resolved);
  }

  const spellcastingSources = getCharacterSpellcastingSources(character);
  for (const source of spellcastingSources) {
    for (const key of ["attackModifier", "saveDC"] as const) {
      const statModel: StatModel = {
        type: "spellcasting",
        sourceId: source.sourceId,
        key,
      };
      const base =
        key === "attackModifier"
          ? getBaseSpellAttackModifierForSource(character, source)
          : getBaseSpellSaveDCForSource(character, source);
      const relevant = gatherModifiersFor(statModel, allModifiers, {
        sourceAbility: source.ability,
      });
      const resolved = resolveStat(
        serializeStatModel(statModel),
        base,
        relevant,
        evalContext,
      );
      stats.set(serializeStatModel(statModel), resolved);
    }
  }

  return { stats };
}

export function resolveOutOfCombat(character: Character): ResolvedCharacter {
  return resolveAllStats(character, []);
}

export function resolveInCombat(
  character: Character,
  encounterState: EncounterState,
): ResolvedCharacter {
  const combatState = encounterState.participants[character.id];
  if (!combatState?.runtimeModifiers) return resolveOutOfCombat(character);

  const combatModifiers = Object.values(combatState.runtimeModifiers).map(
    (m) => m.modifier,
  );

  return resolveAllStats(character, combatModifiers);
}
