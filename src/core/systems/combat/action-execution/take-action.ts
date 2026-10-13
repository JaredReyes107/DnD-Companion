import {
  ActionInstance,
  ConvertResourceEffect,
} from "@/core/entities/actions/action-instance";
import { Character } from "@/core/entities/character/Character";
import { RuntimeModifierInstance } from "@/core/entities/rules/stats.types";
import { decreaseActionResource } from "@/core/entities/combat/action-economy";
import { applyStackingRule } from "@/core/systems/stats/modifiers-stacking-helper";
import { ExpiryCondition } from "@/core/entities/rules/duration/expiry-condition";
import { onActionTaken } from "../combat-triggers";
import {
  AdvantagePolarity,
  AdvantageInstance,
} from "@/core/entities/rules/advantage/advantage-instance";
import * as Crypto from "expo-crypto";
import { instantiateModifier } from "@/core/rules/character/modifiers-helper";
import { getModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { ModifierInstance } from "@/core/entities/modifiers/Modifier";
import { buildExpiryConditions } from "@/core/rules/combat/expiry-helper";
import {
  applyStatus,
  removeStatusesById,
  revokeRuntimeEffectsBySource,
} from "@/core/rules/combat/runtime-effects-helper";
import { resolveStatValue } from "../../stats/stat-resolver";
import { getStatusTemplateById } from "@/core/data/registries/status.registry";
import { StatusInstance } from "@/core/entities/combat/status-instance";

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
  modifier: ModifierInstance,
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

  if (updatedCharacter.combatState) {
    updatedCharacter = onActionTaken(updatedCharacter, action.id);
  }

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
          const template = getModifierTemplateById(modifierId);
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

          const expiryConditions = buildExpiryConditions(
            currentRound,
            effect.durationRounds,
            effect.endsAt,
            effect.endsEarlyOn,
          );

          updatedCharacter = applyRuntimeModifier(
            updatedCharacter,
            modifierInstance,
            expiryConditions,
          );
        }
        break;
      }
      case "applyAdvantage": {
        if (!updatedCharacter.combatState) break;

        const currentRound = updatedCharacter.combatState.round;
        const expiryConditions = buildExpiryConditions(
          currentRound,
          effect.durationRounds,
          effect.endsAt,
          effect.endsEarlyOn,
        );

        for (const nodeId of effect.nodeIds) {
          updatedCharacter = applyRuntimeAdvantage(
            updatedCharacter,
            nodeId,
            effect.polarity,
            action.id,
            expiryConditions,
          );
        }
        break;
      }
      case "applyStatus": {
        if (!updatedCharacter.combatState) break;
        const template = getStatusTemplateById(effect.statusId);
        const limit =
          template.limitStat !== undefined
            ? resolveStatValue(updatedCharacter, {
                type: "derived",
                key: template.limitStat,
              })
            : undefined;
        const timed = buildExpiryConditions(
          updatedCharacter.combatState.round,
          effect.durationRounds,
          effect.endsAt,
          effect.endsEarlyOn,
        );
        const instance: StatusInstance = {
          id: `${effect.statusId}:${action.id}`,
          statusId: effect.statusId,
          sourceId: action.id,
          expiryConditions: [
            ...(template.defaultExpiry ?? []),
            ...(timed ?? []),
          ],
        };
        updatedCharacter = {
          ...updatedCharacter,
          combatState: applyStatus(
            updatedCharacter.combatState,
            instance,
            limit,
          ),
        };
        break;
      }

      case "endEffects": {
        if (!updatedCharacter.combatState) break;
        let cs = updatedCharacter.combatState;
        for (const statusId of effect.statusIds ?? [])
          cs = removeStatusesById(cs, statusId);
        for (const sourceId of effect.sourceIds ?? [])
          cs = revokeRuntimeEffectsBySource(cs, sourceId);
        updatedCharacter = { ...updatedCharacter, combatState: cs };
        break;
      }
    }
  }

  if (action.duration.kind === "economy") {
    updatedCharacter = decreaseActionResource(
      updatedCharacter,
      action.duration.slot,
    );
  }

  ctx.dispatch(updatedCharacter);
}
