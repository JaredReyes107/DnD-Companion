import { ActionResource } from "../../../entities/combat/action-economy/ActionResource";

export function resetTurnResources(movementSpeed: number): ActionResource {
  return {
    actionAvailable: true,
    bonusActionAvailable: true,
    reactionAvailable: true,
    movementRemaining: movementSpeed,
  };
}

export function consumeAction(resources: ActionResource): ActionResource {
  if (!resources.actionAvailable) {
    throw new Error("Action already used this turn");
  }

  return {
    ...resources,
    actionAvailable: false,
  };
}

export function consumeBonusAction(resources: ActionResource): ActionResource {
  if (!resources.bonusActionAvailable) {
    throw new Error("Bonus Action already used this turn");
  }

  return {
    ...resources,
    bonusActionAvailable: false,
  };
}

export function consumeReaction(resources: ActionResource): ActionResource {
  if (!resources.reactionAvailable) {
    throw new Error("Reaction already used");
  }

  return {
    ...resources,
    reactionAvailable: false,
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
