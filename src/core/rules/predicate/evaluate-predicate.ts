// src/core/rules/predicate/evaluate-predicate.ts
import { Character } from "@/core/entities/character/Character";
import { StatModel } from "@/core/entities/rules/stats.types";
import {
  Predicate,
  Comparator,
} from "@/core/entities/rules/predicate/predicate";
import { getTotalCharacterLevel } from "./../character/character-multiclassing";
import { resolveCheckProficiency } from "../character/checks-helper";
import { getActiveFeatures } from "../character/features-helper";
import { ResolvedBase } from "@/core/entities/rules/resolved-base";
import { Expr, Rounding } from "@/core/entities/rules/expr/expr";
import {
  getRawBase,
  getAbilityModifier,
} from "../character/abilities-modifiers";

export interface ExprContext {
  character: Character;
  /** Resolved base for ability scores and PB. Absent = the raw base is used. */
  resolved?: ResolvedBase;
  /** The check node being resolved (Fire Rune, Jack of All Trades). */
  targetNodeId?: string;
  /** Absent inside stat resolution: `stat` leaves become unknown. */
  resolveStat?: (stat: StatModel) => number;
}

export interface PredicateContext extends ExprContext {
  target?: {
    attackType?: "melee" | "ranged";
    statusIds?: ReadonlySet<string>;
    distanceFeet?: number;
  };
}

const ROUND: Record<Rounding, (n: number) => number> = {
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
  trunc: Math.trunc,
};

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

export function evaluateExpr(e: Expr, ctx: ExprContext): number | undefined {
  const { character } = ctx;
  const base = () => ctx.resolved ?? getRawBase(character);
  const many = (xs: Expr[]): number[] | undefined => {
    const v = xs.map((x) => evaluateExpr(x, ctx));
    return v.includes(undefined) ? undefined : (v as number[]);
  };

  switch (e.type) {
    case "const":
      return e.value;
    case "abilityScore":
      return base().abilityScores[e.ability];
    case "abilityMod":
      return getAbilityModifier(base().abilityScores[e.ability]);
    case "proficiencyBonus":
      return base().proficiencyBonus;
    case "characterLevel":
      return getTotalCharacterLevel(character.classes);
    case "classLevel": {
      const inst = Object.values(character.classes.byId).find(
        (c) =>
          c.classId === e.classId &&
          (!e.subclassId || c.subclassId === e.subclassId),
      );
      return inst?.level ?? 0;
    }
    case "resource": {
      const r = character.resources[e.resourceId];
      return !r ? 0 : e.field === "max" ? r.max : r.current;
    }
    case "hp": {
      const h = character.hitPoints;
      return e.field === "current"
        ? h.currentHP
        : e.field === "max"
          ? h.currentMaximumHP
          : h.temporalHP;
    }
    case "stat":
      return ctx.resolveStat?.(e.stat);

    case "add": {
      const v = many(e.of);
      return v && v.reduce((a, b) => a + b, 0);
    }
    case "mul": {
      const v = many(e.of);
      return v && v.reduce((a, b) => a * b, 1);
    }
    case "min": {
      const v = many(e.of);
      return v && v.length ? Math.min(...v) : undefined;
    }
    case "max": {
      const v = many(e.of);
      return v && v.length ? Math.max(...v) : undefined;
    }
    case "sub": {
      const a = evaluateExpr(e.left, ctx),
        b = evaluateExpr(e.right, ctx);
      return a === undefined || b === undefined ? undefined : a - b;
    }
    case "div": {
      const a = evaluateExpr(e.left, ctx),
        b = evaluateExpr(e.right, ctx);
      return a === undefined || b === undefined || b === 0
        ? undefined
        : ROUND[e.round ?? "floor"](a / b);
    }
    case "clamp": {
      const v = many([e.value, e.min, e.max]);
      return v && Math.min(Math.max(v[0], v[1]), v[2]);
    }
    case "if": {
      const w = evaluatePredicate(e.when, ctx);
      return w === undefined
        ? undefined
        : evaluateExpr(w ? e.then : e.else, ctx);
    }
    case "table": {
      const v = evaluateExpr(e.by, ctx);
      if (v === undefined) return undefined;
      const hit = Object.keys(e.steps)
        .map(Number)
        .filter((k) => k <= v)
        .sort((a, b) => b - a)[0];
      return hit === undefined ? (e.below ?? 0) : e.steps[String(hit)];
    }
    default:
      return undefined; // variant from a newer schema
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
      const a = evaluateExpr(p.left, ctx);
      const b = evaluateExpr(p.right, ctx);
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

    case "targetProficiency":
      return ctx.targetNodeId === undefined
        ? undefined
        : resolveCheckProficiency(character, ctx.targetNodeId) ===
            (p.present ?? true);
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
