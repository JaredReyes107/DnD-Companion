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
import {
  buildResourceContext,
  ResourceContext,
  resourceCurrent,
} from "@/core/rules/character/resource-max";
import { applyResourceDelta } from "@/core/rules/character/resource-spend";
export { applyResourceDelta };
import {
  PaymentChoice,
  PaymentFailure,
} from "@/core/entities/actions/cost-option";
import { pay } from "@/core/rules/costs/payment";
import { resolveCostChoices } from "@/core/rules/costs/resolve-cost-choices";
import { splitActionCost } from "@/core/rules/costs/split-action-cost";

export function applyResourceConversion(
  character: Character,
  effect: ConvertResourceEffect,
  ctx: ResourceContext = buildResourceContext(character),
): Character {
  if (
    !character.resources[effect.from.resourceId] ||
    !character.resources[effect.to.resourceId]
  ) {
    return character;
  }
  const afterFrom = applyResourceDelta(
    character,
    effect.from.resourceId,
    -effect.from.amount,
    ctx,
  );
  return applyResourceDelta(
    afterFrom,
    effect.to.resourceId,
    effect.to.amount,
    ctx,
  );
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
  ctx?: ResourceContext,
): boolean {
  if (!character.combatState) return false;

  const eco = character.combatState.actionEconomy;
  const hasActionEconomy =
    action.duration.kind !== "economy" ||
    {
      action: eco.actions,
      bonusAction: eco.bonusActions,
      reaction: eco.reactions,
    }[action.duration.slot].current > 0;
  if (!hasActionEconomy) return false;

  let rc = ctx;
  const resourceCtx = () => (rc ??= buildResourceContext(character));

  const { options, effects } = splitActionCost(action);
  if (
    options.length > 0 &&
    !resolveCostChoices(character, options, resourceCtx()).some(
      (c) => c.affordable,
    )
  )
    return false;

  // Legacy conversions still declare their cost as an effect.
  return effects.every(
    (e) =>
      e.type !== "convertResource" ||
      resourceCurrent(character, e.from.resourceId, resourceCtx()) >=
        e.from.amount,
  );
}

export type ExecuteResult =
  | { ok: true }
  | { ok: false; failure: PaymentFailure };

export function executeAction(
  action: ActionInstance,
  ctx: {
    character: Character;
    dispatch: (update: Character) => void;
    payment?: PaymentChoice;
  },
): ExecuteResult {
  const { options, effects } = splitActionCost(action);
  let updatedCharacter = ctx.character;

  if (updatedCharacter.combatState) {
    updatedCharacter = onActionTaken(updatedCharacter, action.id);
  }

  // Pay first. Everything above is local: a failure returns before anything is dispatched.
  if (options.length > 0) {
    const option = ctx.payment
      ? options.find((o) => o.id === ctx.payment!.optionId)
      : options.length === 1
        ? options[0]
        : undefined;
    if (!option) return { ok: false, failure: { kind: "unknownOption" } };
    const paid = pay(
      updatedCharacter,
      option,
      ctx.payment?.params ?? {},
      buildResourceContext(updatedCharacter),
    );
    if (!paid.ok) return paid;
    updatedCharacter = paid.character;
  }

  let resourceCtx: ResourceContext | undefined;
  const rc = () => (resourceCtx ??= buildResourceContext(updatedCharacter));

  for (const effect of effects) {
    switch (effect.type) {
      case "modifyResource":
        updatedCharacter = applyResourceDelta(
          updatedCharacter,
          effect.resourceId,
          effect.amount,
          rc(),
        );
        break;
      case "convertResource":
        updatedCharacter = applyResourceConversion(
          updatedCharacter,
          effect,
          rc(),
        );
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
  return { ok: true };
}
