import {
  RuntimeModifierInstance,
  ActiveCombatModifier,
} from "@/core/entities/rules/stats.types";
import { AdvantageInstance } from "../rules/advantage/advantage-instance";

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

  // CombatState addition
  concentrationSlots: {
    max: number; // default 1 per RAW, homebrew-overridable
    active: string[]; // ids of RuntimeModifierInstance currently held under concentration
  };

  conditions: string[];
  modifiers: Record<string, ActiveCombatModifier>;
  runtimeModifiers: Record<string, RuntimeModifierInstance>;
  runtimeAdvantageInstances: Record<string, AdvantageInstance>;
};
