import { ExecutionNode } from "./execution-node";

export interface RuleContext {
  attackerId?: string;
  targetId?: string;

  attackRollTotal?: number;
  isHit?: boolean;
  isCriticalHit?: boolean;

  damageTotal?: number;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;

  [key: string]: unknown;
}

export interface RuleHandler {
  id: string;
  node: ExecutionNode;
  priority: number;
  execute(context: RuleContext): void;
}
