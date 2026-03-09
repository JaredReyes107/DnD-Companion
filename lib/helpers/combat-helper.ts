import { Character } from "@/game/types/instances/Character";
import { CombatState } from "@/game/types/instances/combat-state";

export function buildCombatState(character: Character): CombatState {
  //This does literally nothing but get rid of the error about not using Character yet
  console.log(
    "Ignore this: " + character.combatState?.actionEconomy.actions.current,
  );

  const characterInstance = {
    initiativeOrder: 1,

    //TODO: Replace with the actual amount of actions, bonus actions and reactions
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
  };

  return characterInstance;
}
