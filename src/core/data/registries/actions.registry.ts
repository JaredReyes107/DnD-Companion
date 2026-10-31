import { ActionInstance } from "@/core/entities/actions/action-instance";

import { DEFAULT_ACTIONS } from "../actions/default-actions";

import { ARTIFICER_ACTIONS } from "../actions/by-class/artificer-actions";
import { BARBARIAN_ACTIONS } from "../actions/by-class/barbarian-actions";
import { BARD_ACTIONS } from "../actions/by-class/bard-actions";
import { CLERIC_ACTIONS } from "../actions/by-class/cleric-actions";
import { DRUID_ACTIONS } from "../actions/by-class/druid-actions";
import { FIGHTER_ACTIONS } from "../actions/by-class/fighter-actions";
import { MONK_ACTIONS } from "../actions/by-class/monk-actions";
import { PALADIN_ACTIONS } from "../actions/by-class/paladin-actions";
import { RANGER_ACTIONS } from "../actions/by-class/ranger-actions";
import { ROGUE_ACTIONS } from "../actions/by-class/rogue-actions";
import { SORCERER_ACTIONS } from "../actions/by-class/sorcerer-actions";
import { WARLOCK_ACTIONS } from "../actions/by-class/warlock-actions";
import { WIZARD_ACTIONS } from "../actions/by-class/wizard-actions";
import { duplicateEffectKeys } from "@/rules/validation/action-effects";
import { normalizeAction } from "@/core/rules/costs/normalize-action";
import {
  duplicateOptionIds,
  duplicateLineKeys,
} from "@/core/rules/costs/cost-keys";

let cached: Record<string, ActionInstance> | null = null;

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

const homebrewActions: Record<string, ActionInstance> = {};

export function registerHomebrewAction(res: ActionInstance) {
  const errors: string[] = [];
  const dupEffects = duplicateEffectKeys(res);
  if (dupEffects.length)
    errors.push(`duplicate effect keys: ${dupEffects.join(", ")}`);

  const options = normalizeAction(res).costOptions ?? []; // throws on a legacy/explicit mix
  const dupOptions = duplicateOptionIds(options);
  if (dupOptions.length)
    errors.push(`duplicate option ids: ${dupOptions.join(", ")}`);
  for (const o of options) {
    const dupLines = duplicateLineKeys(o);
    if (dupLines.length)
      errors.push(
        `option ${o.id} has duplicate line keys: ${dupLines.join(", ")}`,
      );
  }

  if (errors.length)
    throw new Error(`Action ${res.id} is invalid: ${errors.join("; ")}`);
  homebrewActions[res.id] = res; // stored raw, normalized on read
  cached = null;
}

export function getActionRegistry(): Record<string, ActionInstance> {
  return (cached ??= Object.fromEntries(
    Object.entries({ ...BASE_ACTIONS, ...homebrewActions }).map(([id, a]) => [
      id,
      normalizeAction(a),
    ]),
  ));
}

export function getActionById(id: string): ActionInstance {
  const action = getActionRegistry()[id];
  if (!action) {
    throw new Error(`Action not found: ${id}`);
  }
  return action;
}

export type GroupedActions = Record<string, Array<ActionInstance>>;

export function groupActionsBySlot(
  actions: Record<string, ActionInstance>,
): GroupedActions {
  const grouped = {} as GroupedActions;

  for (const resourceId in actions) {
    const action = actions[resourceId];

    let actionSlot = "";

    if (action.duration.kind == "instantaneous") {
      actionSlot = "instantaneous";
    } else if (action.duration.kind == "economy") {
      actionSlot = action.duration.slot;
    } else {
      actionSlot = "timed";
    }

    if (!grouped[actionSlot]) {
      grouped[actionSlot] = [];
    }

    grouped[actionSlot].push(action);
  }

  return grouped;
}
