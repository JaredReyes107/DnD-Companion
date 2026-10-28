import type { Ability } from "@/core/entities/rules/ability/ability.types";
import type { StatModel } from "@/core/entities/rules/stats.types";
import type { Predicate } from "@/core/entities/rules/predicate/predicate";

export type Rounding = "floor" | "ceil" | "round" | "trunc";

export type Expr =
  // leaves
  | { type: "const"; value: number }
  | { type: "abilityScore"; ability: Ability }
  | { type: "abilityMod"; ability: Ability }
  | { type: "proficiencyBonus" }
  | { type: "characterLevel" }
  | { type: "classLevel"; classId: string; subclassId?: string }
  | { type: "casterLevel" } // combined multiclass caster level (spell slot table index)
  | { type: "resource"; resourceId: string; field?: "current" | "max" }
  | { type: "hp"; field: "current" | "max" | "temp" }
  | { type: "stat"; stat: StatModel } // unknown during stat resolution (circular)
  // operators
  | { type: "add"; of: Expr[] }
  | { type: "sub"; left: Expr; right: Expr }
  | { type: "mul"; of: Expr[] }
  | { type: "div"; left: Expr; right: Expr; round?: Rounding } // default "floor"
  | { type: "min"; of: Expr[] }
  | { type: "max"; of: Expr[] }
  | { type: "clamp"; value: Expr; min: Expr; max: Expr }
  | { type: "if"; when: Predicate; then: Expr; else: Expr }
  // level-style lookup: largest key <= `by`; below the first key uses `below` (default 0)
  | { type: "table"; by: Expr; steps: Record<string, number>; below?: number };

export const E = {
  n: (value: number): Expr => ({ type: "const", value }),
  pb: (): Expr => ({ type: "proficiencyBonus" }),
  mod: (ability: Ability): Expr => ({ type: "abilityMod", ability }),
  score: (ability: Ability): Expr => ({ type: "abilityScore", ability }),
  charLevel: (): Expr => ({ type: "characterLevel" }),
  classLevel: (classId: string, subclassId?: string): Expr => ({
    type: "classLevel",
    classId,
    subclassId,
  }),
  casterLevel: (): Expr => ({ type: "casterLevel" }),
  resource: (resourceId: string, field?: "current" | "max"): Expr => ({
    type: "resource",
    resourceId,
    field,
  }),
  add: (...of: Expr[]): Expr => ({ type: "add", of }),
  sub: (left: Expr, right: Expr): Expr => ({ type: "sub", left, right }),
  mul: (...of: Expr[]): Expr => ({ type: "mul", of }),
  div: (left: Expr, right: Expr, round: Rounding = "floor"): Expr => ({
    type: "div",
    left,
    right,
    round,
  }),
  min: (...of: Expr[]): Expr => ({ type: "min", of }),
  max: (...of: Expr[]): Expr => ({ type: "max", of }),
  clamp: (value: Expr, min: Expr, max: Expr): Expr => ({
    type: "clamp",
    value,
    min,
    max,
  }),
  when: (when: Predicate, then: Expr, otherwise: Expr): Expr => ({
    type: "if",
    when,
    then,
    else: otherwise,
  }),
  table: (by: Expr, steps: Record<number, number>, below = 0): Expr => ({
    type: "table",
    by,
    steps: Object.fromEntries(Object.entries(steps)),
    below,
  }),
};
