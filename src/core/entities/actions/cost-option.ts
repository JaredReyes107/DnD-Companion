import { Predicate } from "../rules/predicate/predicate";
import { Num } from "../rules/expr/expr";

/** What the player picked on the board. */
export type PaymentChoice = { optionId: string; params: ParamAssignment };

/** QUANTITY: the player picks an integer in [min, max]. */
export type RangeParamDef = { id: string; kind: "range"; min: Num; max: Num };

export type ResourceParamDef = {
  id: string;
  kind: "resource";
  group: string;
  minRank?: Num;
  maxRank?: Num;
};

export type ParamDef = RangeParamDef | ResourceParamDef;

export type ResourceRef = { resourceId: string } | { param: string };

export type CostLine = {
  /** Override address. Defaults to the resource id, or "param:<id>". Explicit when two lines share a default. */
  key?: string;
  resource: ResourceRef;
  delta: Num;
};

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
  | { kind: "unresolvable" }
  | { kind: "unknownOption" };

export type PaymentCheck =
  | { ok: true; changes: ResourceChange[] }
  | { ok: false; failure: PaymentFailure };
