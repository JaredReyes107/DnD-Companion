import { Character } from "../types/instances/character";

export function removeSuccess(character: Character): Character {
  if (!character.combatState) {
    return character;
  }

  const updateCharacter = {
    ...character,
    combatState: {
      ...character.combatState,
      deathSaves: {
        ...character.combatState.deathSaves,
        successes: Math.max(character.combatState.deathSaves.successes - 1, 0),
      },
    },
  };

  return updateCharacter;
}

export function addSuccess(character: Character): Character {
  if (!character.combatState) {
    return character;
  }

  const updateCharacter = {
    ...character,
    combatState: {
      ...character.combatState,
      deathSaves: {
        ...character.combatState.deathSaves,
        successes: Math.min(character.combatState.deathSaves.successes + 1, 3),
      },
    },
  };

  return updateCharacter;
}

export function removeFailure(character: Character): Character {
  if (!character.combatState) {
    return character;
  }

  const updateCharacter = {
    ...character,
    combatState: {
      ...character.combatState,
      deathSaves: {
        ...character.combatState.deathSaves,
        failures: Math.max(character.combatState.deathSaves.failures - 1, 0),
      },
    },
  };

  return updateCharacter;
}

export function addFailure(character: Character): Character {
  if (!character.combatState) {
    return character;
  }

  const updateCharacter = {
    ...character,
    combatState: {
      ...character.combatState,
      deathSaves: {
        ...character.combatState.deathSaves,
        failures: Math.min(character.combatState.deathSaves.failures + 1, 3),
      },
    },
  };

  return updateCharacter;
}
