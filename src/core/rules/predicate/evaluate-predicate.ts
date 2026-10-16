// src/core/rules/predicate/evaluate-predicate.ts
import { Character } from "@/core/entities/character/Character";
import { StatModel } from "@/core/entities/rules/stats.types";
import {
  Predicate,
  ValueRef,
  Comparator,
} from "@/core/entities/rules/predicate/predicate";
import {
  getTotalCharacterLevel,
  getClassLevel,
} from "./../character/character-multiclassing";
import { resolveCheckProficiency } from "../character/checks-helper";
import { getActiveFeatures } from "../character/features-helper";

export interface PredicateContext {
  character: Character;
  /** Injected by callers that can resolve stats safely. Absent inside stat
   *  resolution itself (it would be circular), so `stat` refs become unknown there. */
  resolveStat?: (stat: StatModel) => number;
  /** Absent until encounters model targets. */
  target?: {
    attackType?: "melee" | "ranged";
    statusIds?: ReadonlySet<string>;
    distanceFeet?: number;
  };
}

/** Three-valued: true, false, or undefined = "can't tell". */
export type Tri = boolean | undefined;
export type UnknownPolicy = "open" | "closed";

/** Escape-hatch registry. Unregistered ids evaluate to unknown, never throw. */
const customPredicates = new Map<string, (ctx: PredicateContext) => boolean>();
export function registerCustomPredicate(
  id: string,
  fn: (ctx: PredicateContext) => boolean,
) {
  customPredicates.set(id, fn);
}

function compare(a: number, op: Comparator, b: number): boolean {
  switch (op) {
    case "<":
      return a < b;
    case "<=":
      return a <= b;
    case "==":
      return a === b;
    case "!=":
      return a !== b;
    case ">=":
      return a >= b;
    case ">":
      return a > b;
  }
}

export function evaluateValueRef(
  ref: ValueRef,
  ctx: PredicateContext,
): number | undefined {
  const { character } = ctx;
  switch (ref.type) {
    case "const":
      return ref.value;
    case "resource": {
      const r = character.resources[ref.resourceId];
      if (!r) return 0; // not owned = none available (a real answer, not unknown)
      return ref.field === "max" ? r.max : r.current;
    }
    case "hp":
      return ref.field === "current"
        ? character.hitPoints.currentHP
        : ref.field === "max"
          ? character.hitPoints.currentMaximumHP
          : character.hitPoints.temporalHP;
    case "stat":
      return ctx.resolveStat?.(ref.stat);
    case "characterLevel":
      return getTotalCharacterLevel(character.classes);
    case "classLevel":
      return getClassLevel(character.classes, ref.classId);
    default:
      return undefined; // value kind from a newer schema
  }
}

export function evaluatePredicate(p: Predicate, ctx: PredicateContext): Tri {
  const { character } = ctx;
  switch (p.type) {
    case "always":
      return true;

    case "all": {
      const r = p.of.map((c) => evaluatePredicate(c, ctx));
      if (r.includes(false)) return false;
      return r.includes(undefined) ? undefined : true;
    }
    case "any": {
      const r = p.of.map((c) => evaluatePredicate(c, ctx));
      if (r.includes(true)) return true;
      return r.includes(undefined) ? undefined : false;
    }
    case "not": {
      const r = evaluatePredicate(p.of, ctx);
      return r === undefined ? undefined : !r;
    }

    case "compare": {
      const a = evaluateValueRef(p.left, ctx);
      const b = evaluateValueRef(p.right, ctx);
      return a === undefined || b === undefined
        ? undefined
        : compare(a, p.op, b);
    }

    case "status": {
      // Out of combat there simply are no statuses: false, not unknown.
      const has = (character.combatState?.statuses ?? []).some(
        (s) => s.statusId === p.statusId,
      );
      return has === (p.present ?? true);
    }

    case "proficiency":
      return (
        resolveCheckProficiency(character, p.nodeId) === (p.present ?? true)
      );
    case "hasFeature":
      return getActiveFeatures(character).some((f) => f.id === p.featureId);
    case "optionSelected":
      return Object.values(character.featureChoices).some((c) =>
        c.selectedOptionIds.includes(p.optionId),
      );

    case "targetAttackType":
      return ctx.target?.attackType === undefined
        ? undefined
        : ctx.target.attackType === p.value;
    case "targetStatus":
      return ctx.target?.statusIds === undefined
        ? undefined
        : ctx.target.statusIds.has(p.statusId);
    case "targetWithinRange":
      return ctx.target?.distanceFeet === undefined
        ? undefined
        : ctx.target.distanceFeet <= p.feet;

    case "custom": {
      const fn = customPredicates.get(p.id);
      return fn ? fn(ctx) : undefined;
    }

    default:
      return undefined; // variant from a newer schema: fail open, don't crash
  }
}

/** The one call sites should use. Missing predicate = satisfied. */
export function isSatisfied(
  p: Predicate | undefined,
  ctx: PredicateContext,
  unknown: UnknownPolicy = "open",
): boolean {
  if (!p) return true;
  const r = evaluatePredicate(p, ctx);
  return r === undefined ? unknown === "open" : r;
}
