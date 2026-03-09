import { ActionInstance } from "@/game/domain/actions/action-instance";
import { ActionResourceType } from "../../domain/combat/action-economy";

import { DEFAULT_ACTIONS } from "../base/actions/default-actions";

import { ARTIFICER_ACTIONS } from "../base/actions/by-class/artificer-actions";
import { BARBARIAN_ACTIONS } from "../base/actions/by-class/barbarians-actions";
import { BARD_ACTIONS } from "../base/actions/by-class/bard-actions";
import { CLERIC_ACTIONS } from "../base/actions/by-class/cleric-actions";
import { DRUID_ACTIONS } from "../base/actions/by-class/druid-actions";
import { FIGHTER_ACTIONS } from "../base/actions/by-class/fighter-actions";
import { MONK_ACTIONS } from "../base/actions/by-class/monk-actions";
import { PALADIN_ACTIONS } from "../base/actions/by-class/paladin-actions";
import { RANGER_ACTIONS } from "../base/actions/by-class/ranger-actions";
import { ROGUE_ACTIONS } from "../base/actions/by-class/rogue-actions";
import { SORCERER_ACTIONS } from "../base/actions/by-class/sorcerer-actions";
import { WARLOCK_ACTIONS } from "../base/actions/by-class/warlock-actions";
import { WIZARD_ACTIONS } from "../base/actions/by-class/wizard-actions";

const homebrewActions: Record<string, ActionInstance> = {};

export const CLASS_ACTIONS = {
  ...ARTIFICER_ACTIONS,
  ...BARBARIAN_ACTIONS,
  ...BARD_ACTIONS,
  ...CLERIC_ACTIONS,
  ...DRUID_ACTIONS,
  ...FIGHTER_ACTIONS,
  ...MONK_ACTIONS,
  ...PALADIN_ACTIONS,
  ...RANGER_ACTIONS,
  ...ROGUE_ACTIONS,
  ...SORCERER_ACTIONS,
  ...WARLOCK_ACTIONS,
  ...WIZARD_ACTIONS,
};

export const BASE_ACTIONS: Record<string, ActionInstance> = {
  ...DEFAULT_ACTIONS,

  ...CLASS_ACTIONS,
};

export function registerHomebrewAction(res: ActionInstance) {
  homebrewActions[res.id] = res;
}

export function getActionRegistry() {
  return {
    ...BASE_ACTIONS,
    ...homebrewActions,
  };
}

export function getActionById(id: string): ActionInstance {
  const action = getActionRegistry()[id];
  if (!action) {
    throw new Error(`Action not found: ${id}`);
  }
  return action;
}

export type GroupedActions = Record<ActionResourceType, Array<ActionInstance>>;

export function groupActionsBySlot(
  actions: Record<string, ActionInstance>,
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
