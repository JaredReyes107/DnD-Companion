import { RuntimeModifierInstance } from "../../data/templates/stats.types";

export type CombatState = {
  round: number;
  currentTurnIndex: number;

  initiativeOrder: number;
  initiativeRoll?: number;

  actionEconomy: {
    actions: { max: number; current: number };
    bonusActions: { max: number; current: number };
    reactions: { max: number; current: number };
  };

  deathSaves: {
    successes: number;
    failures: number;
  };

  conditions: string[];
  runtimeModifiers: Record<string, RuntimeModifierInstance>;
};
