import {
  RuntimeModifierInstance,
  ActiveCombatModifier,
} from "@/core/entities/rules/stats.types";

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
  modifiers: Record<string, ActiveCombatModifier>;
  runtimeModifiers: Record<string, RuntimeModifierInstance>;
};
