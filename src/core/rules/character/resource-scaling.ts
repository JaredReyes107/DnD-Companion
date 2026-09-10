import { Character } from "@/core/entities/character/Character";
import { getScaling } from "@/core/data/registries/resource-scaling.registry";
import { getClassInstanceByTemplateId } from "@/core/data/registries/classes.registry";
import { ResourceGrantor } from "@/core/entities/rules/grantor";
import {
  ScalingFormula,
  ScalingBase,
} from "@/core/data/rules/scaling/scaling-formula";
import {
  ResourceBound,
  ScalingCondition,
} from "@/core/entities/rules/resource-template";
import { evaluateComparator } from "../shared/comparator-helper";
import { isObtentionChainSafe } from "../shared/obtention-helper";
import { getResourcesFromChoices } from "./choices-helper";

/**
 * Picks which grantor's context to hand to a scaler when a resource has more
 * than one path to being granted (e.g. Channel Divinity via Cleric or Paladin).
 * Matches against a class/subclass the character actually has; falls back to
 * the first grantor for single-grantor resources or non-class-gated grants
 * (race/background/feat/homebrew), where selection is a no-op.
 */
function selectGrantor(
  grantors: ResourceGrantor[],
  character: Character,
): ResourceGrantor {
  if (grantors.length === 1) return grantors[0];

  const matching = grantors.find((g) => {
    if (g.system !== "feature") return false;
    if (!isObtentionChainSafe(g.obtainedVia)) return false;

    const via = g.obtainedVia.via;
    if (via === "class" || via === "subclass") {
      return (
        getClassInstanceByTemplateId(
          character.classes,
          g.obtainedVia.classId,
        ) !== undefined
      );
    }
    if (via === "choice") {
      // The resource's own id (featureId) is what an Option's `grants`
      // array actually references — poolId/grantedBy on the obtention is
      // provenance metadata, not needed for this eligibility check.
      return getResourcesFromChoices(character).has(g.featureId);
    }
    return true; // race/background/feat/homebrew grants aren't class-gated — trivially eligible
  });

  return matching ?? grantors[0];
}

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
  grantors: ResourceGrantor[],
): number {
  const grantor = selectGrantor(grantors, character);
  const base = resolveBase(formula.base, character, grantor);

  const result = (formula.steps ?? []).reduce((acc, step) => {
    const operand =
      "value" in step
        ? step.value
        : (() => {
            const scaler = getScaling(step.scalerId);
            if (!scaler) {
              console.warn(`Unknown scaler: ${step.scalerId}`);
              return 0;
            }
            return scaler({ character, grantor, param: step.param });
          })();

    switch (step.op) {
      case "add":
        return acc + operand;
      case "subtract":
        return acc - operand;
      case "multiply":
        return acc * operand;
      case "divide":
        return acc / operand;
    }
  }, base);

  return applyRounding(result, formula.rounding);
}

function evaluateCondition(
  condition: ScalingCondition,
  character: Character,
  grantor: ResourceGrantor,
): boolean {
  const observed = resolveBase(condition.base, character, grantor);
  return evaluateComparator(observed, condition.operator, condition.value);
}

export function resolveBound(
  bound: ResourceBound,
  character: Character,
  grantors: ResourceGrantor[],
): number | "unbounded" {
  switch (bound.kind) {
    case "value":
      return bound.amount;
    case "formula":
      return evaluateFormula(bound.formula, character, grantors);
    case "unbounded":
      return "unbounded";
    case "conditional": {
      const grantor = selectGrantor(grantors, character);
      return evaluateCondition(bound.when, character, grantor)
        ? resolveBound(bound.ifTrue, character, grantors)
        : resolveBound(bound.ifFalse, character, grantors);
    }
  }
}

export function getActiveGrantors(
  grantors: ResourceGrantor[],
  character: Character,
): ResourceGrantor[] {
  return grantors.filter((g) => {
    if (g.system !== "feature") return true;
    if (!isObtentionChainSafe(g.obtainedVia)) return false;

    const via = g.obtainedVia.via;
    if (via === "class" || via === "subclass") {
      return (
        getClassInstanceByTemplateId(
          character.classes,
          g.obtainedVia.classId,
        ) !== undefined
      );
    }
    if (via === "choice") {
      return getResourcesFromChoices(character).has(g.featureId);
    }
    return true;
  });
}
