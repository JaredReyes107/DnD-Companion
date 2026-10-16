import { Character } from "@/core/entities/character/Character";
import { ActionInstance } from "@/core/entities/actions/action-instance";
import { ActionSlot } from "@/core/entities/combat/action-economy";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "../character/features-helper";
import {
  getActionById,
  GroupedActions,
} from "@/core/data/registries/actions.registry";
import { getActionsFromChoices } from "@/core/rules/character/choices-helper";
import { DEFAULT_ACTIONS } from "@/core/data/actions/default-actions";
import { grantsOfType } from "../shared/grant-filters";

export function getActionsFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    grantsOfType(feature.grants, "action").forEach((g) => ids.add(g.id));
  }
  return ids;
}

export function buildDefaultCharacterActions(): Record<string, ActionInstance> {
  const defaultActions = DEFAULT_ACTIONS;

  return defaultActions;
}

export function buildCharacterClassActions(
  character: Character,
): Record<string, ActionInstance> {
  const ids = new Set([
    ...getActionsFromFeatures(getActiveFeatures(character)),
    ...getActionsFromChoices(character),
  ]);
  const next: Record<string, ActionInstance> = {};
  for (const id of ids) next[id] = getActionById(id);
  return next;
}

export function buildCharacterActions(
  character: Character,
): Record<string, ActionInstance> {
  let allActions = {};

  const defaultActions = buildDefaultCharacterActions();
  const classActions = buildCharacterClassActions(character);

  allActions = { ...defaultActions, ...classActions };

  return allActions;
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
