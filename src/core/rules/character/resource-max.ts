import { Character } from "@/core/entities/character/Character";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { resolveBase } from "@/core/entities/rules/resolved-base";
import type { ResolvedBase } from "@/core/entities/rules/resolved-base";
import { getResourceRegistry } from "@/core/data/registries/resources.registry";
import { ExprContext, evaluateExpr } from "../predicate/evaluate-predicate";
import {
  buildOverrideContext,
  OverrideContext,
} from "../overrides/active-overrides";
import { resolveTemplateWith } from "../overrides/resolve-template";

/** ExprContext plus the active overrides. Overrides are optional so pure callers/tests need none. */
export type ResourceContext = ExprContext & { overrides?: OverrideContext };

const NO_OVERRIDES: OverrideContext = { active: [] };

/** Template after active overrides; undefined for unknown ids. */
export function resolvedResource(id: string, ctx: ResourceContext) {
  if (!(id in getResourceRegistry())) return undefined;
  return resolveTemplateWith("resource", id, ctx.overrides ?? NO_OVERRIDES)
    .template;
}

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
  ctx: ResourceContext,
): number {
  const template = resolvedResource(id, ctx);
  return template ? resolveResourceMax(template, ctx) : 0;
}

/** max - spent, floored at 0. 0 if the character has no instance. */
export function resourceCurrent(
  character: Character,
  id: string,
  ctx: ResourceContext,
): number {
  const instance = character.resources[id];
  if (!instance) return 0;
  return Math.max(0, resourceMax(character, id, ctx) - instance.spent);
}

/** Context with an injected resource resolver and cycle guard (a max referencing itself resolves to unknown). */
export function createResourceContext(
  character: Character,
  resolved: ResolvedBase,
  overrides?: OverrideContext,
): ResourceContext {
  const ctx: ResourceContext = { character, resolved, overrides };
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

/** Build once per rebuild/render: walks modifiers and active features. */
export function buildResourceContext(
  character: Character,
  extraOverrideIds: readonly string[] = [],
): ResourceContext {
  return createResourceContext(
    character,
    resolveBase(character).base,
    buildOverrideContext(character, extraOverrideIds),
  );
}

/** Resolved recharge for a resource id; undefined if unknown. */
export function resourceRecharge(id: string, ctx: ResourceContext) {
  return resolvedResource(id, ctx)?.recharge;
}
