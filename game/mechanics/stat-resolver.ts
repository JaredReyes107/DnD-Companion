/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "@/game/types/instances/Character";
import { StatModel, Stat, StatModifier } from "@/game/types/templates/stats";
import { ABILITY_ORDER } from "../types/templates/abilities-scores";
import { SKILL_KEYS } from "../base-data/SKILLS";
import { getInitiativeBonus } from "./initiative";
import { getArmorClass } from "./armor-class";
import { getSavingThrowModifier } from "./saving-throws-modifiers";
import { getSkillModifier } from "./skills-modifiers";
import { getSpellAttackModifier, getSpellSaveDC } from "./spellcasting";

export type ResolvedStat = {
  stat: Stat;
  finalValue: number;
  modifiers: StatModifier[];
};

function isSameStat(
  a: StatModel | undefined,
  b: StatModel | undefined,
): boolean {
  if (!a || !b) return false;

  if (a.type !== b.type) return false;

  switch (a.type) {
    case "ability":
    case "save":
      return a.ability === (b as any).ability;
    case "skill":
      return a.skill.skillId === (b as any).skill.skillId;
    case "derived":
    case "custom":
      return a.key === (b as any).key;
  }
}

function resolveStat(stat: Stat, modifiers: StatModifier[]): ResolvedStat {
  let value = stat.base;

  const sorted = [...modifiers].sort(
    (a, b) => (a.priority ?? 0) - (b.priority ?? 0),
  );

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
    stat,
    finalValue: Math.floor(value),
    modifiers: sorted,
  };
}

export type ResolvedCharacter = {
  stats: Map<string, ResolvedStat>;
};

export function serializeStatTemplate(statTemplate: StatModel): string {
  switch (statTemplate.type) {
    case "ability":
      return `ability:${statTemplate.ability}`;
    case "save":
      return `save:${statTemplate.ability}`;
    case "skill":
      return `skill:${statTemplate.skill.skillId}`;
    case "derived":
      return `derived:${statTemplate.key}`;
    case "custom":
      return `custom:${statTemplate.key}`;
  }
}

export function resolveOutOfCombat(character: Character): ResolvedCharacter {
  const stats = new Map<string, ResolvedStat>();

  const abilityStats: StatModel[] = ABILITY_ORDER.map(
    (item): StatModel => ({
      type: "ability",
      ability: item,
    }),
  );

  const saveStats: StatModel[] = ABILITY_ORDER.map(
    (item): StatModel => ({
      type: "save",
      ability: item,
    }),
  );

  const skillStats: StatModel[] = SKILL_KEYS.map(
    (item): StatModel => ({
      type: "skill",
      skill: character.skills[item],
    }),
  );

  const derivedStats: StatModel[] = [
    { type: "derived", key: "maxHp" },
    { type: "derived", key: "speed" },
    { type: "derived", key: "initiative" },
    { type: "derived", key: "ac" },
    { type: "derived", key: "spellAttackModifier" },
    { type: "derived", key: "spellSaveDC" },
  ];

  const allStats = [
    ...abilityStats,
    ...saveStats,
    ...skillStats,
    ...derivedStats,
  ];

  for (const stat of allStats) {
    let base = 0;

    if (stat.type === "ability") {
      base = character.baseAbilityScores[stat.ability].value;
    } else if (stat.type === "save") {
      base = getSavingThrowModifier(
        character,
        character.savingThrows[stat.ability],
      );
    } else if (stat.type === "skill") {
      base = getSkillModifier(character, character.skills[stat.skill.skillId]);
    } else if (stat.type === "derived") {
      switch (stat.key) {
        case "maxHp":
          base = character.hitPoints.currentMaximumHP;
          break;
        case "speed":
          base = character.baseSpeed;
          break;
        case "initiative": {
          base = getInitiativeBonus(character);
          break;
        }
        case "ac":
          base = getArmorClass(character);
          break;
        case "spellAttackModifier": {
          base = getSpellAttackModifier(character);
          break;
        }
        case "spellSaveDC":
          base = getSpellSaveDC(character);
          break;
      }
    }

    const relevantModifiers = Object.values(character.statModifiers).filter(
      (modifier) =>
        modifier.scope === "persistent" && isSameStat(modifier.statModel, stat),
    );

    const resolved = resolveStat({ statModel: stat, base }, relevantModifiers);

    stats.set(serializeStatTemplate(stat), resolved);
  }

  return { stats };
}

export function resolveInCombat(character: Character): ResolvedCharacter {
  const stats = new Map<string, ResolvedStat>();

  const base = resolveOutOfCombat(character);

  if (!character.combatState) return base;

  const combatModifiers = Object.values(character.combatState.modifiers);

  for (const [key, resolvedBase] of base.stats.entries()) {
    const statTemplate = resolvedBase.stat.statModel;

    const baseValue = resolvedBase.stat.base;

    const persistentModifiers = resolvedBase.modifiers;

    const combatRelevant = combatModifiers.filter((m) =>
      isSameStat(m.statModel, statTemplate),
    );

    const finalResolved = resolveStat(
      {
        statModel: statTemplate,
        base: baseValue,
      },
      [...persistentModifiers, ...combatRelevant],
    );

    stats.set(key, finalResolved);
  }

  return { stats };
}
