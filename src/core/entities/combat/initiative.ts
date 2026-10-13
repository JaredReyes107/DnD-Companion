import { Character } from "@/core/entities/character/Character";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";
import { ResolvedBase } from "../rules/resolved-base";

export function getInitiativeBonus(base: ResolvedBase): number {
  return getAbilityModifier(base.abilityScores.DEX);
}

export function cycleInitiativeOrder(character: Character): Character {
  if (!character.combatState) {
    return character;
  }

  const updatedCharacter = {
    ...character,
    combatState: {
      ...character.combatState,
      initiativeOrder:
        character.combatState.initiativeOrder < 10
          ? character.combatState.initiativeOrder + 1
          : 1,
    },
  };

  return updatedCharacter;
}
