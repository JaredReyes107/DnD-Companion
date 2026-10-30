import { ParamAssignment } from "@/core/entities/actions/cost-option";
import { evaluateExpr } from "@/core/rules/predicate/evaluate-predicate";
import {
  ResourceContext,
  resolvedResource,
} from "@/core/rules/character/resource-max";

export function resourceRank(
  id: string,
  ctx: ResourceContext,
): number | undefined {
  const rank = resolvedResource(id, ctx)?.rank;
  if (!rank) return undefined;
  const value = evaluateExpr(rank, ctx);
  return value === undefined ? undefined : Math.floor(value);
}

/** The same context, plus the chosen params. Expr leaves of type "param" resolve through it. */
export function withParams(
  ctx: ResourceContext,
  params: ParamAssignment,
): ResourceContext {
  return {
    ...ctx,
    resolveParam: (id, field) => {
      const p = params[id];
      if (!p) return undefined;
      if (p.kind === "range") return field === "value" ? p.value : undefined;
      return field === "rank" ? resourceRank(p.resourceId, ctx) : undefined;
    },
  };
}
