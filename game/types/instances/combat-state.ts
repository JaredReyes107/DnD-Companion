import { StatModifier } from "../templates/stats";

export type CombatState = {
  initiativeOrder: number;

  actionEconomy: {
    hasAction: boolean;
    hasBonusAction: boolean;
    hasReaction: boolean;
  };

  deathSaves: {
    successes: number;
    failures: number;
  };

  conditions: string[];
  modifiers: Record<string, StatModifier>;
};
