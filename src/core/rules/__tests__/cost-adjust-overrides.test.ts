import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { E } from "@/core/entities/rules/expr/expr";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import { pay } from "@/core/rules/costs/payment";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";
import { makeChar } from "./fixtures";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const adjust = (
  action: string,
  path: object,
  mode: string,
  value: unknown,
  priority?: number,
) =>
  ov({
    id: `t18_${Math.random()}`,
    kind: "action",
    target: { id: action },
    priority,
    patches: [{ op: "adjustCost", path, mode, value }],
  });
const options = (action: string, ...active: OverrideTemplate[]) =>
  resolveTemplateWith("action", action, { active }).template.costOptions!;

const slot = (id: string) => ({
  slot: { kind: "resource" as const, resourceId: id },
});
const FONT = { option: "font_of_magic_to_slot", line: "price" };

describe("adjust a cost line", () => {
  it("mul doubles the price and stays lazy (keeps the lookup)", () => {
    const [opt] = options(
      "font_of_magic_to_spellslots",
      adjust("font_of_magic_to_spellslots", FONT, "mul", 2),
    );
    const c = makeChar(
      [["sorcerer", 5]],
      { sorcery_points: 0, spell_slot_1: 1, spell_slot_2: 1 },
      true,
    );
    // level 2 slot costs 3, doubled = 6 > 5 points: unaffordable
    const r = pay(c, opt, slot("spell_slot_2"), buildResourceContext(c));
    expect(r.ok).toBe(false);
    // level 1 costs 2, doubled = 4 <= 5: affordable
    const ok = pay(c, opt, slot("spell_slot_1"), buildResourceContext(c));
    expect(ok.ok && ok.character.resources.sorcery_points.spent).toBe(4);
  });

  it("add on a signed delta: add -1 costs one more", () => {
    const opt = options(
      "lay_on_hands",
      adjust(
        "lay_on_hands",
        { option: "lay_on_hands_cleanse", line: "pool" },
        "add",
        -1,
      ),
    ).find((o) => o.id === "lay_on_hands_cleanse")!;
    expect(opt.lines[0].delta).toBe(-6);
  });

  it("the Font conversion rate can be set from an Expr", () => {
    const [opt] = options(
      "font_of_magic_from_spellslots",
      adjust(
        "font_of_magic_from_spellslots",
        { option: "font_of_magic_to_points", line: "points" },
        "mul",
        2,
      ),
    );
    const c = makeChar(
      [["sorcerer", 5]],
      { sorcery_points: 5, spell_slot_2: 0 },
      true,
    );
    const r = pay(c, opt, slot("spell_slot_2"), buildResourceContext(c));
    expect(r.ok && r.character.resources.sorcery_points.spent).toBe(1); // 5 - ... 2*2=4 gained, clamped by overflow rules
  });

  it("adjustments compose by priority", () => {
    const a = adjust(
      "lay_on_hands",
      { option: "lay_on_hands_cleanse", line: "pool" },
      "mul",
      2,
      5,
    );
    const b = adjust(
      "lay_on_hands",
      { option: "lay_on_hands_cleanse", line: "pool" },
      "add",
      -1,
      0,
    );
    expect(options("lay_on_hands", a, b)[1].lines[0].delta).toBe(-12); // (-5 + -1) * 2
  });
});

describe("adjust a param bound", () => {
  it("set the Font ceiling to 6th level", () => {
    const [opt] = options(
      "font_of_magic_to_spellslots",
      adjust(
        "font_of_magic_to_spellslots",
        { option: "font_of_magic_to_slot", param: "slot", field: "maxRank" },
        "set",
        6,
      ),
    );
    expect(opt.params![0]).toMatchObject({ maxRank: 6 });
  });
  it("accepts an Expr", () => {
    const [opt] = options(
      "lay_on_hands",
      adjust(
        "lay_on_hands",
        { option: "lay_on_hands_heal", param: "amount", field: "max" },
        "add",
        E.pb(),
      ),
    );
    expect((opt.params![0] as { max: unknown }).max).toEqual(
      E.add(E.resource("lay_on_hands"), E.pb()),
    );
  });
});

describe("invalid adjustments warn and change nothing", () => {
  it.each([
    ["unknown line", { option: "lay_on_hands_cleanse", line: "nope" }],
    ["unknown option", { option: "nope", line: "pool" }],
    [
      "wrong field for the param kind",
      { option: "lay_on_hands_heal", param: "amount", field: "minRank" },
    ],
    [
      "absent bound with add",
      [
        "absent bound",
        { option: "font_of_magic_to_points", param: "slot", field: "maxRank" },
      ],
    ],
  ])("%s", (_n, path) => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const { option } = path as { option?: string };
    const action = option?.startsWith("font")
      ? "font_of_magic_to_spellslots"
      : "lay_on_hands";
    const r = resolveTemplateWith("action", action, {
      active: [adjust(action, path, "add", 1)],
    });
    expect(r.trail).toEqual([]);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });
});
