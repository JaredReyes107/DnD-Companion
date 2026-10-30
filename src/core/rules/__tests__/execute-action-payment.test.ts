import { ActionInstance } from "@/core/entities/actions/action-instance";
import { Character } from "@/core/entities/character/Character";
import { E } from "@/core/entities/rules/expr/expr";
import {
  executeAction,
  isActionAvailable,
} from "@/core/systems/combat/action-execution/take-action";
import { makeChar } from "./fixtures";

const act = (over: Partial<ActionInstance>): ActionInstance => ({
  id: "t",
  sourceId: "t",
  boards: ["combat"],
  duration: { kind: "economy", slot: "action" },
  effects: [],
  ...over,
});
const spend = {
  type: "modifyResource",
  resourceId: "second_wind",
  amount: -1,
} as const;
const run = (
  action: ActionInstance,
  character: Character,
  payment?: Parameters<typeof executeAction>[1]["payment"],
) => {
  const dispatch = jest.fn();
  const result = executeAction(action, { character, dispatch, payment });
  return { result, dispatch };
};

describe("legacy actions through the adapter", () => {
  it("pays, applies and charges the economy slot exactly once", () => {
    const { result, dispatch } = run(
      act({ effects: [spend] }),
      makeChar([["fighter", 5]], { second_wind: 0 }, true),
    );
    expect(result).toEqual({ ok: true });
    expect(dispatch).toHaveBeenCalledTimes(1);
    const out = dispatch.mock.calls[0][0] as Character;
    expect(out.resources.second_wind.spent).toBe(1);
    expect(out.combatState!.actionEconomy.actions.current).toBe(0);
  });

  it("a shortfall dispatches nothing", () => {
    const { result, dispatch } = run(
      act({ effects: [spend] }),
      makeChar([["fighter", 5]], { second_wind: 1 }, true),
    );
    expect(result).toEqual({
      ok: false,
      failure: { kind: "insufficient", resourceId: "second_wind" },
    });
    expect(dispatch).not.toHaveBeenCalled();
  });

  it("gains still clamp instead of blocking", () => {
    const gain = {
      type: "modifyResource",
      resourceId: "second_wind",
      amount: 1,
    } as const;
    const { result, dispatch } = run(
      act({ effects: [gain] }),
      makeChar([["fighter", 5]], { second_wind: 0 }, true),
    );
    expect(result).toEqual({ ok: true });
    expect(
      (dispatch.mock.calls[0][0] as Character).resources.second_wind.spent,
    ).toBe(0);
  });
});

describe("explicit cost options", () => {
  const opt = (id: string) => ({
    id,
    lines: [{ resource: { resourceId: "second_wind" }, delta: E.n(-1) }],
  });
  const two = act({ costOptions: [opt("a"), opt("b")] });
  const c = makeChar([["fighter", 5]], { second_wind: 0 }, true);

  it("needs a choice when there are several options", () => {
    expect(run(two, c).result).toEqual({
      ok: false,
      failure: { kind: "unknownOption" },
    });
    expect(run(two, c, { optionId: "zzz", params: {} }).result.ok).toBe(false);
    expect(run(two, c, { optionId: "b", params: {} }).result).toEqual({
      ok: true,
    });
  });
});

describe("availability", () => {
  it("false outside combat, false when unaffordable, true otherwise", () => {
    const a = act({ effects: [spend] });
    expect(
      isActionAvailable(makeChar([["fighter", 5]], { second_wind: 0 }), a),
    ).toBe(false);
    expect(
      isActionAvailable(
        makeChar([["fighter", 5]], { second_wind: 1 }, true),
        a,
      ),
    ).toBe(false);
    expect(
      isActionAvailable(
        makeChar([["fighter", 5]], { second_wind: 0 }, true),
        a,
      ),
    ).toBe(true);
  });
  it("a missing resource is unavailable, not an exception", () => {
    expect(
      isActionAvailable(
        makeChar([["fighter", 5]], {}, true),
        act({ effects: [spend] }),
      ),
    ).toBe(false);
  });
});
