import { EncounterState } from "../../entities/combat/EncounterState";
import { InitiativeState } from "../../entities/combat/InitiativeState";
import { DiceProvider } from "../../systems/dice/DiceProvider";

export function rollInitiative(
  participants: Record<
    string,
    { id: string; initiative: number; dexModifier: number }
  >,
  dice: DiceProvider,
): InitiativeState {
  const rolls = Object.values(participants).map((p) => ({
    id: p.id,
    roll: dice.roll(20, 1)[0] + p.initiative,
    dexModifier: p.dexModifier,
  }));

  rolls.sort((a, b) => {
    if (b.roll !== a.roll) {
      return b.roll - a.roll;
    }
    return b.dexModifier - a.dexModifier;
  });

  const order = rolls.map((r) => r.id);
  const scores: Record<string, number> = {};
  for (const r of rolls) {
    scores[r.id] = r.roll;
  }

  return { order, scores };
}

export function insertParticipant(
  initiative: InitiativeState,
  participantId: string,
  score: number,
): InitiativeState {
  const order = [...initiative.order];

  const index = order.findIndex(
    (id) => (initiative.scores[id] ?? -999) < score,
  );

  if (index === -1) {
    order.push(participantId);
  } else {
    order.splice(index, 0, participantId);
  }

  return {
    order,
    scores: {
      ...initiative.scores,
      [participantId]: score,
    },
  };
}

export function nextTurn(state: EncounterState): EncounterState {
  const next = state.activeTurn + 1;
  const newRound = next >= state.initiative.order.length;

  return {
    ...state,
    round: newRound ? state.round + 1 : state.round,
    activeTurn: newRound ? 0 : next,
  };
}
