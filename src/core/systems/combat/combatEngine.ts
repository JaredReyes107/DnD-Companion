import { CombatState } from "../../entities/combat/CombatState";
import { GameEvent } from "../../entities/modifiers/Event";
import { EngineConfig } from "../../entities/combat/EngineConfig";

export function startCombat(participants: string[]): CombatState {
  if (participants.length === 0) {
    throw new Error("Combat must have at least one participant.");
  }

  return {
    round: 1,
    turnIndex: 0,
    participants,
    activeEffects: [],
    activeAuras: [],
  };
}

export function nextTurn(state: CombatState): CombatState {
  const isLastParticipant = state.turnIndex === state.participants.length - 1;

  return {
    ...state,
    round: isLastParticipant ? state.round + 1 : state.round,
    turnIndex: isLastParticipant ? 0 : state.turnIndex + 1,
  };
}

export function resolveHybridAttackRoll(config: EngineConfig): number {
  const roll = config.diceProvider.roll(20, 1)[0];
  return roll;
}

export function dispatchEvent(
  state: CombatState,
  event: GameEvent,
): CombatState {
  return state;
}
