import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import {
  buildResourceContext,
  resourceMax,
} from "@/core/rules/character/resource-max";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";
import { makeChar } from "./fixtures";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const adjust = (
  id: string,
  target: object,
  kind: string,
  field: string,
  mode: string,
  value: unknown,
  priority?: number,
) =>
  ov({
    id,
    kind,
    target,
    priority,
    patches: [{ op: "adjust", field, mode, value }],
  });

beforeAll(() => {
  registerHomebrewOverride(
    adjust("t16_plus1", { id: "action_surge" }, "resource", "max", "add", 1),
  );
  registerHomebrewOverride(
    adjust(
      "t16_triple",
      { id: "action_surge" },
      "resource",
      "max",
      "mul",
      3,
      5,
    ),
  );
});

const surgeMax = (extra: string[]) => {
  const c = makeChar([["fighter", 5]], {});
  return resourceMax(c, "action_surge", buildResourceContext(c, extra));
};

describe("adjust on resource max", () => {
  it("baseline", () => expect(surgeMax([])).toBe(1));
  it("add", () => expect(surgeMax(["t16_plus1"])).toBe(2));
  it("mul", () => expect(surgeMax(["t16_triple"])).toBe(3));
  it("composes in priority order: add (0) then mul (5) = (1+1)*3", () =>
    expect(surgeMax(["t16_plus1", "t16_triple"])).toBe(6));
  it("stays lazy: tracks the level through an Expr", () => {
    const c = makeChar([["fighter", 17]], {}); // action_surge table gives 2 at 17
    expect(
      resourceMax(c, "action_surge", buildResourceContext(c, ["t16_plus1"])),
    ).toBe(3);
  });
});

describe("adjust on modifiers", () => {
  const resolve = (...active: OverrideTemplate[]) =>
    resolveTemplateWith("modifier", "barbarian_fast_movement", { active })
      .template;

  it("adds to a literal value and keeps it a number", () => {
    expect(
      resolve(
        adjust(
          "a",
          { id: "barbarian_fast_movement" },
          "modifier",
          "value",
          "add",
          5,
        ),
      ).value,
    ).toBe(15);
  });
  it("an absent priority adjusts the default for its type (additive = 300)", () => {
    expect(
      resolve(
        adjust(
          "b",
          { id: "barbarian_fast_movement" },
          "modifier",
          "priority",
          "add",
          10,
        ),
      ).priority,
    ).toBe(310);
  });
});

describe("adjust safety", () => {
  it("rejects non-adjustable fields and values it cannot adjust, with a warning", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const bad = resolveTemplateWith("resource", "rage", {
      active: [
        adjust("c", { id: "rage" }, "resource", "recharge", "add", 1), // not adjustable
        adjust("d", { id: "rage" }, "resource", "rank", "add", 1), // rage has no rank
      ],
    });
    expect(bad.trail).toEqual([]);
    expect(warn).toHaveBeenCalledTimes(2);
    warn.mockRestore();
  });

  it("records before/after in the trail", () => {
    const r = resolveTemplateWith("modifier", "barbarian_fast_movement", {
      active: [
        adjust(
          "e",
          { id: "barbarian_fast_movement" },
          "modifier",
          "value",
          "mul",
          2,
        ),
      ],
    });
    expect(r.trail).toEqual([
      {
        overrideId: "e",
        sourceId: undefined,
        op: "adjust",
        field: "value",
        mode: "mul",
        before: 10,
        after: 20,
      },
    ]);
  });
});
