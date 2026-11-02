import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import { getActionById } from "@/core/data/registries/actions.registry";
import { spend } from "@/core/data/actions/shared/cost-builders";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import { resolveCostChoices } from "@/core/rules/costs/resolve-cost-choices";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";
import { makeChar } from "./fixtures";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const on = (target: string, ...patches: object[]) =>
  ov({
    id: `t17_${Math.random()}`,
    kind: "action",
    target: { id: target },
    patches,
  });
const resolveAction = (id: string, ...active: OverrideTemplate[]) =>
  resolveTemplateWith("action", id, { active });
const opts = (id: string, ...active: OverrideTemplate[]) =>
  resolveAction(id, ...active).template.costOptions ?? [];

const CD_OPTION = { id: "t17_smite_cd", lines: [spend("channel_divinity", 1)] };

describe("cost options", () => {
  it("addCostOption: a homebrew payer for a base action", () => {
    const o = on("divine_smite", { op: "addCostOption", option: CD_OPTION });
    expect(opts("divine_smite", o).map((x) => x.id)).toEqual([
      "divine_smite_slot",
      "t17_smite_cd",
    ]);
    expect(getActionById("divine_smite").costOptions).toHaveLength(1); // base untouched
  });

  it("the new payer is a real choice end to end", () => {
    const o = on("divine_smite", { op: "addCostOption", option: CD_OPTION });
    const c = makeChar([["paladin", 5]], {
      spell_slot_1: 1,
      spell_slot_2: 1,
      channel_divinity: 0,
    });
    const choices = resolveCostChoices(
      c,
      opts("divine_smite", o),
      buildResourceContext(c),
    );
    expect(choices.find((x) => x.optionId === "t17_smite_cd")?.affordable).toBe(
      true,
    );
  });

  it("position start puts it first", () => {
    const o = on("divine_smite", {
      op: "addCostOption",
      option: CD_OPTION,
      position: "start",
    });
    expect(opts("divine_smite", o)[0].id).toBe("t17_smite_cd");
  });

  it("removeCostOption removes one of several", () => {
    const o = on("star_map_guiding_bolt", {
      op: "removeCostOption",
      option: "star_map_guiding_bolt_slot",
    });
    expect(opts("star_map_guiding_bolt", o).map((x) => x.id)).toEqual([
      "star_map_guiding_bolt_charge",
    ]);
  });
});

describe("cost lines", () => {
  it("addCostLine / removeCostLine on Lay on Hands", () => {
    const add = on("lay_on_hands", {
      op: "addCostLine",
      option: "lay_on_hands_cleanse",
      line: { ...spend("channel_divinity", 1), key: "extra" },
    });
    const lines = opts("lay_on_hands", add).find(
      (x) => x.id === "lay_on_hands_cleanse",
    )!.lines;
    expect(lines.map((l) => l.key ?? "")).toEqual(["pool", "extra"]);
    const rm = on("font_of_magic_to_spellslots", {
      op: "removeCostLine",
      option: "font_of_magic_to_slot",
      line: "price",
    });
    expect(opts("font_of_magic_to_spellslots", rm)[0].lines).toHaveLength(1);
  });

  it("setCostParamGroup redirects which resources can pay", () => {
    const o = on("divine_smite", {
      op: "setCostParamGroup",
      option: "divine_smite_slot",
      param: "slot",
      group: "pact_slot",
    });
    const p = opts("divine_smite", o)[0].params![0];
    expect(p.kind === "resource" && p.group).toBe("pact_slot");
  });
});

describe("invalid results warn and change nothing", () => {
  const cases: [string, object][] = [
    [
      "removing the last option",
      { op: "removeCostOption", option: "divine_smite_slot" },
    ],
    ["unknown option", { op: "removeCostOption", option: "nope" }],
    [
      "duplicate option id",
      {
        op: "addCostOption",
        option: { id: "divine_smite_slot", lines: CD_OPTION.lines },
      },
    ],
    [
      "option with no lines",
      { op: "addCostOption", option: { id: "t17_empty", lines: [] } },
    ],
    [
      "removing the last line",
      { op: "removeCostLine", option: "divine_smite_slot", line: "param:slot" },
    ],
    [
      "duplicate line key",
      {
        op: "addCostLine",
        option: "lay_on_hands_cleanse",
        line: { ...spend("rage", 1), key: "pool" },
      },
    ],
    [
      "line on an undeclared param",
      {
        op: "addCostLine",
        option: "lay_on_hands_cleanse",
        line: { resource: { param: "ghost" }, delta: -1, key: "g" },
      },
    ],
    [
      "group on a range param",
      {
        op: "setCostParamGroup",
        option: "lay_on_hands_heal",
        param: "amount",
        group: "x",
      },
    ],
  ];
  it.each(cases)("%s", (_name, patch) => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const target = (patch as { option: string | { id: string } }).option;
    const action =
      ["divine_smite_slot"].includes(String(target)) ||
      (typeof target === "object" && target.id === "divine_smite_slot")
        ? "divine_smite"
        : "lay_on_hands";
    const r = resolveAction(action, on(action, patch));
    expect(r.trail).toEqual([]);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it("registration rejects cost ops on a non-action override", () => {
    expect(() =>
      registerHomebrewOverride(
        ov({
          id: "t17_bad",
          kind: "resource",
          target: { id: "rage" },
          patches: [{ op: "removeCostOption", option: "x" }],
        }),
      ),
    ).toThrow(/cost ops only apply to actions/);
  });
});
