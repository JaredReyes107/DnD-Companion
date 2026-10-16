// src/core/entities/rules/predicate/predicate.ts
import { StatModel } from "@/core/entities/rules/stats.types";

export type Comparator = "<" | "<=" | "==" | "!=" | ">=" | ">";

/** Anything that reads as a number. Shared later by formulas and scaling. */
export type ValueRef =
  | { type: "const"; value: number }
  | { type: "resource"; resourceId: string; field?: "current" | "max" } // default "current"
  | { type: "hp"; field: "current" | "max" | "temp" }
  | { type: "stat"; stat: StatModel }
  | { type: "characterLevel" }
  | { type: "classLevel"; classId: string };

export type Predicate =
  // composition
  | { type: "always" }
  | { type: "all"; of: Predicate[] }
  | { type: "any"; of: Predicate[] }
  | { type: "not"; of: Predicate }
  // numeric: covers resource, stat, hp and level gates
  | { type: "compare"; left: ValueRef; op: Comparator; right: ValueRef }
  // status
  | { type: "status"; statusId: string; present?: boolean } // default true
  // build state
  | { type: "proficiency"; nodeId: string; present?: boolean }
  | { type: "hasFeature"; featureId: string }
  | { type: "optionSelected"; optionId: string }
  // target-dependent (unknown until encounters have targets)
  | { type: "targetAttackType"; value: "melee" | "ranged" }
  | { type: "targetStatus"; statusId: string }
  | { type: "targetWithinRange"; feet: number }
  // non-portable escape hatch, resolved by name from a registry
  | { type: "custom"; id: string };

// Readable constructors so data files don't turn into JSON soup.
export const P = {
  always: (): Predicate => ({ type: "always" }),
  all: (...of: Predicate[]): Predicate => ({ type: "all", of }),
  any: (...of: Predicate[]): Predicate => ({ type: "any", of }),
  not: (of: Predicate): Predicate => ({ type: "not", of }),
  status: (statusId: string, present = true): Predicate => ({
    type: "status",
    statusId,
    present,
  }),
  resourceAtLeast: (resourceId: string, n: number): Predicate => ({
    type: "compare",
    left: { type: "resource", resourceId },
    op: ">=",
    right: { type: "const", value: n },
  }),
  hpBelow: (n: number): Predicate => ({
    type: "compare",
    left: { type: "hp", field: "current" },
    op: "<",
    right: { type: "const", value: n },
  }),
  minClassLevel: (classId: string, n: number): Predicate => ({
    type: "compare",
    left: { type: "classLevel", classId },
    op: ">=",
    right: { type: "const", value: n },
  }),
};
