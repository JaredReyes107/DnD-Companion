import { Action, ConvertResourceEffect } from "../types/instances/action";
import { Character } from "../types/instances/Character";
import { StatModifier } from "../types/templates/stats";

export function applyResourceDelta(
  character: Character,
  resourceId: string,
  amount: number,
): Character {
  const current = character.resources[resourceId];

  if (!current) return character;

  return {
    ...character,
    resources: {
      ...character.resources,
      [resourceId]: {
        ...current,
        current: current.current + amount,
      },
    },
  };
}

export function applyResourceConversion(
  character: Character,
  effect: ConvertResourceEffect,
): Character {
  const from = character.resources[effect.from.resourceId];
  const to = character.resources[effect.to.resourceId];

  if (!from || !to) return character;

  return {
    ...character,
    resources: {
      ...character.resources,
      [effect.from.resourceId]: {
        ...from,
        current: from.current - effect.from.amount,
      },
      [effect.to.resourceId]: {
        ...to,
        current: to.current + effect.to.amount,
      },
    },
  };
}

export function applyModifier(
  character: Character,
  modifier: StatModifier,
  stacking: "refresh" | "override" | "ignore",
): Character {
  const modifierExists = character.statModifiers[modifier.modifierId];

  if (!modifierExists) {
    return {
      ...character,
      statModifiers: { ...character.statModifiers, modifier },
    };
  }

  if (stacking === "ignore") return character;

  const modifiers = { ...character.statModifiers };

  modifiers[modifierExists.modifierId] =
    stacking === "refresh"
      ? { ...modifier }
      : { ...modifiers[modifierExists.modifierId], ...modifier };

  return {
    ...character,
    statModifiers: modifiers,
  };
}

export function executeAction(
  action: Action,
  ctx: {
    character: Character;
    dispatch: (update: Character) => void;
  },
) {
  let updatedCharacter = ctx.character;

  for (const effect of action.effects) {
    switch (effect.type) {
      case "modifyResource":
        updatedCharacter = applyResourceDelta(
          updatedCharacter,
          effect.resourceId,
          effect.amount,
        );
        break;

      case "convertResource":
        updatedCharacter = applyResourceConversion(updatedCharacter, effect);
        break;

      case "applyModifier":
        updatedCharacter = applyModifier(
          updatedCharacter,
          effect.modifier,
          effect.stacking ?? "refresh",
        );
        break;
    }
  }

  ctx.dispatch(updatedCharacter);
}
