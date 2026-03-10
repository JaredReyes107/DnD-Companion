import {
  EncounterState,
  CombatParticipant,
} from "../../entities/combat/EncounterState";
import { InitiativeState } from "../../entities/combat/InitiativeState";
import { GameEvent } from "../../entities/modifiers/Event";
import { EngineConfig } from "../../entities/combat/EngineConfig";

import { EventQueue } from "../events/event-queue";

export function startCombat(
  participants: Record<string, CombatParticipant>,
  initiative: InitiativeState,
  queue?: EventQueue,
): EncounterState {
  if (!participants || Object.keys(participants).length === 0) {
    throw new Error("Combat must have at least one participant.");
  }

  if (queue) {
    queue.enqueue(GameEvent.COMBAT_START, {
      participants: Object.keys(participants),
    });
    queue.enqueue(GameEvent.ROUND_START, { round: 1 });
    queue.enqueue(GameEvent.TURN_START, { participantId: initiative.order[0] });
  }

  return {
    round: 1,
    activeTurn: 0,
    participants,
    initiative,
    activeEffects: [],
    activeAuras: [],
  };
}

export function nextTurn(
  state: EncounterState,
  queue?: EventQueue,
): EncounterState {
  const currentParticipant = state.initiative.order[state.activeTurn];
  if (queue) {
    queue.enqueue(GameEvent.TURN_END, { participantId: currentParticipant });
  }

  const participantsArray = state.initiative.order;
  const isLastParticipant = state.activeTurn === participantsArray.length - 1;

  if (isLastParticipant && queue) {
    queue.enqueue(GameEvent.ROUND_END, { round: state.round });
  }

  const newRound = isLastParticipant ? state.round + 1 : state.round;
  const newActiveTurn = isLastParticipant ? 0 : state.activeTurn + 1;
  const nextParticipant = state.initiative.order[newActiveTurn];

  if (queue) {
    if (isLastParticipant) {
      queue.enqueue(GameEvent.ROUND_START, { round: newRound });
    }
    queue.enqueue(GameEvent.TURN_START, { participantId: nextParticipant });
  }

  return {
    ...state,
    round: newRound,
    activeTurn: newActiveTurn,
  };
}

export function resolveHybridAttackRoll(config: EngineConfig): number {
  const roll = config.diceProvider.roll(20, 1)[0];
  return roll;
}

export function dispatchEvent(
  state: EncounterState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _event: GameEvent,
): EncounterState {
  return state;
}
