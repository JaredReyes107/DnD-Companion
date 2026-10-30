import { Expr } from "../rules/expr/expr";
import { Predicate } from "../rules/predicate/predicate";
import { ResourceCategory } from "../rules/resource-template";

/** QUANTITY: the player picks an integer in [min, max]. */
export type RangeParamDef = { id: string; kind: "range"; min: Expr; max: Expr };

/** IDENTITY: the player picks one resource of a group, optionally within a rank window. */
export type ResourceParamDef = {
  id: string;
  kind: "resource";
  group: string;
  /** Restricts candidates further, e.g. "spell_slots" excludes pact slots. */
  category?: ResourceCategory;
  minRank?: Expr;
  maxRank?: Expr;
};

export type ParamDef = RangeParamDef | ResourceParamDef;

export type ResourceRef = { resourceId: string } | { param: string };

/** Signed like modifyResource: negative spends, positive gains. */
export type CostLine = { resource: ResourceRef; delta: Expr };

export type CostOption = {
  id: string; // global (localized under costOptions), like action ids
  params?: ParamDef[];
  lines: CostLine[];
  requires?: Predicate;
};

export type ParamValue =
  | { kind: "range"; value: number }
  | { kind: "resource"; resourceId: string };
export type ParamAssignment = Record<string, ParamValue>;

export type ResourceChange = { resourceId: string; delta: number };

export type PaymentFailure =
  | { kind: "requirement" }
  | { kind: "missingParam"; paramId: string }
  | { kind: "invalidParam"; paramId: string }
  | { kind: "outOfRange"; paramId: string; min: number; max: number }
  | { kind: "missingResource"; resourceId: string }
  | { kind: "insufficient"; resourceId: string }
  | { kind: "overflow"; resourceId: string }
  | { kind: "unresolvable" };

export type PaymentCheck =
  | { ok: true; changes: ResourceChange[] }
  | { ok: false; failure: PaymentFailure };
