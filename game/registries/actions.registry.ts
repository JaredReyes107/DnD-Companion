import { DEFAULT_ACTIONS } from "../base-data/actions/default-actions";
import { ACTIONS_SORCERER } from "../base-data/actions/sorcerer-actions";
import { ActionResourceType } from "../mechanics/action-economy";
import { Action } from "../types/instances/action";

const homebrewActions: Record<string, Action> = {};

export const BASE_ACTIONS: Record<string, Action> = {
  ...DEFAULT_ACTIONS,

  ...ACTIONS_SORCERER,
};

export function registerHomebrewAction(res: Action) {
  homebrewActions[res.id] = res;
}

export function getActionRegistry() {
  return {
    ...BASE_ACTIONS,
    ...homebrewActions,
  };
}

export function getActionById(id: string): Action {
  const action = getActionRegistry()[id];
  if (!action) {
    throw new Error(`Action not found: ${id}`);
  }
  return action;
}

export type GroupedActions = Record<ActionResourceType, Array<Action>>;

export function groupActionsBySlot(
  actions: Record<string, Action>,
): GroupedActions {
  const grouped = {} as GroupedActions;

  for (const resourceId in actions) {
    const action = actions[resourceId];

    const actionSlot = action.actionSlot;

    if (!grouped[actionSlot]) {
      grouped[actionSlot] = [];
    }

    grouped[actionSlot].push(action);
  }

  return grouped;
}
