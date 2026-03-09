import { Character } from "../character/Character";
import { CombatState } from "./combat-state";
import { EncounterState } from "./encounter-state";

export type ActionResourceType = "action" | "bonusAction" | "reaction" | "free";

export function decreaseActionResource(
  character: Character,
  actionResourceType: ActionResourceType,
): Character;
export function decreaseActionResource(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState;
export function decreaseActionResource(
  state: EncounterState | Character,
  arg1: string | ActionResourceType,
  arg2?: ActionResourceType,
): EncounterState | Character {
  if ("participants" in state) {
    // EncounterState branch
    const characterId = arg1 as string;
    const actionResourceType = arg2 as ActionResourceType;
    const combatState = state.participants[characterId];

    if (!combatState) {
      return state;
    }

    const updatedCombatState = decreaseCombatStateActionResource(
      combatState,
      actionResourceType,
    );

    return {
      ...state,
      participants: {
        ...state.participants,
        [characterId]: updatedCombatState,
      },
    };
  } else {
    // Character branch
    const character = state;
    const actionResourceType = arg1 as ActionResourceType;

    if (!character.combatState) {
      return character;
    }

    const updatedCombatState = decreaseCombatStateActionResource(
      character.combatState,
      actionResourceType,
    );

    return {
      ...character,
      combatState: updatedCombatState,
    };
  }
}

function decreaseCombatStateActionResource(
  combatState: CombatState,
  actionResourceType: ActionResourceType,
): CombatState {
  const updatedCombatState = { ...combatState };

  switch (actionResourceType) {
    case "action":
      updatedCombatState.actionEconomy.actions = {
        ...combatState.actionEconomy.actions,
        current: Math.max(combatState.actionEconomy.actions.current - 1, 0),
      };
      break;
    case "bonusAction":
      updatedCombatState.actionEconomy.bonusActions = {
        ...combatState.actionEconomy.bonusActions,
        current: Math.max(
          combatState.actionEconomy.bonusActions.current - 1,
          0,
        ),
      };
      break;
    case "reaction":
      updatedCombatState.actionEconomy.reactions = {
        ...combatState.actionEconomy.reactions,
        current: Math.max(combatState.actionEconomy.reactions.current - 1, 0),
      };
      break;
    default:
      break;
  }

  return updatedCombatState;
}

export function increaseActionResource(
  character: Character,
  actionResourceType: ActionResourceType,
): Character;
export function increaseActionResource(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState;
export function increaseActionResource(
  state: EncounterState | Character,
  arg1: string | ActionResourceType,
  arg2?: ActionResourceType,
): EncounterState | Character {
  if ("participants" in state) {
    // EncounterState branch
    const characterId = arg1;
    const actionResourceType = arg2!;
    const combatState = state.participants[characterId];

    if (!combatState) {
      return state;
    }

    const updatedCombatState = increaseCombatStateActionResource(
      combatState,
      actionResourceType,
    );

    return {
      ...state,
      participants: {
        ...state.participants,
        [characterId]: updatedCombatState,
      },
    };
  } else {
    // Character branch
    const character = state;
    const actionResourceType = arg1 as ActionResourceType;

    if (!character.combatState) {
      return character;
    }

    const updatedCombatState = increaseCombatStateActionResource(
      character.combatState,
      actionResourceType,
    );

    return {
      ...character,
      combatState: updatedCombatState,
    };
  }
}

function increaseCombatStateActionResource(
  combatState: CombatState,
  actionResourceType: ActionResourceType,
): CombatState {
  const updatedCombatState = { ...combatState };

  switch (actionResourceType) {
    case "action":
      updatedCombatState.actionEconomy.actions = {
        ...combatState.actionEconomy.actions,
        current: Math.min(combatState.actionEconomy.actions.current + 1, 1),
      };
      break;
    case "bonusAction":
      updatedCombatState.actionEconomy.bonusActions = {
        ...combatState.actionEconomy.bonusActions,
        current: Math.min(
          combatState.actionEconomy.bonusActions.current + 1,
          1,
        ),
      };
      break;
    case "reaction":
      updatedCombatState.actionEconomy.reactions = {
        ...combatState.actionEconomy.reactions,
        current: Math.min(combatState.actionEconomy.reactions.current + 1, 1),
      };
      break;
  }

  return updatedCombatState;
}

export function rechargeActionResources(
  character: Character,
  actionResourceType: ActionResourceType,
): Character;
export function rechargeActionResources(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState;
export function rechargeActionResources(
  state: EncounterState | Character,
  arg1: string | ActionResourceType,
  arg2?: ActionResourceType,
): EncounterState | Character {
  if ("participants" in state) {
    // EncounterState branch
    const characterId = arg1;
    const actionResourceType = arg2!;
    const combatState = state.participants[characterId];

    if (!combatState) {
      return state;
    }

    const updatedCombatState = rechargeCombatStateActionResource(
      combatState,
      actionResourceType,
    );

    return {
      ...state,
      participants: {
        ...state.participants,
        [characterId]: updatedCombatState,
      },
    };
  } else {
    // Character branch
    const character = state;
    const actionResourceType = arg1 as ActionResourceType;

    if (!character.combatState) {
      return character;
    }

    const updatedCombatState = rechargeCombatStateActionResource(
      character.combatState,
      actionResourceType,
    );

    return {
      ...character,
      combatState: updatedCombatState,
    };
  }
}

function rechargeCombatStateActionResource(
  combatState: CombatState,
  actionResourceType: ActionResourceType,
): CombatState {
  const updatedCombatState = { ...combatState };

  switch (actionResourceType) {
    case "action":
      updatedCombatState.actionEconomy.actions = {
        ...combatState.actionEconomy.actions,
        current: combatState.actionEconomy.actions.max,
      };
      break;

    case "bonusAction":
      updatedCombatState.actionEconomy.bonusActions = {
        ...combatState.actionEconomy.bonusActions,
        current: combatState.actionEconomy.bonusActions.max,
      };
      break;

    case "reaction":
      updatedCombatState.actionEconomy.reactions = {
        ...combatState.actionEconomy.reactions,
        current: combatState.actionEconomy.reactions.max,
      };
      break;
  }

  return updatedCombatState;
}

function getActionResourceCurrent(
  combatState: CombatState,
  actionResourceType: ActionResourceType,
): number {
  switch (actionResourceType) {
    case "action":
      return combatState.actionEconomy.actions.current;
    case "bonusAction":
      return combatState.actionEconomy.bonusActions.current;
    case "reaction":
      return combatState.actionEconomy.reactions.current;
    default:
      return 0;
  }
}

function cycleCombatStateActionResource(
  combatState: CombatState,
  actionResourceType: ActionResourceType,
): CombatState {
  const currentLevel = getActionResourceCurrent(
    combatState,
    actionResourceType,
  );

  if (currentLevel > 0) {
    return decreaseCombatStateActionResource(combatState, actionResourceType);
  } else {
    return rechargeCombatStateActionResource(combatState, actionResourceType);
  }
}

export function cycleActionResource(
  character: Character,
  actionResourceType: ActionResourceType,
): Character;
export function cycleActionResource(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState;
export function cycleActionResource(
  state: EncounterState | Character,
  arg1: string | ActionResourceType,
  arg2?: ActionResourceType,
): EncounterState | Character {
  if ("participants" in state) {
    // EncounterState branch
    const characterId = arg1;
    const actionResourceType = arg2!;
    const combatState = state.participants[characterId];

    if (!combatState) {
      return state;
    }

    const updatedCombatState = cycleCombatStateActionResource(
      combatState,
      actionResourceType,
    );

    return {
      ...state,
      participants: {
        ...state.participants,
        [characterId]: updatedCombatState,
      },
    };
  } else {
    // Character branch
    const character = state;
    const actionResourceType = arg1 as ActionResourceType;

    if (!character.combatState) {
      return character;
    }

    const updatedCombatState = cycleCombatStateActionResource(
      character.combatState,
      actionResourceType,
    );

    return {
      ...character,
      combatState: updatedCombatState,
    };
  }
}
