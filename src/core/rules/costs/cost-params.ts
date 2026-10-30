import { Character } from "@/core/entities/character/Character";
import {
  RangeParamDef,
  ResourceParamDef,
} from "@/core/entities/actions/cost-option";
import { evaluateExpr } from "@/core/rules/predicate/evaluate-predicate";
import {
  ResourceContext,
  resolvedResource,
  resourceMax,
} from "@/core/rules/character/resource-max";
import { resourceRank } from "./payment-context";

/** Resources of the character that can fill a resource param, ordered by rank. */
export function candidateResources(
  character: Character,
  def: ResourceParamDef,
  ctx: ResourceContext,
): string[] {
  const min = def.minRank ? evaluateExpr(def.minRank, ctx) : null;
  const max = def.maxRank ? evaluateExpr(def.maxRank, ctx) : null;
  if (min === undefined || max === undefined) return []; // unresolvable bound

  return Object.keys(character.resources)
    .flatMap((id) => {
      const template = resolvedResource(id, ctx);
      if (!template || template.group !== def.group) return [];
      if (def.category && template.category !== def.category) return [];
      const rank = resourceRank(id, ctx);
      if (rank === undefined || resourceMax(character, id, ctx) <= 0) return [];
      if (min !== null && rank < min) return [];
      if (max !== null && rank > max) return [];
      return [{ id, rank }];
    })
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
