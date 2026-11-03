import {
  CostLine,
  CostOption,
  ParamDef,
} from "@/core/entities/actions/cost-option";
import {
  AppliedPatch,
  CostPatch,
} from "@/core/entities/rules/override/override-template";
import {
  duplicateLineKeys,
  duplicateOptionIds,
  duplicateParamIds,
  lineKey,
} from "@/core/rules/costs/cost-keys";
import { Num } from "../expr/expr";
import { adjustNum } from "../../../rules/overrides/adjust-num";

export type StructuralPatch = CostPatch; // widened in 18 and 19

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
]);

export const isStructural = (p: { op: string }): p is StructuralPatch =>
  STRUCTURAL_OPS.has(p.op);

const insert = <T>(list: T[], item: T, position?: "start" | "end") =>
  position === "start" ? [item, ...list] : [...list, item];

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
  if (kind !== "action") return fail(`${p.op} only applies to actions`);

  const options = (template.costOptions as CostOption[] | undefined) ?? [];
  const done = (next: CostOption[], target: string): StructuralResult => ({
    template: { ...template, costOptions: next },
    applied: { op: p.op, target },
  });
  const find = (id: string) => options.find((o) => o.id === id);
  const replace = (next: CostOption) =>
    options.map((o) => (o.id === next.id ? next : o));

  switch (p.op) {
    case "removeCostOption": {
      if (!find(p.option)) return fail(`no cost option "${p.option}"`);
      if (options.length === 1)
        return fail(
          `"${p.option}" is the last cost option; removing it would make the action free`,
        );
      return done(
        options.filter((o) => o.id !== p.option),
        p.option,
      );
    }

    case "addCostOption": {
      const o = p.option;
      if (find(o.id)) return fail(`cost option "${o.id}" already exists`);
      if (o.lines.length === 0)
        return fail(`cost option "${o.id}" has no lines`);
      const dup = [...duplicateLineKeys(o), ...duplicateParamIds(o)];
      if (dup.length)
        return fail(`"${o.id}" has duplicate keys: ${dup.join(", ")}`);
      if (duplicateOptionIds([...options, o]).length)
        return fail(`duplicate option id "${o.id}"`);
      return done(insert(options, o, p.position), o.id);
    }

    case "removeCostLine": {
      const o = find(p.option);
      if (!o) return fail(`no cost option "${p.option}"`);
      if (!o.lines.some((l) => lineKey(l) === p.line))
        return fail(`no line "${p.line}" in "${p.option}"`);
      if (o.lines.length === 1)
        return fail(`"${p.line}" is the last line of "${p.option}"`);
      return done(
        replace({ ...o, lines: o.lines.filter((l) => lineKey(l) !== p.line) }),
        `${p.option}.${p.line}`,
      );
    }

    case "addCostLine": {
      const o = find(p.option);
      if (!o) return fail(`no cost option "${p.option}"`);
      if (o.lines.some((l) => lineKey(l) === p.line.key))
        return fail(`line "${p.line.key}" already exists in "${p.option}"`);
      const line = p.line as CostLine;
      if (
        "param" in line.resource &&
        !o.params?.some(
          (x) => x.id === (line.resource as { param: string }).param,
        )
      )
        return fail(`line "${p.line.key}" uses an undeclared param`);
      return done(
        replace({ ...o, lines: insert(o.lines, line, p.position) }),
        `${p.option}.${p.line.key}`,
      );
    }

    case "adjustCost": {
      const o = find(p.path.option);
      if (!o) return fail(`no cost option "${p.path.option}"`);
      const path = p.path;
      const finish = (
        next: CostOption,
        label: string,
        before: unknown,
        after: unknown,
      ): StructuralResult => ({
        template: { ...template, costOptions: replace(next) },
        applied: { op: "adjustCost", path: label, mode: p.mode, before, after },
      });

      if ("line" in path) {
        const line = o.lines.find((l) => lineKey(l) === path.line);
        if (!line) return fail(`no line "${path.line}" in "${o.id}"`);
        const after = adjustNum(line.delta, p.mode, p.value);
        if (after === undefined)
          return fail(`line "${path.line}" has no value to ${p.mode}`);
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
      const after = adjustNum(current, p.mode, p.value);
      if (after === undefined)
        return fail(`"${path.param}.${path.field}" has no value to ${p.mode}`);
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
      const o = find(p.option);
      if (!o) return fail(`no cost option "${p.option}"`);
      const param = o.params?.find((x) => x.id === p.param);
      if (!param || param.kind !== "resource")
        return fail(`"${p.param}" is not a resource param of "${p.option}"`);
      if (p.group.trim() === "") return fail("empty group name");
      const params = o.params!.map(
        (x): ParamDef => (x.id === p.param ? { ...param, group: p.group } : x),
      );
      return done(replace({ ...o, params }), `${p.option}.${p.param}`);
    }
  }
}
