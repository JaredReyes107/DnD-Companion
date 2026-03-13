import { InitiativeState } from "../../entities/combat/InitiativeState";
import { DiceProvider } from "../../systems/dice/DiceProvider";
import { RollState } from "../../entities/modifiers/RollState";
import { rollD20WithRollState } from "../dice/roll-utils";

export interface ParticipantRollingInfo {
  id: string;
  initiative: number;
  dexModifier: number;
  rollState?: RollState;
}

export function rollInitiative(
  participants: Record<string, ParticipantRollingInfo>,
  dice: DiceProvider,
): InitiativeState {
  const rolls = Object.values(participants).map((p) => ({
    id: p.id,
    roll: rollD20WithRollState(dice, p.rollState) + p.initiative,
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
