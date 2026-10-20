import { Expr } from "../expr/expr";

export type Comparator = "<" | "<=" | "==" | "!=" | ">=" | ">";

export type Predicate =
  // composition
  | { type: "always" }
  | { type: "all"; of: Predicate[] }
  | { type: "any"; of: Predicate[] }
  | { type: "not"; of: Predicate }
  // numeric: covers resource, stat, hp and level gates
  | { type: "compare"; left: Expr; op: Comparator; right: Expr }
  // status
  | { type: "status"; statusId: string; present?: boolean } // default true
  // build state
  | { type: "proficiency"; nodeId: string; present?: boolean }
  | { type: "hasFeature"; featureId: string }
  | { type: "optionSelected"; optionId: string }
  // target-dependent (unknown until encounters have targets)
  | { type: "targetProficiency"; present?: boolean }
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
  minCharacterLevel: (n: number): Predicate => ({
    type: "compare",
    left: { type: "characterLevel" },
    op: ">=",
    right: { type: "const", value: n },
  }),
  minClassLevel: (
    classId: string,
    n: number,
    subclassId?: string,
  ): Predicate => ({
    type: "compare",
    left: { type: "classLevel", classId, subclassId },
    op: ">=",
    right: { type: "const", value: n },
  }),
};
