import { getActionById } from "@/core/data/registries/actions.registry";
import { getModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { getResourceById } from "@/core/data/registries/resources.registry";
import { getStatusTemplateById } from "@/core/data/registries/status.registry";
import { Character } from "@/core/entities/character/Character";
import {
  ADJUSTABLE_FIELDS,
  AppliedPatch,
  OverrideFor,
  OverrideTemplate,
  PATCHABLE_FIELDS,
  ResolvedTemplate,
  Selector,
  TemplateByKind,
  TemplateKind,
} from "@/core/entities/rules/override/override-template";
import { OverrideContext, buildOverrideContext } from "./active-overrides";
import { ActionEffect } from "@/core/entities/actions/action-instance";
import { ModifierType } from "@/core/entities/modifiers/Modifier";
import { Num } from "@/core/entities/rules/expr/expr";
import { adjustNum, toExpr } from "@/core/entities/rules/override/adjust-num";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { DEFAULT_MODIFIER_PRIORITY } from "../modifiers/stacking";

const LOOKUP: { [K in TemplateKind]: (id: string) => TemplateByKind[K] } = {
  resource: getResourceById,
  action: getActionById,
  modifier: getModifierTemplateById,
  status: getStatusTemplateById,
};

function applyPatches<K extends TemplateKind>(
  kind: K,
  base: TemplateByKind[K],
  overrides: OverrideFor<K>[],
): { template: TemplateByKind[K]; trail: AppliedPatch[] } {
  const allowed = PATCHABLE_FIELDS[kind] as readonly string[];
  let template = base as Record<string, unknown>;
  const trail: AppliedPatch[] = [];

  for (const o of overrides) {
    for (const p of o.patches) {
      if (p.op === "describe") {
        trail.push({
          overrideId: o.id,
          sourceId: o.sourceId,
          op: "describe",
          mode: p.mode,
          text: p.text,
        });
        continue;
      }
      if (p.op === "removeEffect" || p.op === "addEffect") {
        if (kind !== "action") {
          console.warn(
            `[overrides] "${o.id}": ${p.op} only applies to actions; ignored`,
          );
          continue;
        }
        const effects = (template.effects as ActionEffect[] | undefined) ?? [];
        if (p.op === "removeEffect") {
          if (!effects.some((e) => e.key === p.key)) {
            console.warn(
              `[overrides] "${o.id}": no effect with key "${p.key}"; ignored`,
            );
            continue;
          }
          template = {
            ...template,
            effects: effects.filter((e) => e.key !== p.key),
          };
          trail.push({
            overrideId: o.id,
            sourceId: o.sourceId,
            op: "removeEffect",
            key: p.key,
          });
        } else {
          if (effects.some((e) => e.key === p.effect.key)) {
            console.warn(
              `[overrides] "${o.id}": effect key "${p.effect.key}" already exists; ignored`,
            );
            continue;
          }
          template = {
            ...template,
            effects:
              p.position === "start"
                ? [p.effect, ...effects]
                : [...effects, p.effect],
          };
          trail.push({
            overrideId: o.id,
            sourceId: o.sourceId,
            op: "addEffect",
            key: p.effect.key,
          });
        }
        continue;
      }
      if (p.op === "adjust") {
        if (!(ADJUSTABLE_FIELDS[kind] as readonly string[]).includes(p.field)) {
          console.warn(
            `[overrides] "${o.id}" adjusts non-adjustable ${kind}.${p.field}; ignored`,
          );
          continue;
        }
        // A modifier without its own priority uses the default for its type.
        const current =
          kind === "modifier" &&
          p.field === "priority" &&
          template.priority === undefined
            ? DEFAULT_MODIFIER_PRIORITY[template.type as ModifierType]
            : (template[p.field] as Num | undefined);
        const next = adjustNum(current, p.mode, p.value);
        if (next === undefined) {
          console.warn(
            `[overrides] "${o.id}": ${kind}.${p.field} has no value to ${p.mode}; ignored`,
          );
          continue;
        }
        const after =
          kind === "resource" && p.field === "max" ? toExpr(next) : next; // max is always an Expr
        trail.push({
          overrideId: o.id,
          sourceId: o.sourceId,
          op: "adjust",
          field: p.field,
          mode: p.mode,
          before: template[p.field],
          after,
        });
        template = { ...template, [p.field]: after };
        continue;
      }
      if (!allowed.includes(p.field)) {
        console.warn(
          `[overrides] "${o.id}" patches non-patchable ${kind}.${p.field}; ignored`,
        );
        continue;
      }
      trail.push({
        overrideId: o.id,
        sourceId: o.sourceId,
        op: "set",
        field: p.field,
        before: template[p.field],
        after: p.value,
      });
      template = { ...template, [p.field]: p.value }; // never mutate the registry template
    }
  }
  return { template: template as TemplateByKind[K], trail };
}

export function resolveTemplateWith<K extends TemplateKind>(
  kind: K,
  id: string,
  ctx: OverrideContext,
): ResolvedTemplate<K> {
  const base = LOOKUP[kind](id);
  const groups = groupsOf(kind, base);
  const matching = orderOverrides(ctx.active, kind, (o) =>
    matchesTarget(o.target as Selector, id, groups),
  );
  return { kind, id, ...applyPatches(kind, base, matching) };
}

// stable: priority asc, then activation order
export function orderOverrides<K extends TemplateKind>(
  active: OverrideTemplate[],
  kind: K,
  pred: (o: OverrideFor<K>) => boolean,
): OverrideFor<K>[] {
  return active
    .map((o, index) => ({ o, index }))
    .filter(({ o }) => o.kind === kind && pred(o as OverrideFor<K>))
    .sort(
      (a, b) => (a.o.priority ?? 0) - (b.o.priority ?? 0) || a.index - b.index,
    )
    .map(({ o }) => o as OverrideFor<K>);
}

export const resolveTemplate = <K extends TemplateKind>(
  kind: K,
  id: string,
  character: Character,
) => resolveTemplateWith(kind, id, buildOverrideContext(character));

function groupsOf(kind: TemplateKind, template: unknown): readonly string[] {
  return kind === "resource"
    ? ((template as ResourceTemplate).groups ?? [])
    : [];
}

const matchesTarget = (t: Selector, id: string, groups: readonly string[]) =>
  "group" in t ? groups.includes(t.group) : t.id === id;
