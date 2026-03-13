import { Ability } from "../../entities/rules/ability/ability.types";
import { DiceProvider } from "../../systems/dice/DiceProvider";
import { ExecutionNode } from "./execution-node";

export interface RuleContext {
  attackerId?: string;
  targetId?: string;
  dice?: DiceProvider;

  attack?: {
    roll?: number;
    rollTotal?: number;
    targetAC?: number;
    isHit?: boolean;
    isCritical?: boolean;
    criticalThreshold?: number;
  };

  savingThrow?: {
    dc: number;
    ability: Ability;
    roll?: number;
    rollTotal?: number;
    isSuccess?: boolean;
    effectOutcome?: "none" | "half" | "full";
  };

  [key: string]: unknown;
}

export interface RuleHandler {
  id: string;
  node: ExecutionNode;
  priority: number;
  execute(context: RuleContext): void;
}
