import { Character } from "@/core/entities/character/Character";
import {
  CostOption,
  ParamAssignment,
  PaymentCheck,
} from "@/core/entities/actions/cost-option";
import {
  evaluateExpr,
  isSatisfied,
} from "@/core/rules/predicate/evaluate-predicate";
import {
  ResourceContext,
  resourceCurrent,
  resourceMax,
} from "@/core/rules/character/resource-max";
import { applyResourceDelta } from "@/core/rules/character/resource-spend";
import { withParams } from "./payment-context";
import { candidateResources, rangeBounds } from "./cost-params";

const fail = (
  failure: Extract<PaymentCheck, { ok: false }>["failure"],
): PaymentCheck => ({ ok: false, failure });

/** Pure. Nothing is mutated, and nothing is clamped: a shortfall or an overflow fails. */
export function validatePayment(
  character: Character,
  option: CostOption,
  params: ParamAssignment,
  ctx: ResourceContext,
): PaymentCheck {
  const pctx = withParams(ctx, params);
  if (!isSatisfied(option.requires, pctx, "closed"))
    return fail({ kind: "requirement" });

  for (const def of option.params ?? []) {
    const v = params[def.id];
    if (def.kind === "range") {
      if (v?.kind !== "range")
        return fail({ kind: "missingParam", paramId: def.id });
      const b = rangeBounds(def, pctx);
      if (!b) return fail({ kind: "unresolvable" });
      if (!Number.isInteger(v.value) || v.value < b.min || v.value > b.max)
        return fail({ kind: "outOfRange", paramId: def.id, ...b });
    } else {
      if (v?.kind !== "resource")
        return fail({ kind: "missingParam", paramId: def.id });
      if (!candidateResources(character, def, ctx).includes(v.resourceId))
        return fail({ kind: "invalidParam", paramId: def.id });
    }
  }

  // Same resource on several lines is summed, so the bounds are checked on the net change.
  const totals = new Map<string, number>();
  for (const line of option.lines) {
    const p =
      "param" in line.resource ? params[line.resource.param] : undefined;
    const id =
      "resourceId" in line.resource
        ? line.resource.resourceId
        : p?.kind === "resource"
          ? p.resourceId
          : undefined;
    const raw = evaluateExpr(line.delta, pctx);
    if (!id || raw === undefined) return fail({ kind: "unresolvable" });
    totals.set(id, (totals.get(id) ?? 0) + Math.trunc(raw));
  }

  for (const [resourceId, delta] of totals) {
    if (!character.resources[resourceId])
      return fail({ kind: "missingResource", resourceId });
    const next = resourceCurrent(character, resourceId, ctx) + delta;
    if (next < 0) return fail({ kind: "insufficient", resourceId });
    if (next > resourceMax(character, resourceId, ctx))
      return fail({ kind: "overflow", resourceId });
  }

  return {
    ok: true,
    changes: [...totals]
      .map(([resourceId, delta]) => ({ resourceId, delta }))
      .filter((c) => c.delta !== 0),
  };
}

export function applyPayment(
  character: Character,
  changes: { resourceId: string; delta: number }[],
  ctx: ResourceContext,
): Character {
  return changes.reduce(
    (c, ch) => applyResourceDelta(c, ch.resourceId, ch.delta, ctx),
    character,
  );
}

export type PayResult =
  | { ok: true; character: Character }
  | Extract<PaymentCheck, { ok: false }>;

/** Validate, then apply. A failure returns the original character untouched. */
export function pay(
  character: Character,
  option: CostOption,
  params: ParamAssignment,
  ctx: ResourceContext,
): PayResult {
  const check = validatePayment(character, option, params, ctx);
  return check.ok
    ? { ok: true, character: applyPayment(character, check.changes, ctx) }
    : check;
}
