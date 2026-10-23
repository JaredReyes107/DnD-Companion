import { Character } from "@/core/entities/character/Character";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { resolveBase } from "@/core/entities/rules/resolved-base";
import { evaluateExpr, ExprContext } from "../predicate/evaluate-predicate";
/** Build once per rebuild, not per resource: resolveBase walks every modifier. */
export function buildResourceContext(character: Character): ExprContext {
  return { character, resolved: resolveBase(character).base };
}

export function resolveResourceMax(
  template: ResourceTemplate,
  ctx: ExprContext,
): number {
  const value = evaluateExpr(template.max, ctx);
  if (value === undefined) {
    console.warn(
      `[resources] max of "${template.id}" is unresolvable; using 0`,
    );
    return 0;
  }
  return Math.max(0, Math.floor(value)); // Infinity (Rage 20) survives floor, see TODO(unlimited)
}
