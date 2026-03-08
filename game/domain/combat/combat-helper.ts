import { Character } from "@/game/domain/character/Character";
import { CombatState } from "@/game/domain/combat/combat-state";

export function buildCombatState(character: Character): CombatState {
  const characterInstance = {
    initiativeOrder: 1,

    //TODO: Replace with the actual amount of actions, bonus actions and reactions
    actionEconomy: {
      actions: {
        max: character.actionLimits.actions,
        current: character.actionLimits.actions,
      },
      bonusActions: {
        max: character.actionLimits.bonusActions,
        current: character.actionLimits.bonusActions,
      },
      reactions: {
        max: character.actionLimits.reactions,
        current: character.actionLimits.reactions,
      },
    },

    deathSaves: {
      successes: 0,
      failures: 0,
    },

    conditions: [],
    runtimeModifiers: {},
  };

  return characterInstance;
}
