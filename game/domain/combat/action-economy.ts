import { EncounterState } from "./encounter-state";

export type ActionResourceType = "action" | "bonusAction" | "reaction" | "free";

export function decreaseActionResource(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState {
  const combatState = encounter.participants[characterId];

  if (!combatState) {
    return encounter;
  }

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

  return {
    ...encounter,
    participants: {
      ...encounter.participants,
      [characterId]: updatedCombatState,
    },
  };
}

export function increaseActionResource(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState {
  const combatState = encounter.participants[characterId];

  if (!combatState) {
    return encounter;
  }

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

  return {
    ...encounter,
    participants: {
      ...encounter.participants,
      [characterId]: updatedCombatState,
    },
  };
}

export function rechargeActionResources(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState {
  const combatState = encounter.participants[characterId];

  if (!combatState) {
    return encounter;
  }

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

  return {
    ...encounter,
    participants: {
      ...encounter.participants,
      [characterId]: updatedCombatState,
    },
  };
}

export function cycleActionResource(
  encounter: EncounterState,
  characterId: string,
  actionResourceType: ActionResourceType,
): EncounterState {
  const combatState = encounter.participants[characterId];

  if (!combatState) {
    return encounter;
  }

  let updatedCombatState = { ...combatState };

  switch (actionResourceType) {
    case "action":
      if (combatState.actionEconomy.actions.current > 0) {
        updatedCombatState = decreaseActionResource(
          encounter,
          characterId,
          actionResourceType,
        ).participants[characterId];
      } else {
        updatedCombatState = rechargeActionResources(
          encounter,
          characterId,
          actionResourceType,
        ).participants[characterId];
      }
      break;
    case "bonusAction":
      if (combatState.actionEconomy.bonusActions.current > 0) {
        updatedCombatState = decreaseActionResource(
          encounter,
          characterId,
          actionResourceType,
        ).participants[characterId];
      } else {
        updatedCombatState = rechargeActionResources(
          encounter,
          characterId,
          actionResourceType,
        ).participants[characterId];
      }
      break;
    case "reaction":
      if (combatState.actionEconomy.reactions.current > 0) {
        updatedCombatState = decreaseActionResource(
          encounter,
          characterId,
          actionResourceType,
        ).participants[characterId];
      } else {
        updatedCombatState = rechargeActionResources(
          encounter,
          characterId,
          actionResourceType,
        ).participants[characterId];
      }
      break;
  }

  return {
    ...encounter,
    participants: {
      ...encounter.participants,
      [characterId]: updatedCombatState,
    },
  };
}
