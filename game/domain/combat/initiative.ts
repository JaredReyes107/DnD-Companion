<<<<<<< HEAD:game/domain/combat/initiative.ts
import { Character } from "@/game/domain/character/Character";
import { getAbilityModifier as getAbilityModifier } from "../../mechanics/abilities-modifiers";

export function getInitiativeBonus(character: Character): number {
  const total = getAbilityModifier(character.baseAbilityScores.DEX);
=======
import { Character } from "@/game/types/instances/Character";
import { getAbilityModifier as getAbilityModifier } from "./abilities-modifiers";

export function getInitiativeBonus(character: Character): number {
  const total = getAbilityModifier(character.baseAbilityScores.DEX.value);
>>>>>>> main:game/mechanics/initiative.ts

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
