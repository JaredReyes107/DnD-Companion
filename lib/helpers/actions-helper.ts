import { Character } from "@/game/types/instances/Character";
import { Action } from "@/game/types/instances/action";
import { ActionResourceType } from "@/game/mechanics/action-economy";
import { FeatureTemplate } from "@/game/types/templates/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getActionById,
  GroupedActions,
} from "@/game/registries/actions.registry";
import { DEFAULT_ACTIONS } from "@/game/base-data/actions/default-actions";

export function getActionsFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();

  for (const feature of features) {
    feature.actions?.forEach((id) => ids.add(id));
  }

  return ids;
}

export function buildDefaultCharacterActions(): Record<string, Action> {
  const defaultActions = DEFAULT_ACTIONS;

  return defaultActions;
}

export function buildCharacterClassActions(
  character: Character,
): Record<string, Action> {
  const characterFeatures = getActiveFeatures(character.classes);

  const actionIds = getActionsFromFeatures(characterFeatures);

  const nextActions = { ...character.actions };

  // Añadir acciones faltantes
  for (const id of actionIds) {
    if (!nextActions[id]) {
      const action = getActionById(id);

      nextActions[id] = action;
    }
  }

  // Eliminar recursos que ya no deberían existir
  /*
  for (const id of Object.keys(nextResources)) {
    if (!resourceIds.has(id)) {
      delete nextResources[id];
    }
  }
  */

  return nextActions;
}

export function buildCharacterActions(
  character: Character,
): Record<string, Action> {
  let allActions = {};

  const defaultActions = buildDefaultCharacterActions();
  const classActions = buildCharacterClassActions(character);

  allActions = { ...defaultActions, ...classActions };

  return allActions;
}

export type ActionSectionData = {
  slot: ActionResourceType;
  actions: GroupedActions[ActionResourceType];
};

export function groupedActionsAsArray(
  grouped: GroupedActions,
): ActionSectionData[] {
  return Object.entries(grouped).map(([slot, actions]) => ({
    slot: slot as ActionResourceType,
    actions,
  }));
}
