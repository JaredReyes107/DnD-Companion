import { CombatState } from "./combat-state";

export type EncounterState = {
  id: string;

  currentRound: number;
  currentTurnIndex: number;

  participants: Record<string, CombatState>;
};
