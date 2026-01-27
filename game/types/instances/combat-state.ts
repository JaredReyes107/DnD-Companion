import { StatModifier } from "../templates/stats";

export type CombatState = {
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
  modifiers: Record<string, StatModifier>;
};
