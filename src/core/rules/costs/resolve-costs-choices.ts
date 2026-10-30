import { Character } from "@/core/entities/character/Character";
import {
  CostOption,
  ParamAssignment,
  PaymentFailure,
} from "@/core/entities/actions/cost-option";
import { ResourceContext } from "@/core/rules/character/resource-max";
import { candidateResources, rangeBounds } from "./cost-params";
import { withParams } from "./payment-context";
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
