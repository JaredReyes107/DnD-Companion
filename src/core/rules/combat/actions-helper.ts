import { Character } from "@/core/entities/character/Character";
import { ActionInstance } from "@/core/entities/actions/action-instance";
import { ActionSlot } from "@/core/entities/combat/action-economy";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "../character/features-helper";
import {
  getActionRegistry,
  GroupedActions,
} from "@/core/data/registries/actions.registry";
import { getActionsFromChoices } from "@/core/rules/character/choices-helper";
import { DEFAULT_ACTIONS } from "@/core/data/actions/default-actions";
import { grantsOfType } from "../shared/grant-filters";
import {
  OverrideContext,
  buildOverrideContext,
} from "../overrides/active-overrides";
import { resolveTemplateWith } from "../overrides/resolve-template";

export function getActionsFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    grantsOfType(feature.grants, "action").forEach((g) => ids.add(g.id));
  }
  return ids;
}

/** Ids only. Defaults first, then feature grants, then choice grants. */
export function getActiveActionIds(character: Character): string[] {
  return [
    ...new Set([
      ...Object.keys(DEFAULT_ACTIONS),
      ...getActionsFromFeatures(getActiveFeatures(character)),
      ...getActionsFromChoices(character),
    ]),
  ];
}

/** Active actions after overrides, keyed by registry id. Build the context once per render. */
export function resolveActiveActions(
  character: Character,
  overrides: OverrideContext = buildOverrideContext(character),
): Record<string, ActionInstance> {
  const registry = getActionRegistry();
  const out: Record<string, ActionInstance> = {};
  for (const id of getActiveActionIds(character)) {
    if (!(id in registry)) {
      console.warn(
        `[actions] granted action "${id}" is not registered; skipped`,
      );
      continue; // dangling grants used to crash the tab; commit 8 removes them
    }
    out[id] = resolveTemplateWith("action", id, overrides).template;
  }
  return out;
}

export type ActionSectionData = {
  slot: ActionSlot;
  actions: GroupedActions[ActionSlot];
};

export function groupedActionsAsArray(
  grouped: GroupedActions,
): ActionSectionData[] {
  return Object.entries(grouped).map(([slot, actions]) => ({
    slot: slot as ActionSlot,
    actions,
  }));
}
