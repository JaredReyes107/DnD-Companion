/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionInstance } from "@/core/entities/actions/action-instance";
import { Character } from "@/core/entities/character/Character";
import { E } from "@/core/entities/rules/expr/expr";
import { registerHomebrewResource } from "@/core/data/registries/resources.registry";
import { takeShortRest } from "@/core/rules/character/resting";
import { executeAction } from "@/core/systems/combat/action-execution/take-action";
import { makeChar } from "./fixtures";

const homebrew = (id: string, recharge: object[]) =>
  registerHomebrewResource({
    id,
    category: "feats",
    max: E.n(3),
    origin: { book: "homebrew", setId: "t14" },
    recharge: recharge as never,
  });

beforeAll(() => {
  homebrew("t14_threshold", [
    // refills only while current <= WIS modifier (0 with the fixture's scores)
    {
      trigger: { type: "shortRest" },
      when: { operator: "<=", value: E.mod("WIS") },
      amount: "full",
    },
  ]);
  homebrew("t14_reset", [
    { trigger: { type: "shortRest" }, amount: { kind: "reset", value: 1 } },
  ]);
});

describe("recharge thresholds and amounts accept formulas or literals", () => {
  it("a formula threshold gates the rule", () => {
    const empty = takeShortRest(
      makeChar([["fighter", 5]], { t14_threshold: 3 }),
    ); // current 0
    expect(empty.resources.t14_threshold.spent).toBe(0);
    const partial = takeShortRest(
      makeChar([["fighter", 5]], { t14_threshold: 1 }),
    ); // current 2
    expect(partial.resources.t14_threshold.spent).toBe(1);
  });

  it("a literal reset amount works", () => {
    expect(
      takeShortRest(makeChar([["fighter", 5]], { t14_reset: 0 })).resources
        .t14_reset.spent,
    ).toBe(2);
  });
});

describe("durationRounds as a formula", () => {
  const act = (
    durationRounds: ActionInstance["effects"][number] extends infer E
      ? never
      : never | any,
  ) =>
    ({
      id: "t14",
      sourceId: "t",
      boards: [],
      duration: { kind: "instantaneous" },
      effects: [{ type: "applyStatus", statusId: "prone", durationRounds }],
    }) as ActionInstance;
  const run = (action: ActionInstance) => {
    const dispatch = jest.fn();
    executeAction(action, {
      character: makeChar([["fighter", 5]], {}, true),
      dispatch,
    });
    return dispatch.mock.calls[0]?.[0] as Character | undefined;
  };

  it("evaluates the formula against the character (PB 3 at level 5)", () => {
    const out = run(act(E.pb()));
    expect(out!.combatState!.statuses[0].expiryConditions).toEqual([
      { type: "startOfTurn", round: 4 },
    ]);
  });

  it("an unresolvable duration skips the effect instead of making it permanent", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const out = run(act(E.param("p")));
    expect(out!.combatState!.statuses).toEqual([]);
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});
