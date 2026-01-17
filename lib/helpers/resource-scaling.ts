import { Character } from "@/game/types/instances/character";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/game/rules/abilities-modifiers";
import { getTotalCharacterLevel } from "@/game/rules/character-multiclassing";

export function evaluateFormula(formula: string, character: Character): number {
  switch (formula) {
    case "PB":
      return getProficiencyBonus(character);

    case "CHA":
      return getAbilityModifier(character.abilityScores.CHA.value);

    case "level":
      return getTotalCharacterLevel(character.classes);

    default:
      return 0;
  }
}
