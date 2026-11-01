import { ResourceTemplate } from "../resource-template";
import {
  ActionEffect,
  ActionInstance,
} from "@/core/entities/actions/action-instance";
import { ModifierTemplate } from "@/core/entities/modifiers/Modifier";
import { StatusTemplate } from "../status/status-template";
import { Num } from "@/core/entities/rules/expr/expr";

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

export type IdSelector = { id: string };
export type GroupSelector = { group: string };
/** Only resources have groups. */
export type Selector = IdSelector | GroupSelector;

export type OverrideFor<K extends TemplateKind> = {
  id: string;
  kind: K;
  sourceId?: string;
  target: K extends "resource" ? Selector : IdSelector;
  priority?: number;
  patches: Patch<K>[];
};
export type OverrideTemplate = {
  [K in TemplateKind]: OverrideFor<K>;
}[TemplateKind];

export type AdjustMode = "set" | "add" | "mul";

export type AdjustableFields = {
  resource: "max" | "rank";
  action: never;
  modifier: "value" | "priority";
  status: never;
};
export const ADJUSTABLE_FIELDS: {
  [K in TemplateKind]: readonly AdjustableFields[K][];
} = {
  resource: ["max", "rank"],
  action: [],
  modifier: ["value", "priority"],
  status: [],
};

export type AdjustPatch<K extends TemplateKind> = {
  op: "adjust";
  field: AdjustableFields[K];
  mode: AdjustMode;
  value: Num;
};

export type Patch<K extends TemplateKind> =
  | SetPatch<K>
  | AdjustPatch<K>
  | DescriptionPatch
  | CollectionPatch<K>;

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
  | { overrideId: string; sourceId?: string; op: "addEffect"; key: string }
  | {
      overrideId: string;
      sourceId?: string;
      op: "adjust";
      field: string;
      mode: AdjustMode;
      before: unknown;
      after: unknown;
    };

export type ResolvedTemplate<K extends TemplateKind> = {
  kind: K;
  id: string;
  template: TemplateByKind[K];
  trail: AppliedPatch[]; // ordered; a later "set" on the same field supersedes an earlier one
};
