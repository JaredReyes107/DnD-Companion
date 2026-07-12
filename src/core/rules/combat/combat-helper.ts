import { Character } from "@/core/entities/character/Character";
import { CombatState } from "@/core/entities/combat/combat-state";

export function buildCombatState(character: Character): CombatState {
  const characterInstance: CombatState = {
    round: 1,
    currentTurnIndex: 0,
    initiativeOrder: 1,
    initiativeRoll: 10,
    // TODO: Increase max dinamically trough helper. 
    // Concentration doesn't matter only in combat
    concentrationSlots: {max: 1, active: []},

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
    modifiers: {},
    runtimeModifiers: {},
  };

  return characterInstance;
}
