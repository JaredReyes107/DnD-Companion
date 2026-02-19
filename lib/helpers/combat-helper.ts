import { Character } from "@/game/types/instances/Character";

export function buildCombatState(character: Character): Character {
  const characterInstance = {
    ...character,
    combatState: {
      initiativeOrder: 1,

      actionEconomy: {
        actions: { max: 1, current: 1 },
        bonusActions: { max: 1, current: 1 },
        reactions: { max: 1, current: 1 },
      },

      deathSaves: {
        successes: 0,
        failures: 0,
      },

      conditions: [],
      modifiers: {},
    },
  };

  return characterInstance;
}
