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

export function getActionsFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    feature.grants
      ?.filter((g) => g.type === "action")
      .forEach((g) => ids.add(g.id));
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
  const characterFeatures = getActiveFeatures(character);
  const featureActionIds = getActionsFromFeatures(characterFeatures);

  const choiceActionIds = getActionsFromChoices(character);
  const actionIds = new Set([...featureActionIds, ...choiceActionIds]);

  const nextActions = { ...character.actions };

  for (const id of actionIds) {
    if (!nextActions[id]) {
      const action = getActionById(id);
      nextActions[id] = action;
    }
  }

  return nextActions;
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
