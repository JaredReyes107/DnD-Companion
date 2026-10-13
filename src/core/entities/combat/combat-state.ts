import {
  RuntimeModifierInstance,
  ActiveCombatModifier,
} from "@/core/entities/rules/stats.types";
import { AdvantageInstance } from "../rules/advantage/advantage-instance";
import { StatusInstance } from "./status-instance";

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

  statuses: StatusInstance[];
  modifiers: Record<string, ActiveCombatModifier>;
  runtimeModifiers: Record<string, RuntimeModifierInstance>;
  runtimeAdvantageInstances: Record<string, AdvantageInstance>;
};
