import { Character } from "@/core/entities/character/Character";
import { getTotalCharacterLevel } from "./character-multiclassing";
import { ResolvedBase } from "@/core/entities/rules/resolved-base";

export function getBaseProficiencyBonus(character: Character): number {
  const totalLevel = getTotalCharacterLevel(character.classes);
  return Math.trunc((totalLevel + 3) / 4) + 1;
}

export function getRawBase(character: Character): ResolvedBase {
  return {
    abilityScores: character.baseAbilityScores,
    proficiencyBonus: getBaseProficiencyBonus(character),
  };
}

export function getAbilityModifier(score: number): number {
  return Math.round((score - 10.5) / 2);
}
