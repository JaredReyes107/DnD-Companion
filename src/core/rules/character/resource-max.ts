import { Character } from "@/core/entities/character/Character";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { resolveBase } from "@/core/entities/rules/resolved-base";
import type { ResolvedBase } from "@/core/entities/rules/resolved-base";
import { getResourceRegistry } from "@/core/data/registries/resources.registry";
import { evaluateExpr } from "@/core/rules/expr/evaluate-expr"; // adjust path
import type { ExprContext } from "@/core/rules/expr/evaluate-expr"; // adjust path

/** Pure max evaluation. Infinity (Rage 20) survives floor; see TODO(unlimited). */
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
  return Math.max(0, Math.floor(value));
}

/** Max for a resource id (0 if the template is unknown). Needs no instance. */
export function resourceMax(
  character: Character,
  id: string,
  ctx: ExprContext,
): number {
  const template = getResourceRegistry()[id];
  return template ? resolveResourceMax(template, ctx) : 0;
}

/** max - spent, floored at 0. 0 if the character has no instance. */
export function resourceCurrent(
  character: Character,
  id: string,
  ctx: ExprContext,
): number {
  const instance = character.resources[id];
  if (!instance) return 0;
  return Math.max(0, resourceMax(character, id, ctx) - instance.spent);
}

/** Context with an injected resource resolver and cycle guard (a max referencing itself resolves to unknown). */
export function createResourceContext(
  character: Character,
  resolved: ResolvedBase,
): ExprContext {
  const ctx: ExprContext = { character, resolved };
  const visiting = new Set<string>();
  ctx.resolveResource = (id, field) => {
    if (!character.resources[id]) return 0;
    if (visiting.has(id)) {
      console.warn(`[resources] cyclic resource reference at "${id}"`);
      return undefined;
    }
    visiting.add(id);
    try {
      return field === "max"
        ? resourceMax(character, id, ctx)
        : resourceCurrent(character, id, ctx);
    } finally {
      visiting.delete(id);
    }
  };
  return ctx;
}

/** Build once per rebuild/render: resolveBase walks every modifier. */
export function buildResourceContext(character: Character): ExprContext {
  return createResourceContext(character, resolveBase(character).base);
}
