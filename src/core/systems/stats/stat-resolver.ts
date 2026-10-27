import { ModifierInstance } from "../../entities/modifiers/Modifier";

import { Character } from "../../entities/character/Character";
import { StatModel } from "../../entities/rules/stats.types";
import { Ability } from "../../entities/rules/ability/ability.types";
import { EncounterState } from "../../entities/combat/encounter-state";
import {
  resolveCheckAbility,
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
import {
  matchesStatTarget,
  serializeStatModel,
} from "@/core/rules/shared/stat-targeting";
import {
  resolveStat,
  buildEvaluationContext,
  ResolvedStat,
} from "@/core/systems/stats/resolve-stats";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";
import { resolveBase, ResolvedBase } from "@/core/entities/rules/resolved-base";
import {
  refreshModifierPool,
  collectModifierPool,
} from "@/core/rules/character/modifiers-pool";

export const serializeStatTemplate = serializeStatModel;
export {
  resolveStat,
  ResolvedStat,
  buildEvaluationContext,
} from "@/core/systems/stats/resolve-stats";

function getBaseValue(
  stat: StatModel,
  character: Character,
  resolved: ResolvedBase,
): number {
  switch (stat.type) {
    case "ability":
      return resolved.abilityScores[stat.ability];
    case "check": {
      const ability = resolveCheckAbility(character, stat.nodeId);
      const abilityMod = ability
        ? getAbilityModifier(resolved.abilityScores[ability])
        : 0;
      const proficient = resolveCheckProficiency(character, stat.nodeId);
      // Expertise isn't counted here: it's a modifier adding PB a second time.
      return abilityMod + (proficient ? resolved.proficiencyBonus : 0);
    }
    case "derived":
      switch (stat.key) {
        case "maxHp":
          return character.hitPoints.currentMaximumHP;
        case "speed":
          return character.baseSpeed;
        case "initiative":
          return getInitiativeBonus(resolved);
        case "ac":
          return getArmorClass(resolved);
        case "proficiencyBonus":
          return resolved.proficiencyBonus;
        case "concentrationLimit":
          return 1;
        case "spellAttackModifier": {
          const sources = getCharacterSpellcastingSources(character);
          return sources.length === 0
            ? 0
            : getBaseSpellAttackModifierForSource(resolved, sources[0]);
        }
        case "spellSaveDC": {
          const sources = getCharacterSpellcastingSources(character);
          return sources.length === 0
            ? 0
            : getBaseSpellSaveDCForSource(resolved, sources[0]);
        }
      }
      break;
    case "custom":
      return 0;
  }
  return 0;
}

function buildAllStatModels(): StatModel[] {
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

  return [...saveStats, ...toolStats, ...skillStats, ...derivedStats];
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

function resolveAllStats(
  character: Character,
  runtimeModifiers: ModifierInstance[],
): ResolvedCharacter {
  const { base, stats: baseStats } = resolveBase(character, runtimeModifiers);
  const stats = new Map<string, ResolvedStat>(baseStats);
  const pool = refreshModifierPool(
    collectModifierPool(character, runtimeModifiers),
    character,
    base,
  );
  const evalContext = buildEvaluationContext(character);

  const resolveModel = (
    model: StatModel,
    baseValue: number,
    context: { sourceAbility?: Ability } = {},
  ) => {
    const id = serializeStatModel(model);
    stats.set(
      id,
      resolveStat(
        id,
        baseValue,
        gatherModifiersFor(model, pool, context),
        evalContext,
      ),
    );
  };

  for (const model of buildAllStatModels()) {
    resolveModel(model, getBaseValue(model, character, base));
  }

  for (const source of getCharacterSpellcastingSources(character)) {
    for (const key of ["attackModifier", "saveDC"] as const) {
      resolveModel(
        { type: "spellcasting", sourceId: source.sourceId, key },
        key === "attackModifier"
          ? getBaseSpellAttackModifierForSource(base, source)
          : getBaseSpellSaveDCForSource(base, source),
        { sourceAbility: source.ability },
      );
    }
  }
  return { stats };
}

// `statModel` must not be an ability score or PB. Read those from resolveBase.
export function resolveStatValue(
  character: Character,
  statModel: StatModel,
): number {
  const runtime = character.combatState
    ? Object.values(character.combatState.runtimeModifiers).map(
        (m) => m.modifier,
      )
    : [];
  const { base } = resolveBase(character, runtime);
  const pool = refreshModifierPool(
    collectModifierPool(character, runtime),
    character,
    base,
  );
  return resolveStat(
    serializeStatModel(statModel),
    getBaseValue(statModel, character, base),
    gatherModifiersFor(statModel, pool, {}),
    buildEvaluationContext(character),
  ).finalValue;
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
