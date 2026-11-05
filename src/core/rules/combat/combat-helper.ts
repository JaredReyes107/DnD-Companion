import { Character } from "@/core/entities/character/Character";
import { CombatState } from "@/core/entities/combat/combat-state";

export function buildCombatState(character: Character): CombatState {
  const characterInstance: CombatState = {
    round: 1,
    currentTurnIndex: 0,
    initiativeOrder: 1,
    initiativeRoll: 10,

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

    statuses: [],
    modifiers: {},
    runtimeModifiers: {},
    runtimeAdvantageInstances: {},
  };

  return characterInstance;
}

/**
 * Ends this character's runtime combat state (statuses, runtime modifiers and
 * advantage, action economy, death saves, round). No rest effects. A no-op when
 * the character isn't in an encounter. Standalone hook for "end encounter".
 */
export function endCombat(character: Character): Character {
  if (!character.combatState) return character;
  return { ...character, combatState: buildCombatState(character) };
}
