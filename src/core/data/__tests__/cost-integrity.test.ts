/* eslint-disable @typescript-eslint/no-explicit-any */
import { getActionRegistry } from "@/core/data/registries/actions.registry";
import {
  getResourceRegistry,
  validateResourceTemplate,
} from "@/core/data/registries/resources.registry";
import {
  duplicateLineKeys,
  duplicateOptionIds,
  duplicateParamIds,
} from "@/core/rules/costs/cost-keys";

const actions = Object.values(getActionRegistry());
const resources = Object.values(getResourceRegistry());
const allOptions = actions.flatMap((a) =>
  (a.costOptions ?? []).map((o) => [a.id, o] as const),
);

/** Every `{ type: "param", id }` leaf anywhere inside a value. */
function paramIds(v: unknown, out: Set<string> = new Set()): Set<string> {
  if (Array.isArray(v)) v.forEach((x) => paramIds(x, out));
  else if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    if (o.type === "param" && typeof o.id === "string") out.add(o.id);
    Object.values(o).forEach((x) => paramIds(x, out));
  }
  return out;
}

describe("no legacy spends survive normalization", () => {
  it("effects only ever gain; spending lives in costOptions", () => {
    const bad = actions.flatMap((a) =>
      a.effects
        .filter(
          (e: any) =>
            e.type === "convertResource" ||
            (e.type === "modifyResource" &&
              typeof e.amount === "number" &&
              e.amount < 0),
        )
        .map((e: any) => `${a.id}: ${e.type}`),
    );
    expect(bad).toEqual([]);
  });
});

describe("cost options are well formed", () => {
  it("option ids are unique within an action", () => {
    const bad = actions
      .filter((a) => duplicateOptionIds(a.costOptions ?? []).length)
      .map((a) => a.id);
    expect(bad).toEqual([]);
  });

  it("option ids are globally unique (they are localized globally)", () => {
    const seen = new Map<string, string>();
    const clashes: string[] = [];
    for (const [actionId, o] of allOptions) {
      const prev = seen.get(o.id);
      if (prev && prev !== actionId)
        clashes.push(`${o.id}: ${prev} / ${actionId}`);
      seen.set(o.id, actionId);
    }
    expect(clashes).toEqual([]);
  });

  it("line keys and param ids are unique within an option", () => {
    const bad = allOptions.flatMap(([a, o]) => [
      ...duplicateLineKeys(o).map((k) => `${a}/${o.id}: line ${k}`),
      ...duplicateParamIds(o).map((k) => `${a}/${o.id}: param ${k}`),
    ]);
    expect(bad).toEqual([]);
  });

  it("every option has at least one line", () => {
    expect(
      allOptions
        .filter(([, o]) => o.lines.length === 0)
        .map(([a, o]) => `${a}/${o.id}`),
    ).toEqual([]);
  });

  it("every param reference points at a declared param", () => {
    const bad = allOptions.flatMap(([a, o]) => {
      const declared = new Set((o.params ?? []).map((p) => p.id));
      const used = new Set<string>(
        o.lines.flatMap((l) =>
          "param" in l.resource ? [l.resource.param] : [],
        ),
      );
      paramIds(
        o.lines.map((l) => l.delta),
        used,
      );
      paramIds(o.params, used);
      paramIds(o.requires, used);
      return [...used]
        .filter((id) => !declared.has(id))
        .map((id) => `${a}/${o.id}: ${id}`);
    });
    expect(bad).toEqual([]);
  });

  it("resource params name a group that has at least one member", () => {
    const groups = new Set(resources.flatMap((r) => r.groups ?? []));
    const bad = allOptions.flatMap(([a, o]) =>
      (o.params ?? [])
        .filter((p) => p.kind === "resource" && !groups.has(p.group))
        .map((p) => `${a}/${o.id}.${p.id}`),
    );
    expect(bad).toEqual([]);
  });
});

describe("resources", () => {
  it("every group member has a rank, and no group name is empty", () => {
    const bad = resources.flatMap((r) =>
      validateResourceTemplate(r).map((e) => `${r.id}: ${e}`),
    );
    expect(bad).toEqual([]);
  });

  it("every resource a cost line names exists", () => {
    const ids = new Set(resources.map((r) => r.id));
    const bad = allOptions.flatMap(([a, o]) =>
      o.lines.flatMap((l) =>
        "resourceId" in l.resource && !ids.has(l.resource.resourceId)
          ? [`${a}/${o.id}: ${l.resource.resourceId}`]
          : [],
      ),
    );
    expect(bad).toEqual([]);
  });
});
