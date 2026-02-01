import { Character } from "../types/instances/character";

type ActionResourceType = "action" | "bonus" | "reaction";

export function decreaseActionResource(
  character: Character,
  actionResourceType: string,
): Character {
  if (!character.combatState) {
    return character;
  }

  let updatedCharacter = character;

  switch (actionResourceType) {
    case "action":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            actions: {
              ...character.combatState.actionEconomy.actions,
              current: Math.max(
                character.combatState.actionEconomy.actions.current - 1,
                0,
              ),
            },
          },
        },
      };
      break;
    case "bonus":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            bonusActions: {
              ...character.combatState.actionEconomy.bonusActions,
              current: Math.max(
                character.combatState.actionEconomy.bonusActions.current - 1,
                0,
              ),
            },
          },
        },
      };
      break;
    case "reaction":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            reactions: {
              ...character.combatState.actionEconomy.reactions,
              current: Math.max(
                character.combatState.actionEconomy.reactions.current - 1,
                0,
              ),
            },
          },
        },
      };
      break;
  }

  return updatedCharacter;
}

export function increaseActionResource(
  character: Character,
  actionResourceType: ActionResourceType,
): Character {
  if (!character.combatState) {
    return character;
  }

  let updatedCharacter = character;

  switch (actionResourceType) {
    case "action":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            actions: {
              ...character.combatState.actionEconomy.actions,
              current: Math.min(
                character.combatState.actionEconomy.actions.current + 1,
                character.combatState.actionEconomy.actions.max,
              ),
            },
          },
        },
      };
      break;
    case "bonus":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            bonusActions: {
              ...character.combatState.actionEconomy.actions,
              current: Math.min(
                character.combatState.actionEconomy.actions.current + 1,
                character.combatState.actionEconomy.actions.max,
              ),
            },
          },
        },
      };
      break;
    case "reaction":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            reactions: {
              ...character.combatState.actionEconomy.actions,
              current: Math.min(
                character.combatState.actionEconomy.actions.current + 1,
                character.combatState.actionEconomy.actions.max,
              ),
            },
          },
        },
      };
      break;
  }

  return updatedCharacter;
}

export function rechargeActionResources(
  character: Character,
  actionResourceType: ActionResourceType,
): Character {
  if (!character.combatState) {
    return character;
  }

  let updatedCharacter = character;

  switch (actionResourceType) {
    case "action":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            actions: {
              ...character.combatState.actionEconomy.actions,
              current: character.combatState.actionEconomy.actions.max,
            },
          },
        },
      };
      break;
    case "bonus":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            bonusActions: {
              ...character.combatState.actionEconomy.bonusActions,
              current: character.combatState.actionEconomy.bonusActions.max,
            },
          },
        },
      };
      break;
    case "reaction":
      updatedCharacter = {
        ...character,
        combatState: {
          ...character.combatState,
          actionEconomy: {
            ...character.combatState.actionEconomy,
            reactions: {
              ...character.combatState.actionEconomy.reactions,
              current: character.combatState.actionEconomy.reactions.max,
            },
          },
        },
      };
      break;
  }

  return updatedCharacter;
}

export function cycleActionResource(
  character: Character,
  actionResourceType: ActionResourceType,
): Character {
  if (!character.combatState) {
    return character;
  }

  let updatedCharacter = character;

  switch (actionResourceType) {
    case "action":
      if (character.combatState.actionEconomy.actions.current > 0) {
        updatedCharacter = decreaseActionResource(
          character,
          actionResourceType,
        );
      } else {
        updatedCharacter = rechargeActionResources(
          character,
          actionResourceType,
        );
      }
      break;
    case "bonus":
      if (character.combatState.actionEconomy.bonusActions.current > 0) {
        updatedCharacter = decreaseActionResource(
          character,
          actionResourceType,
        );
      } else {
        updatedCharacter = rechargeActionResources(
          character,
          actionResourceType,
        );
      }
      break;
    case "reaction":
      if (character.combatState.actionEconomy.reactions.current > 0) {
        updatedCharacter = decreaseActionResource(
          character,
          actionResourceType,
        );
      } else {
        updatedCharacter = rechargeActionResources(
          character,
          actionResourceType,
        );
      }
      break;
  }

  return updatedCharacter;
}
