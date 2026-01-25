import { Character } from "@/game/types/instances/character";
import { StatId, Stat, StatModifier } from "@/game/types/templates/stats";
import { ABILITY_ORDER } from "../types/templates/abilities-scores";
import { getInitiativeBonus } from "./initiative-roll";
import { getArmorClass } from "./armor-class";

export type ResolvedStat = {
  stat: Stat;
  finalValue: number;
  modifiers: StatModifier[];
};

function resolveStat(stat: Stat, modifiers: StatModifier[]): ResolvedStat {
  let value = stat.base;

  const adds = modifiers.filter((m) => m.mode === "add");
  const multiplies = modifiers.filter((m) => m.mode === "multiply");
  const sets = modifiers.filter((m) => m.mode === "override");

  for (const mod of adds) {
    value += mod.value as number;
  }

  for (const mod of multiplies) {
    value *= mod.value as number;
  }

  if (sets.length > 0) {
    value = sets[sets.length - 1].value as number;
  }

  return {
    stat,
    finalValue: Math.floor(value),
    modifiers,
  };
}

export type ResolvedCharacter = {
  stats: Record<StatId, ResolvedStat>;
};

export function resolveOutOfCombat(character: Character): ResolvedCharacter {
  const resolvedStats: Partial<Record<StatId, ResolvedStat>> = {};

  // Resolve AbilityScores
  for (const abilityScore of ABILITY_ORDER) {
    const relevantModifiers = Object.values(character.statModifiers).filter(
      (m) => m.statId === abilityScore && m.scope === "persistent",
    );

    const statObject: Stat = {
      statId: abilityScore,
      base: character.baseAbilityScores[abilityScore].value,
    };

    resolvedStats[abilityScore] = resolveStat(statObject, relevantModifiers);
  }

  // Resolve the rest of stats
  const otherStats = ["maxHP", "speed", "initiative", "ac"];
  for (const statName of otherStats) {
    const relevantModifiers = Object.values(character.statModifiers).filter(
      (m) => m.statId === statName && m.scope === "persistent",
    );

    let value = 0;

    switch (statName) {
      case "maxHP":
        value = character.baseMaximumHP;
        break;
      case "speed":
        value = character.baseSpeed;
        break;
      case "initiative":
        value = getInitiativeBonus(character);
        break;
      case "ac":
        value = getArmorClass(character);
        break;
    }

    const statObject: Stat = {
      statId: statName,
      base: value,
    };

    resolvedStats[statName] = {
      ...resolvedStats,
      ...resolveStat(statObject, relevantModifiers),
    };
  }

  return {
    stats: resolvedStats as Record<StatId, ResolvedStat>,
  };
}

export function resolveInCombat(character: Character): ResolvedCharacter {
  const base = resolveOutOfCombat(character);

  if (!character.combatState) return base;

  const combatModifiers = Object.values(character.combatState.modifiers);

  const resolvedStats: Partial<Record<StatId, ResolvedStat>> = {};

  for (const [statId, resolved] of Object.entries(base.stats)) {
    const additionalModifiers = combatModifiers.filter(
      (m) => m.statId === statId,
    );

    resolvedStats[statId as StatId] = resolveStat(
      {
        statId: statId as StatId,
        base: resolved.finalValue,
      },
      [...resolved.modifiers, ...additionalModifiers],
    );
  }

  return {
    stats: resolvedStats as Record<StatId, ResolvedStat>,
  };
}
