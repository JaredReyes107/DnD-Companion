import { ResourceTemplate } from "../resource-template";
import {
  ActionEffect,
  ActionInstance,
} from "@/core/entities/actions/action-instance";
import { ModifierTemplate } from "@/core/entities/modifiers/Modifier";
import { StatusTemplate } from "../status/status-template";

export type TemplateKind = "resource" | "action" | "modifier" | "status";

export type TemplateByKind = {
  resource: ResourceTemplate;
  action: ActionInstance;
  modifier: ModifierTemplate;
  status: StatusTemplate;
};

/** Deliberately short allow-list of scalar fields. Widen per real need. */
export type PatchableFields = {
  resource: "recharge" | "max" | "category";
  action: "duration";
  modifier: "value" | "priority";
  status: "limitStat" | "bindsSourceEffects";
};

export const PATCHABLE_FIELDS: {
  [K in TemplateKind]: readonly PatchableFields[K][];
} = {
  resource: ["recharge", "max", "category"],
  action: ["duration"],
  modifier: ["value", "priority"],
  status: ["limitStat", "bindsSourceEffects"],
};

export type SetPatch<K extends TemplateKind> = {
  [F in PatchableFields[K]]: {
    op: "set";
    field: F;
    value: TemplateByKind[K][F & keyof TemplateByKind[K]];
  };
}[PatchableFields[K]];

export type DescriptionPatch = {
  op: "describe";
  mode: "append" | "prepend" | "replace";
  /** Locale -> text. Omitted => UI uses the override's own localized description. */
  text?: Record<string, string>;
};

export type ActionEffectPatch =
  | { op: "removeEffect"; key: string }
  | {
      op: "addEffect";
      effect: ActionEffect & { key: string };
      position?: "start" | "end";
    };

type CollectionPatch<K extends TemplateKind> = K extends "action"
  ? ActionEffectPatch
  : never;

export type Patch<K extends TemplateKind> =
  | SetPatch<K>
  | DescriptionPatch
  | CollectionPatch<K>;

export type OverrideFor<K extends TemplateKind> = {
  id: string;
  kind: K;
  sourceId?: string; // who authored it: feature id, homebrew pack
  target: { id: string }; // widened to Selector in commit 5
  priority?: number; // default 0; higher applies later and wins
  patches: Patch<K>[];
};
export type OverrideTemplate = {
  [K in TemplateKind]: OverrideFor<K>;
}[TemplateKind];

export type AppliedPatch =
  | {
      overrideId: string;
      sourceId?: string;
      op: "set";
      field: string;
      before: unknown;
      after: unknown;
    }
  | {
      overrideId: string;
      sourceId?: string;
      op: "describe";
      mode: DescriptionPatch["mode"];
      text?: Record<string, string>;
    }
  | { overrideId: string; sourceId?: string; op: "removeEffect"; key: string }
  | { overrideId: string; sourceId?: string; op: "addEffect"; key: string };

export type ResolvedTemplate<K extends TemplateKind> = {
  kind: K;
  id: string;
  template: TemplateByKind[K];
  trail: AppliedPatch[]; // ordered; a later "set" on the same field supersedes an earlier one
};
