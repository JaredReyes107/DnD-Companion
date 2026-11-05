/* eslint-disable @typescript-eslint/no-explicit-any */
import { E } from "@/core/entities/rules/expr/expr";
import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { getResourceById } from "@/core/data/registries/resources.registry";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";

// Test helper: the cast keeps fixtures short; real data is type-checked by OverrideTemplate.
const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const ctxOf = (...active: OverrideTemplate[]) => ({ active });

// recharge is a RestoreRule[], not a string.
const on = (type: string) => [{ trigger: { type }, amount: "full" }];
const NEVER: never[] = [];

describe("resolveTemplateWith", () => {
  it("returns the base template and an empty trail when nothing is active", () => {
    const r = resolveTemplateWith("resource", "rage", ctxOf());
    expect(r.template).toBe(getResourceById("rage"));
    expect(r.trail).toEqual([]);
  });

  it("patches a scalar field and records before/after in the trail", () => {
    const base = getResourceById("bardic_inspiration").recharge;
    const r = resolveTemplateWith(
      "resource",
      "bardic_inspiration",
      ctxOf(
        ov({
          id: "font_of_inspiration",
          sourceId: "bard",
          kind: "resource",
          target: { id: "bardic_inspiration" },
          patches: [{ op: "set", field: "recharge", value: on("shortRest") }],
        }),
      ),
    );
    expect(r.template.recharge).toEqual(on("shortRest"));
    expect(r.trail).toEqual([
      {
        overrideId: "font_of_inspiration",
        sourceId: "bard",
        op: "set",
        field: "recharge",
        before: base,
        after: on("shortRest"),
      },
    ]);
  });

  it("does not mutate the registry template", () => {
    const base = getResourceById("rage");
    const snapshot = { ...base };
    resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(
        ov({
          id: "x",
          kind: "resource",
          target: { id: "rage" },
          patches: [{ op: "set", field: "recharge", value: NEVER }],
        }),
      ),
    );
    expect(getResourceById("rage")).toEqual(snapshot);
    expect(getResourceById("rage").recharge).toBe(snapshot.recharge);
  });

  it("ignores overrides of another kind or another target", () => {
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(
        ov({
          id: "other-target",
          kind: "resource",
          target: { id: "ki_points" },
          patches: [{ op: "set", field: "recharge", value: NEVER }],
        }),
        ov({
          id: "other-kind",
          kind: "action",
          target: { id: "rage" },
          patches: [
            { op: "set", field: "duration", value: { kind: "instantaneous" } },
          ],
        }),
      ),
    );
    expect(r.template).toBe(getResourceById("rage"));
    expect(r.trail).toEqual([]);
  });

  it("ignores non-patchable fields with a warning", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const before = getResourceById("rage").tags;
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(
        ov({
          id: "x",
          kind: "resource",
          target: { id: "rage" },
          patches: [{ op: "set", field: "tags", value: ["hacked"] }],
        }),
      ),
    );
    expect(r.template.tags).toBe(before);
    expect(r.trail).toHaveLength(0);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it("a higher priority applies later and wins, regardless of activation order", () => {
    const mk = (id: string, priority: number, value: unknown) =>
      ov({
        id,
        kind: "resource",
        priority,
        target: { id: "rage" },
        patches: [{ op: "set", field: "recharge", value }],
      });
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(mk("hi", 10, NEVER), mk("lo", -5, on("turnStart"))),
    );
    expect(r.template.recharge).toEqual(NEVER);
    expect(r.trail.map((t) => t.overrideId)).toEqual(["lo", "hi"]);
  });

  it("equal priority keeps activation order (last activated wins)", () => {
    const mk = (id: string, value: unknown) =>
      ov({
        id,
        kind: "resource",
        target: { id: "rage" },
        patches: [{ op: "set", field: "recharge", value }],
      });
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(mk("first", on("turnStart")), mk("second", NEVER)),
    );
    expect(r.template.recharge).toEqual(NEVER);
  });

  it("patches within one override apply in order, and each sees the previous result", () => {
    const base = getResourceById("rage").recharge;
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(
        ov({
          id: "x",
          kind: "resource",
          target: { id: "rage" },
          patches: [
            { op: "set", field: "recharge", value: on("shortRest") },
            { op: "set", field: "recharge", value: on("roundStart") },
          ],
        }),
      ),
    );
    expect(r.template.recharge).toEqual(on("roundStart"));
    expect(r.trail.map((t) => (t as any).before)).toEqual([
      base,
      on("shortRest"),
    ]);
  });

  it("a max patch carries an Expr", () => {
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(
        ov({
          id: "x",
          kind: "resource",
          target: { id: "rage" },
          patches: [{ op: "set", field: "max", value: E.n(99) }],
        }),
      ),
    );
    expect(r.template.max).toEqual(E.n(99));
  });

  it("description patches go to the trail only and leave the template untouched", () => {
    const r = resolveTemplateWith(
      "resource",
      "rage",
      ctxOf(
        ov({
          id: "x",
          kind: "resource",
          target: { id: "rage" },
          patches: [{ op: "describe", mode: "append", text: { en: "Extra." } }],
        }),
      ),
    );
    expect(r.template).toBe(getResourceById("rage"));
    expect(r.trail).toEqual([
      {
        overrideId: "x",
        sourceId: undefined,
        op: "describe",
        mode: "append",
        text: { en: "Extra." },
      },
    ]);
  });
});
