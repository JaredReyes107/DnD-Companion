import { ActionInstance } from "@/core/entities/actions/action-instance";
import { E } from "@/core/entities/rules/expr/expr";
import {
  getActionById,
  getActionRegistry,
} from "@/core/data/registries/actions.registry";
import { normalizeAction } from "@/core/rules/costs/normalize-action";

const base = {
  id: "t11",
  sourceId: "t",
  boards: [],
  duration: { kind: "instantaneous" },
} as const;
const spend = (resourceId: string, n: number) =>
  ({ type: "modifyResource", resourceId, amount: -n }) as const;
const make = (
  effects: ActionInstance["effects"],
  extra: Partial<ActionInstance> = {},
): ActionInstance => ({ ...base, effects, ...extra }) as ActionInstance;

it("moves literal spends into one keyed option and leaves gains in place", () => {
  const gain = {
    type: "modifyResource",
    resourceId: "ki_points",
    amount: 1,
  } as const;
  const a = normalizeAction(make([spend("ki_points", 2), gain]));
  expect(a.costOptions).toEqual([
    {
      id: "t11:cost",
      lines: [
        { key: "ki_points", resource: { resourceId: "ki_points" }, delta: -2 },
      ],
    },
  ]);
  expect(a.effects).toEqual([gain]);
});

it("a formula amount is a clamped effect, never a cost", () => {
  const formula = {
    type: "modifyResource",
    resourceId: "x",
    amount: E.mul(E.n(-1), E.pb()),
  } as const;
  const action = make([formula]);
  expect(normalizeAction(action)).toBe(action);
});

it("a conversion becomes one two-line option", () => {
  const a = normalizeAction(
    make([
      {
        type: "convertResource",
        from: { resourceId: "a", amount: 2 },
        to: { resourceId: "b", amount: 1 },
      },
    ]),
  );
  expect(a.effects).toEqual([]);
  expect(a.costOptions![0].lines).toEqual([
    { key: "a", resource: { resourceId: "a" }, delta: -2 },
    { key: "b", resource: { resourceId: "b" }, delta: 1 },
  ]);
});

it("repeated resources get distinct derived keys; authored keys win", () => {
  const a = normalizeAction(
    make([spend("x", 1), spend("x", 1), { ...spend("x", 1), key: "custom" }]),
  );
  expect(a.costOptions![0].lines.map((l) => l.key)).toEqual([
    "x",
    "x#2",
    "custom",
  ]);
});

it("is idempotent", () => {
  const once = normalizeAction(make([spend("x", 1)]));
  expect(normalizeAction(once)).toBe(once);
});

it("rejects a mix of costOptions and legacy spends", () => {
  expect(() =>
    normalizeAction(
      make([spend("x", 1)], { costOptions: [{ id: "o", lines: [] }] }),
    ),
  ).toThrow(/mixes costOptions/);
});

describe("the registry", () => {
  it("exposes normalized base actions", () => {
    const a = getActionById("second_wind");
    expect(a.costOptions).toEqual([
      {
        id: "second_wind:cost",
        lines: [
          {
            key: "second_wind",
            resource: { resourceId: "second_wind" },
            delta: -1,
          },
        ],
      },
    ]);
    expect(a.effects).toEqual([]);
  });

  it("no base action keeps a literal spend or a conversion in effects", () => {
    const leftovers = Object.values(getActionRegistry()).filter((a) =>
      a.effects.some(
        (e) =>
          e.type === "convertResource" ||
          (e.type === "modifyResource" &&
            typeof e.amount === "number" &&
            e.amount < 0),
      ),
    );
    expect(leftovers.map((a) => a.id)).toEqual([]);
  });
});
