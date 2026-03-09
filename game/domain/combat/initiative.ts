import { Character } from "@/game/domain/character/Character";
import { getAbilityModifier } from "../../mechanics/abilities-modifiers";

export function getInitiativeBonus(character: Character): number {
  const total = getAbilityModifier(character.baseAbilityScores.DEX);

  return total;
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
