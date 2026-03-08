/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "@/game/domain/character/Character";
import {
  StatModel,
  StatModifierInstance,
} from "@/game/data/templates/stats.types";
import { ABILITIES } from "@/game/domain/rules/ability/ability.types";
import { SKILL_KEYS } from "../../data/base/SKILLS";
import { getInitiativeBonus } from "../../domain/combat/initiative";
import { getArmorClass } from "../../mechanics/armor-class";
import { getSavingThrowModifier } from "../../mechanics/saving-throws-modifiers";
import { getSkillModifier } from "../../mechanics/skills-modifiers";
import {
  getSpellAttackModifier,
  getSpellSaveDC,
  hasSpellcasting,
} from "@/game/domain/spellcasting/spellcasting";
import { EncounterState } from "@/game/domain/combat/encounter-state";

export type ResolvedStat = {
  statModel: StatModel;
  base: number;
  finalValue: number;
  modifiers: StatModifierInstance[];
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

function resolveStat(
  statModel: StatModel,
  base: number,
  modifiers: StatModifierInstance[],
): ResolvedStat {
  let value = base;

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
    statModel,
    base,
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

  const abilityStats: StatModel[] = ABILITIES.map(
    (item): StatModel => ({
      type: "ability",
      ability: item,
    }),
  );

  const saveStats: StatModel[] = ABILITIES.map(
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
      base = character.baseAbilityScores[stat.ability];
    } else if (stat.type === "save") {
      base = getSavingThrowModifier(character, stat.ability);
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
        case "initiative":
          base = getInitiativeBonus(character);
          break;
        case "ac":
          base = getArmorClass(character);
          break;
        case "spellAttackModifier":
          if (hasSpellcasting(character)) {
            base = getSpellAttackModifier(character);
          } else {
            base = 0;
          }
          break;
        case "spellSaveDC":
          if (hasSpellcasting(character)) {
            base = getSpellSaveDC(character);
          } else {
            base = 0;
          }
          break;
      }
    }

    const relevantModifiers = Object.values(character.statModifiers).filter(
      (modifier) => isSameStat(modifier.statModel, stat),
    );

    const resolved = resolveStat(stat, base, relevantModifiers);

    stats.set(serializeStatTemplate(stat), resolved);
  }

  return { stats };
}

export function resolveInCombat(
  character: Character,
  encounterState: EncounterState,
): ResolvedCharacter {
  const stats = new Map<string, ResolvedStat>();

  const passiveModifiers = resolveOutOfCombat(character);

  const combatState = encounterState.participants[character.id];
  if (!combatState || !combatState.runtimeModifiers) return passiveModifiers;

  const combatModifiers = Object.values(combatState.runtimeModifiers)
    .filter(
      (m) =>
        m.expiresAtRound === undefined ||
        m.expiresAtRound >= encounterState.currentRound,
    )
    .map((m) => m.modifier);

  for (const [key, resolvedBase] of passiveModifiers.stats.entries()) {
    const statTemplate = resolvedBase.statModel;

    const baseValue = resolvedBase.base;

    const persistentModifiers = resolvedBase.modifiers;

    const combatRelevant = combatModifiers.filter((m) =>
      isSameStat(m.statModel, statTemplate),
    );

    const finalResolved = resolveStat(statTemplate, baseValue, [
      ...persistentModifiers,
      ...combatRelevant,
    ]);

    stats.set(key, finalResolved);
  }

  return { stats };
}
