import { E, negate } from "@/core/entities/rules/expr/expr";
import {
  evalNum,
  evaluateExpr,
  ExprContext,
} from "@/core/rules/predicate/evaluate-predicate";
import { makeChar } from "./fixtures";

const atRank = (rank: number): ExprContext => ({
  character: makeChar([["sorcerer", 5]]),
  resolveParam: (_id, field) => (field === "rank" ? rank : undefined),
});
const price = E.lookup(E.param("slot", "rank"), { 1: 2, 2: 3 });

it("lookup returns exact entries and is unknown anywhere else", () => {
  expect(evaluateExpr(price, atRank(2))).toBe(3);
  expect(evaluateExpr(price, atRank(3))).toBeUndefined();
  expect(evaluateExpr(price, atRank(0))).toBeUndefined();
});

it("table, by contrast, clamps to its last key (why prices must not use it)", () => {
  expect(
    evaluateExpr(E.table(E.param("slot", "rank"), { 1: 2, 2: 3 }), atRank(9)),
  ).toBe(3);
});

it("evalNum passes literals through and evaluates formulas", () => {
  expect(evalNum(4, atRank(1))).toBe(4);
  expect(evalNum(E.add(E.n(1), E.param("slot", "rank")), atRank(2))).toBe(3);
});

it("negate flips literals, wraps formulas, and keeps unknown unknown", () => {
  expect(negate(3)).toBe(-3);
  expect(evalNum(negate(price), atRank(2))).toBe(-3);
  expect(evalNum(negate(price), atRank(9))).toBeUndefined();
});
