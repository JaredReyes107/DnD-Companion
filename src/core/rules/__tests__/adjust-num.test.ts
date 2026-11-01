import { E } from "@/core/entities/rules/expr/expr";
import { adjustNum } from "@/core/rules/overrides/adjust-num";

describe("adjustNum", () => {
  it("folds two literals", () => {
    expect(adjustNum(10, "add", 5)).toBe(15);
    expect(adjustNum(10, "mul", 2)).toBe(20);
  });
  it("set ignores the current value, even an absent one", () => {
    expect(adjustNum(undefined, "set", 3)).toBe(3);
  });
  it("add/mul without a current value is undefined", () => {
    expect(adjustNum(undefined, "add", 1)).toBeUndefined();
  });
  it("stays an Expr when either side is one", () => {
    expect(adjustNum(E.pb(), "add", 1)).toEqual(E.add(E.pb(), E.n(1)));
    expect(adjustNum(2, "mul", E.pb())).toEqual(E.mul(E.n(2), E.pb()));
  });
});
