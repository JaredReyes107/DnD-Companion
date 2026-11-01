import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { E } from "@/core/entities/rules/expr/expr";
import { registerHomebrewResource } from "@/core/data/registries/resources.registry";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const short = [{ trigger: { type: "shortRest" }, amount: "full" }];
const byGroup = (group: string) =>
  ov({
    id: `t15_${group}`,
    kind: "resource",
    target: { group },
    patches: [{ op: "set", field: "recharge", value: short }],
  });
const recharge = (id: string, ...active: OverrideTemplate[]) =>
  resolveTemplateWith("resource", id, { active }).template.recharge;

beforeAll(() => {
  registerHomebrewResource({
    id: "t15_custom",
    category: "feats",
    max: E.n(1),
    rank: E.n(1),
    groups: ["t15_group"],
    origin: { book: "homebrew", setId: "t15" },
    recharge: [],
  });
});

describe("group selectors", () => {
  it("one override reaches every member of the group", () => {
    const o = byGroup("spell_slot");
    expect(recharge("spell_slot_1", o)).toEqual(short);
    expect(recharge("spell_slot_9", o)).toEqual(short);
    expect(recharge("pact_slots", o)).toEqual(short); // belongs to spell_slot too
  });

  it("a narrower group excludes the others", () => {
    const o = byGroup("pact_slot");
    expect(recharge("pact_slots", o)).toEqual(short);
    expect(recharge("spell_slot_1", o)).not.toEqual(short);
  });

  it("non-members are untouched", () => {
    expect(recharge("rage", byGroup("spell_slot"))).toBe(
      resolveTemplateWith("resource", "rage", { active: [] }).template.recharge,
    );
  });

  it("works for homebrew resources in homebrew groups", () => {
    expect(recharge("t15_custom", byGroup("t15_group"))).toEqual(short);
  });

  it("id and group selectors compose in activation order", () => {
    const none = ov({
      id: "t15_none",
      kind: "resource",
      target: { id: "spell_slot_1" },
      patches: [{ op: "set", field: "recharge", value: [] }],
    });
    expect(recharge("spell_slot_1", byGroup("spell_slot"), none)).toEqual([]);
    expect(recharge("spell_slot_1", none, byGroup("spell_slot"))).toEqual(
      short,
    );
  });

  it("registration rejects a group selector on a non-resource kind", () => {
    expect(() =>
      registerHomebrewOverride(
        ov({
          id: "t15_bad",
          kind: "action",
          target: { group: "x" },
          patches: [
            { op: "set", field: "duration", value: { kind: "instantaneous" } },
          ],
        }),
      ),
    ).toThrow(/group selectors only apply to resources/);
  });
});
