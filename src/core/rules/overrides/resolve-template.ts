import { getActionById } from "@/core/data/registries/actions.registry";
import { getModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { getResourceById } from "@/core/data/registries/resources.registry";
import { getStatusTemplateById } from "@/core/data/registries/status.registry";
import { Character } from "@/core/entities/character/Character";
import {
  AppliedPatch,
  OverrideFor,
  OverrideTemplate,
  PATCHABLE_FIELDS,
  ResolvedTemplate,
  TemplateByKind,
  TemplateKind,
} from "@/core/entities/rules/override/override-template";
import { OverrideContext, buildOverrideContext } from "./active-overrides";
import { ActionEffect } from "@/core/entities/actions/action-instance";

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
  const matching = orderOverrides(ctx.active, kind, (o) =>
    matchesTarget(o.target, id),
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

const matchesTarget = (t: { id: string }, id: string) => t.id === id;
