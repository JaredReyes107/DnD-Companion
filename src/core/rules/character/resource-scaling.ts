import { Character } from "@/core/entities/character/Character";
import { getScaling } from "@/core/data/registries/resource-scaling.registry";
import { ResourceGrantor } from "@/core/entities/rules/grantor";
import {
  ScalingFormula,
  ScalingBase,
} from "@/core/data/rules/scaling/scaling-formula";
import {
  ResourceBound,
  ScalingCondition,
} from "@/core/entities/rules/resource-template";

function resolveBase(
  base: ScalingBase,
  character: Character,
  grantor: ResourceGrantor,
): number {
  if (base.kind === "fixed") return base.value;
  const scaler = getScaling(base.id);
  if (!scaler) {
    console.warn(`Unknown scaler: ${base.id}`);
    return 0;
  }
  return scaler({ character, grantor, param: base.param });
}

function applyRounding(
  value: number,
  rounding: ScalingFormula["rounding"],
): number {
  switch (rounding) {
    case "ceil":
      return Math.ceil(value);
    case "round":
      return Math.round(value);
    case "floor":
    default:
      return Math.floor(value);
  }
}

export function evaluateFormula(
  formula: ScalingFormula,
  character: Character,
  grantor: ResourceGrantor,
): number {
  const base = resolveBase(formula.base, character, grantor);

  const result = (formula.steps ?? []).reduce((acc, step) => {
    switch (step.op) {
      case "add":
        return acc + step.value;
      case "subtract":
        return acc - step.value;
      case "multiply":
        return acc * step.value;
      case "divide":
        return acc / step.value;
    }
  }, base);

  // Rounding applied once at the end, not per-step, to avoid compounding error
  return applyRounding(result, formula.rounding);
}

function evaluateCondition(
  condition: ScalingCondition,
  character: Character,
  grantor: ResourceGrantor,
): boolean {
  const observed = resolveBase(condition.base, character, grantor);

  switch (condition.operator) {
    case ">=":
      return observed >= condition.value;
    case ">":
      return observed > condition.value;
    case "<=":
      return observed <= condition.value;
    case "<":
      return observed < condition.value;
    case "==":
      return observed === condition.value;
  }
}

/**
 * Resolves a ResourceBound to either a finite number or the "unbounded" sentinel.
 * Used for both min and max resolution on ResourceTemplate -> ResourceInstance.
 */
export function resolveBound(
  bound: ResourceBound,
  character: Character,
  grantor: ResourceGrantor,
): number | "unbounded" {
  switch (bound.kind) {
    case "value":
      return bound.amount;
    case "formula":
      return evaluateFormula(bound.formula, character, grantor);
    case "unbounded":
      return "unbounded";
    case "conditional":
      return evaluateCondition(bound.when, character, grantor)
        ? resolveBound(bound.ifTrue, character, grantor)
        : resolveBound(bound.ifFalse, character, grantor);
  }
}
