import { Character } from "@/core/entities/character/Character";
import {
  CostOption,
  ParamAssignment,
  PaymentFailure,
  RangeParamDef,
  ResourceParamDef,
} from "@/core/entities/actions/cost-option";
import { evaluateExpr } from "@/core/rules/predicate/evaluate-predicate";
import {
  ResourceContext,
  resolvedResource,
  resourceMax,
} from "@/core/rules/character/resource-max";
import { resourceRank, withParams } from "./payment-context";
import { validatePayment } from "./payment";

export type RangeBound = { id: string; min: number; max: number };

/** One button on the board: an option plus a concrete choice of resource params. */
export type ResolvedCostChoice = {
  key: string;
  optionId: string;
  params: ParamAssignment; // resource params only; ranges are picked later
  ranges: RangeBound[];
  affordable: boolean;
  failure?: PaymentFailure;
};

/** Resources of the character that can fill a resource param, ordered by rank. */
export function candidateResources(
  character: Character,
  def: ResourceParamDef,
  ctx: ResourceContext,
): string[] {
  const bound = (e?: typeof def.minRank) => (e ? evaluateExpr(e, ctx) : null);
  const min = bound(def.minRank);
  const max = bound(def.maxRank);
  if (min === undefined || max === undefined) return []; // unresolvable bound

  return Object.keys(character.resources)
    .filter((id) => resolvedResource(id, ctx)?.group === def.group)
    .map((id) => ({ id, rank: resourceRank(id, ctx) }))
    .filter(
      (c): c is { id: string; rank: number } =>
        c.rank !== undefined &&
        resourceMax(character, c.id, ctx) > 0 &&
        (min === null || c.rank >= min) &&
        (max === null || c.rank <= max),
    )
    .sort((a, b) => a.rank - b.rank || a.id.localeCompare(b.id))
    .map((c) => c.id);
}

export function rangeBounds(
  def: RangeParamDef,
  ctx: ResourceContext,
): { min: number; max: number } | undefined {
  const min = evaluateExpr(def.min, ctx);
  const max = evaluateExpr(def.max, ctx);
  return min === undefined || max === undefined
    ? undefined
    : { min: Math.floor(min), max: Math.floor(max) };
}

// Cartesian product over the resource params. Candidate bounds don't see earlier params (documented limit).
function resourceAssignments(
  character: Character,
  option: CostOption,
  ctx: ResourceContext,
): ParamAssignment[] {
  let out: ParamAssignment[] = [{}];
  for (const def of option.params ?? []) {
    if (def.kind !== "resource") continue;
    const ids = candidateResources(character, def, ctx);
    out = out.flatMap((a) =>
      ids.map((id) => ({
        ...a,
        [def.id]: { kind: "resource" as const, resourceId: id },
      })),
    );
  }
  return out;
}

export function resolveCostChoices(
  character: Character,
  options: CostOption[],
  ctx: ResourceContext,
): ResolvedCostChoice[] {
  return options.flatMap((option) =>
    resourceAssignments(character, option, ctx).map(
      (params): ResolvedCostChoice => {
        const key = [
          option.id,
          ...Object.entries(params).map(
            ([p, v]) =>
              `${p}=${v.kind === "resource" ? v.resourceId : v.value}`,
          ),
        ].join("|");

        const pctx = withParams(ctx, params);
        const ranges: RangeBound[] = [];
        const probe: ParamAssignment = { ...params };

        for (const def of option.params ?? []) {
          if (def.kind !== "range") continue;
          const bounds = rangeBounds(def, pctx);
          if (!bounds)
            return {
              key,
              optionId: option.id,
              params,
              ranges,
              affordable: false,
              failure: { kind: "unresolvable" },
            };
          ranges.push({ id: def.id, ...bounds });
          if (bounds.max < bounds.min) {
            return {
              key,
              optionId: option.id,
              params,
              ranges,
              affordable: false,
              failure: { kind: "outOfRange", paramId: def.id, ...bounds },
            };
          }
          probe[def.id] = { kind: "range", value: bounds.min };
        }

        const check = validatePayment(character, option, probe, ctx);
        return check.ok
          ? { key, optionId: option.id, params, ranges, affordable: true }
          : {
              key,
              optionId: option.id,
              params,
              ranges,
              affordable: false,
              failure: check.failure,
            };
      },
    ),
  );
}
