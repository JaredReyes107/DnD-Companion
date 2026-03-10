import { ActionResource } from "../../../entities/combat/action-economy/ActionResource";

export function resetTurnResources(movementSpeed: number): ActionResource {
  return {
    actions: 1,
    bonusActions: 1,
    reactions: 1,
    movementRemaining: movementSpeed,
  };
}

export function consumeAction(resources: ActionResource): ActionResource {
  if (resources.actions <= 0) {
    throw new Error("No actions remaining this turn");
  }

  return {
    ...resources,
    actions: resources.actions - 1,
  };
}

export function consumeBonusAction(resources: ActionResource): ActionResource {
  if (resources.bonusActions <= 0) {
    throw new Error("No bonus actions remaining this turn");
  }

  return {
    ...resources,
    bonusActions: resources.bonusActions - 1,
  };
}

export function consumeReaction(resources: ActionResource): ActionResource {
  if (resources.reactions <= 0) {
    throw new Error("No reactions remaining");
  }

  return {
    ...resources,
    reactions: resources.reactions - 1,
  };
}

export function consumeMovement(
  resources: ActionResource,
  distance: number,
): ActionResource {
  if (distance < 0) {
    throw new Error("Movement distance cannot be negative");
  }

  if (distance > resources.movementRemaining) {
    throw new Error("Insufficient movement remaining");
  }

  return {
    ...resources,
    movementRemaining: resources.movementRemaining - distance,
  };
}

export function addMovement(
  resources: ActionResource,
  distance: number,
): ActionResource {
  return {
    ...resources,
    movementRemaining: resources.movementRemaining + distance,
  };
}

export function gainAction(
  resources: ActionResource,
  amount: number = 1,
): ActionResource {
  return {
    ...resources,
    actions: resources.actions + amount,
  };
}

export function gainBonusAction(
  resources: ActionResource,
  amount: number = 1,
): ActionResource {
  return {
    ...resources,
    bonusActions: resources.bonusActions + amount,
  };
}

export function gainReaction(
  resources: ActionResource,
  amount: number = 1,
): ActionResource {
  return {
    ...resources,
    reactions: resources.reactions + amount,
  };
}
