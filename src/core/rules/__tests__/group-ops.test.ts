import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import { candidateResources } from "@/core/rules/costs/cost-params";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";
import { makeChar } from "./fixtures";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const patches = (id: string, target: object, ...p: object[]) =>
  ov({ id, kind: "resource", target, patches: p });
const resolve = (id: string, ...active: OverrideTemplate[]) =>
  resolveTemplateWith("resource", id, { active });

const JOIN = patches(
  "t19_cd_joins",
  { id: "channel_divinity" },
  { op: "adjust", field: "rank", mode: "set", value: 1 },
  { op: "addGroup", group: "t19_pay" },
);

beforeAll(() => registerHomebrewOverride(JOIN));

describe("a base resource joins a custom group", () => {
  it("resolves with the group and rank", () => {
    const t = resolve("channel_divinity", JOIN).template;
    expect(t.groups).toEqual(["t19_pay"]);
    expect(t.rank).toBe(1);
  });

  it("then becomes a candidate for a param over that group", () => {
    const c = makeChar([["cleric", 6]], { channel_divinity: 0 });
    const def = { id: "r", kind: "resource" as const, group: "t19_pay" };
    expect(candidateResources(c, def, buildResourceContext(c))).toEqual([]);
    expect(
      candidateResources(c, def, buildResourceContext(c, ["t19_cd_joins"])),
    ).toEqual(["channel_divinity"]);
  });

  it("a group selector keeps matching the base groups, not the patched ones", () => {
    const retag = patches(
      "t19_retag",
      { group: "t19_pay" },
      { op: "adjust", field: "max", mode: "add", value: 1 },
    );
    const ids = resolve("channel_divinity", JOIN, retag).trail.map(
      (t) => t.overrideId,
    );
    expect(ids).not.toContain("t19_retag");
  });
});

describe("group ops", () => {
  const run = (...p: object[]) =>
    resolve("spell_slot_1", patches("t19_x", { id: "spell_slot_1" }, ...p));

  it("removeGroup removes one and keeps the rank", () => {
    const t = run({ op: "removeGroup", group: "standard_slot" }).template;
    expect(t.groups).toEqual(["spell_slot"]);
    expect(t.rank).toBeDefined();
  });

  it.each([
    ["removing a group it is not in", { op: "removeGroup", group: "nope" }],
    ["adding one it is already in", { op: "addGroup", group: "spell_slot" }],
    ["an empty name", { op: "addGroup", group: "  " }],
  ])("warns and ignores %s", (_n, patch) => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    expect(run(patch).trail).toEqual([]);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it("refuses to join a group without a rank", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const r = resolve(
      "rage",
      patches("t19_nr", { id: "rage" }, { op: "addGroup", group: "g" }),
    );
    expect(r.template.groups).toBeUndefined();
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it("accepts once a rank is patched first, in the same override", () => {
    const r = resolve(
      "rage",
      patches(
        "t19_ok",
        { id: "rage" },
        { op: "adjust", field: "rank", mode: "set", value: 1 },
        { op: "addGroup", group: "g" },
      ),
    );
    expect(r.template.groups).toEqual(["g"]);
  });

  it("registration rejects group ops on a non-resource override", () => {
    expect(() =>
      registerHomebrewOverride(
        ov({
          id: "t19_bad",
          kind: "action",
          target: { id: "attack" },
          patches: [{ op: "addGroup", group: "g" }],
        }),
      ),
    ).toThrow(/group ops only apply to resources/);
  });
});
