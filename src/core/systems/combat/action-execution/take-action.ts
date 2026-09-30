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
import { ExpiryCondition } from "@/core/entities/rules/duration/expiry-condition";
import { onActionTaken } from "../combat-triggers";
import {
  AdvantagePolarity,
  AdvantageInstance,
} from "@/core/entities/rules/advantage/advantage-instance";
import * as Crypto from "expo-crypto";

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
  expiryConditions?: ExpiryCondition[],
): Character {
  if (!character.combatState) return character;

  const id = Crypto.randomUUID();

  const runtimeInstance: RuntimeModifierInstance = {
    id,
    modifier,
    expiryConditions,
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

export function applyRuntimeAdvantage(
  character: Character,
  nodeId: string,
  polarity: AdvantagePolarity,
  sourceId: string,
  expiryConditions?: ExpiryCondition[],
): Character {
  if (!character.combatState) return character;

  const id = Crypto.randomUUID();
  const instance: AdvantageInstance = {
    id,
    nodeId,
    polarity,
    sourceId,
    expiryConditions,
  };

  return {
    ...character,
    combatState: {
      ...character.combatState,
      runtimeAdvantageInstances: {
        ...character.combatState.runtimeAdvantageInstances,
        [id]: instance,
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

  if (action.duration.kind === "economy") {
    switch (action.duration.slot) {
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
    }
  } else {
    hasActionEconomy = true;
  }

  let hasResource = true;
  if (
    action.effects.some((effect) => effect.type === "modifyResource") ||
    action.effects.some((effect) => effect.type === "convertResource")
  ) {
    for (const effect of action.effects) {
      switch (effect.type) {
        case "modifyResource":
          if (effect.amount < 0 && hasResource) {
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

  const isAvailable = hasActionEconomy && hasResource; //&& canExecute

  return isAvailable;
}

export function executeAction(
  action: ActionInstance,
  ctx: { character: Character; dispatch: (update: Character) => void },
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

        const currentRound = updatedCharacter.combatState.round;

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

          const expiryConditions: ExpiryCondition[] | undefined =
            effect.durationRounds !== undefined
              ? [
                  {
                    type: "endOfRound",
                    round: currentRound + effect.durationRounds,
                  },
                ]
              : undefined;

          updatedCharacter = applyRuntimeModifier(
            updatedCharacter,
            modifierInstance,
            expiryConditions,
          );
        }
        break;
      }
    }
  }

  if (updatedCharacter.combatState) {
    updatedCharacter = onActionTaken(updatedCharacter, action.id);
  }

  if (action.duration.kind === "economy") {
    updatedCharacter = decreaseActionResource(
      updatedCharacter,
      action.duration.slot,
    );
  }

  ctx.dispatch(updatedCharacter);
}
