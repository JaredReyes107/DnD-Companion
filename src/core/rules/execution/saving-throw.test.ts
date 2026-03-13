import { RuleContext } from "../execution/rule-handler";

describe("Saving Throw Logic", () => {
  let ctx: RuleContext;

  beforeEach(() => {
    ctx = {
      targetId: "t1",
      savingThrow: {
        dc: 15,
        ability: "DEX",
      },
    };
  });

  it("should evaluate success when roll total equals DC", () => {
    ctx.savingThrow!.rollTotal = 15;

    ctx.savingThrow!.isSuccess =
      ctx.savingThrow!.rollTotal >= ctx.savingThrow!.dc;

    expect(ctx.savingThrow!.isSuccess).toBe(true);
  });

  it("should evaluate success when roll total exceeds DC", () => {
    ctx.savingThrow!.rollTotal = 16;
    ctx.savingThrow!.isSuccess =
      ctx.savingThrow!.rollTotal >= ctx.savingThrow!.dc;
    expect(ctx.savingThrow!.isSuccess).toBe(true);
  });

  it("should evaluate failure when roll total is below DC", () => {
    ctx.savingThrow!.rollTotal = 14;
    ctx.savingThrow!.isSuccess =
      ctx.savingThrow!.rollTotal >= ctx.savingThrow!.dc;
    expect(ctx.savingThrow!.isSuccess).toBe(false);
  });

  it("should support setting effectOutcome based on success", () => {
    ctx.savingThrow!.isSuccess = true;

    if (ctx.savingThrow!.isSuccess) {
      ctx.savingThrow!.effectOutcome = "half";
    } else {
      ctx.savingThrow!.effectOutcome = "full";
    }

    expect(ctx.savingThrow!.effectOutcome).toBe("half");
  });
});
