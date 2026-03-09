import * as Crypto from "expo-crypto";

import {
  ActionInstance,
  ConvertResourceEffect,
} from "@/core/entities/actions/action-instance";
import { Character } from "@/core/entities/character/Character";
import {
  RuntimeModifierInstance,
  StatModifierInstance,
} from "@/core/entities/rules/stats.types";
import { decreaseActionResource } from "@/core/entities/combat/action-economy";
import { getStatModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { applyStackingRule } from "@/core/systems/stats/modifiers-stacking-helper";
import { instantiateModifier } from "@/core/rules/character/stat-modifiers-helper";

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

export function applyRuntimeModifier(
  character: Character,
  modifier: StatModifierInstance,
  durationRounds?: number,
): Character {
  if (!character.combatState) return character;

  const id = Crypto.randomUUID();

  const expiresAtRound =
    durationRounds === undefined
      ? undefined
      : character.combatState.round + durationRounds;

  const runtimeInstance: RuntimeModifierInstance = {
    id,
    modifier,
    expiresAtRound,
    appliedAtRound: character.combatState.round,
  };

  return {
    ...character,
    combatState: {
      ...character.combatState,
      runtimeModifiers: {
        ...character.combatState.runtimeModifiers,
        [id]: runtimeInstance,
      },
    },
  };
}

export function isActionAvailable(
  character: Character,
  action: ActionInstance,
): boolean {
  if (!character.combatState) return false;

  let hasActionEconomy = false;

  switch (action.actionSlot) {
    case "action":
      hasActionEconomy =
        character.combatState.actionEconomy.actions.current > 0;
      break;
    case "bonusAction":
      hasActionEconomy =
        character.combatState.actionEconomy.bonusActions.current > 0;
      break;
    case "reaction":
      hasActionEconomy =
        character.combatState.actionEconomy.reactions.current > 0;
      break;
    case "free":
      hasActionEconomy = true;
      break;
  }

  let hasResource = true;
  if (
    action.effects.some((effect) => effect.type === "modifyResource") ||
    action.effects.some((effect) => effect.type === "convertResource")
  ) {
    for (const effect of action.effects) {
      switch (effect.type) {
        case "modifyResource":
          if (effect.amount < 0) {
            hasResource =
              character.resources[effect.resourceId].current >=
              Math.abs(effect.amount);
          } else {
            hasResource = true;
          }
          break;
        case "convertResource":
          hasResource =
            character.resources[effect.from.resourceId].current >=
            effect.from.amount;
          break;
      }
    }
  }

  const isAvailable = hasActionEconomy && hasResource;

  return isAvailable;
}

export function executeAction(
  action: ActionInstance,
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

      case "applyModifier": {
        if (!updatedCharacter.combatState) break;

        for (const modifierId of effect.modifiers) {
          const template = getStatModifierTemplateById(modifierId);

          const modifierInstance = instantiateModifier(
            template,
            updatedCharacter,
            action.id,
          );

          updatedCharacter = applyStackingRule(
            updatedCharacter,
            modifierInstance.templateId,
            effect.stacking,
          );

          updatedCharacter = applyRuntimeModifier(
            updatedCharacter,
            modifierInstance,
            effect.durationRounds,
          );
        }
        break;
      }
    }
  }

  updatedCharacter = decreaseActionResource(
    updatedCharacter,
    action.actionSlot,
  );

  ctx.dispatch(updatedCharacter);
}
