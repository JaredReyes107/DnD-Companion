import { RuntimeModifierInstance } from "../../data/templates/stats.types";

export type CombatState = {
  initiativeOrder: number;
  initiativeRoll?: number;

  actionEconomy: {
    actions: { current: number; max: number };
    bonusActions: { current: number; max: number };
    reactions: { current: number; max: number };
  };

  deathSaves: {
    successes: number;
    failures: number;
  };

  conditions: string[];
  runtimeModifiers: Record<string, RuntimeModifierInstance>;
};
