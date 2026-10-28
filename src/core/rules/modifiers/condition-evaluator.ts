import { Condition } from "@/core/entities/modifiers/Condition";
import {
  PredicateContext,
  isSatisfied,
} from "@/core/rules/predicate/evaluate-predicate";

export type EvaluationContext = PredicateContext;

export function evaluateCondition(
  condition: Condition | undefined,
  ctx: EvaluationContext,
): boolean {
  return isSatisfied(condition, ctx, "open");
}
