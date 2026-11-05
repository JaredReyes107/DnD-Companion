import {
  CostLine,
  CostOption,
  ParamDef,
} from "@/core/entities/actions/cost-option";
import {
  AppliedPatch,
  CostPatch,
  GroupPatch,
} from "@/core/entities/rules/override/override-template";
import {
  duplicateLineKeys,
  duplicateOptionIds,
  duplicateParamIds,
  lineKey,
} from "@/core/rules/costs/cost-keys";
import { Num } from "../expr/expr";
import { adjustNum } from "../../../rules/overrides/adjust-num";

export type StructuralPatch = CostPatch | GroupPatch;

export type Applied =
  Extract<AppliedPatch, { target: string }> extends infer A
    ? A extends unknown
      ? Omit<A, "overrideId" | "sourceId">
      : never
    : never;

export type StructuralResult =
  | {
      template: Record<string, unknown>;
      applied: Applied | AppliedAdjust | AppliedAdjustCost;
    }
  | undefined;
type AppliedAdjust = Omit<
  Extract<AppliedPatch, { op: "adjust" }>,
  "overrideId" | "sourceId"
>;
type AppliedAdjustCost = Omit<
  Extract<AppliedPatch, { op: "adjustCost" }>,
  "overrideId" | "sourceId"
>;

export const STRUCTURAL_OPS: ReadonlySet<string> = new Set([
  "removeCostOption",
  "addCostOption",
  "removeCostLine",
  "addCostLine",
  "setCostParamGroup",
  "adjustCost",
  "addGroup",
  "removeGroup",
]);

export const isStructural = (p: { op: string }): p is StructuralPatch =>
  STRUCTURAL_OPS.has(p.op);

const insert = <T>(list: T[], item: T, position?: "start" | "end") =>
  position === "start" ? [item, ...list] : [...list, item];

const isGroupPatch = (p: StructuralPatch): p is GroupPatch =>
  p.op === "addGroup" || p.op === "removeGroup";

/**
 * Applies one structural patch. Anything that cannot be applied, or would leave
 * an invalid action, warns and returns undefined: homebrew must never crash a sheet.
 */
export function applyStructural(
  kind: string,
  template: Record<string, unknown>,
  p: StructuralPatch,
  overrideId: string,
): StructuralResult {
  const fail = (msg: string): undefined => {
    console.warn(`[overrides] "${overrideId}": ${msg}; ignored`);
    return undefined;
  };
  if (isGroupPatch(p)) {
    if (kind !== "resource") return fail(`${p.op} only applies to resources`);
    const groups = (template.groups as string[] | undefined) ?? [];
    const g = p.group.trim();
    if (g === "") return fail("empty group name");
    if (p.op === "removeGroup") {
      if (!groups.includes(g)) return fail(`not in group "${g}"`);
      return {
        template: { ...template, groups: groups.filter((x) => x !== g) },
        applied: { op: p.op, target: g },
      };
    }
    if (groups.includes(g)) return fail(`already in group "${g}"`);
    // Same invariant as validateResourceTemplate: a member without a rank is never a candidate.
    // Patch `rank` first, earlier in the same override or in a lower-priority one.
    if (template.rank === undefined)
      return fail(`cannot join "${g}" without a rank`);
    return {
      template: { ...template, groups: [...groups, g] },
      applied: { op: p.op, target: g },
    };
  }
  if (kind !== "action") return fail(`${p.op} only applies to actions`);

  const cp: CostPatch = p;

  const options = (template.costOptions as CostOption[] | undefined) ?? [];
  const done = (next: CostOption[], target: string): StructuralResult => ({
    template: { ...template, costOptions: next },
    applied: { op: cp.op, target },
  });
  const find = (id: string) => options.find((o) => o.id === id);
  const replace = (next: CostOption) =>
    options.map((o) => (o.id === next.id ? next : o));

  switch (cp.op) {
    case "removeCostOption": {
      if (!find(cp.option)) return fail(`no cost option "${cp.option}"`);
      if (options.length === 1)
        return fail(
          `"${cp.option}" is the last cost option; removing it would make the action free`,
        );
      return done(
        options.filter((o) => o.id !== cp.option),
        cp.option,
      );
    }

    case "addCostOption": {
      const o = cp.option;
      if (find(o.id)) return fail(`cost option "${o.id}" already exists`);
      if (o.lines.length === 0)
        return fail(`cost option "${o.id}" has no lines`);
      const dup = [...duplicateLineKeys(o), ...duplicateParamIds(o)];
      if (dup.length)
        return fail(`"${o.id}" has duplicate keys: ${dup.join(", ")}`);
      if (duplicateOptionIds([...options, o]).length)
        return fail(`duplicate option id "${o.id}"`);
      return done(insert(options, o, cp.position), o.id);
    }

    case "removeCostLine": {
      const o = find(cp.option);
      if (!o) return fail(`no cost option "${cp.option}"`);
      if (!o.lines.some((l) => lineKey(l) === cp.line))
        return fail(`no line "${cp.line}" in "${cp.option}"`);
      if (o.lines.length === 1)
        return fail(`"${cp.line}" is the last line of "${cp.option}"`);
      return done(
        replace({ ...o, lines: o.lines.filter((l) => lineKey(l) !== cp.line) }),
        `${cp.option}.${cp.line}`,
      );
    }

    case "addCostLine": {
      const o = find(cp.option);
      if (!o) return fail(`no cost option "${cp.option}"`);
      if (o.lines.some((l) => lineKey(l) === cp.line.key))
        return fail(`line "${cp.line.key}" already exists in "${cp.option}"`);
      const line = cp.line as CostLine;
      if (
        "param" in line.resource &&
        !o.params?.some(
          (x) => x.id === (line.resource as { param: string }).param,
        )
      )
        return fail(`line "${cp.line.key}" uses an undeclared param`);
      return done(
        replace({ ...o, lines: insert(o.lines, line, cp.position) }),
        `${cp.option}.${cp.line.key}`,
      );
    }

    case "adjustCost": {
      const o = find(cp.path.option);
      if (!o) return fail(`no cost option "${cp.path.option}"`);
      const path = cp.path;
      const finish = (
        next: CostOption,
        label: string,
        before: unknown,
        after: unknown,
      ): StructuralResult => ({
        template: { ...template, costOptions: replace(next) },
        applied: {
          op: "adjustCost",
          path: label,
          mode: cp.mode,
          before,
          after,
        },
      });

      if ("line" in path) {
        const line = o.lines.find((l) => lineKey(l) === path.line);
        if (!line) return fail(`no line "${path.line}" in "${o.id}"`);
        const after = adjustNum(line.delta, cp.mode, cp.value);
        if (after === undefined)
          return fail(`line "${path.line}" has no value to ${cp.mode}`);
        return finish(
          {
            ...o,
            lines: o.lines.map((l) =>
              l === line ? { ...l, delta: after } : l,
            ),
          },
          `${o.id}.${path.line}`,
          line.delta,
          after,
        );
      }

      const param = o.params?.find((x) => x.id === path.param);
      if (!param) return fail(`no param "${path.param}" in "${o.id}"`);
      const allowed: readonly string[] =
        param.kind === "range" ? ["min", "max"] : ["minRank", "maxRank"];
      if (!allowed.includes(path.field))
        return fail(`${param.kind} params have no "${path.field}"`);
      const current = (param as Record<string, unknown>)[path.field] as
        | Num
        | undefined;
      const after = adjustNum(current, cp.mode, cp.value);
      if (after === undefined)
        return fail(`"${path.param}.${path.field}" has no value to ${cp.mode}`);
      return finish(
        {
          ...o,
          params: o.params!.map((x) =>
            x === param ? ({ ...x, [path.field]: after } as ParamDef) : x,
          ),
        },
        `${o.id}.${path.param}.${path.field}`,
        current,
        after,
      );
    }

    case "setCostParamGroup": {
      const o = find(cp.option);
      if (!o) return fail(`no cost option "${cp.option}"`);
      const param = o.params?.find((x) => x.id === cp.param);
      if (!param || param.kind !== "resource")
        return fail(`"${cp.param}" is not a resource param of "${cp.option}"`);
      if (cp.group.trim() === "") return fail("empty group name");
      const params = o.params!.map(
        (x): ParamDef =>
          x.id === cp.param ? { ...param, group: cp.group } : x,
      );
      return done(replace({ ...o, params }), `${cp.option}.${cp.param}`);
    }
  }
}
