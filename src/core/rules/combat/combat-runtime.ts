import { Character } from "@/core/entities/character/Character";
import { CombatState } from "@/core/entities/combat/combat-state";
import { AdvantageInstance } from "@/core/entities/rules/advantage/advantage-instance";
import { isExpiredByEvent } from "./expiry-helper";

export function startNewTurn(character: Character): Character {
  if (!character.combatState) return character;
  const { actions, bonusActions, reactions } = character.actionLimits;
  return {
    ...character,
    combatState: {
      ...character.combatState,
      actionEconomy: {
        actions: { max: actions, current: actions },
        bonusActions: { max: bonusActions, current: bonusActions },
        reactions: { max: reactions, current: reactions },
      },
      round: character.combatState.round + 1,
    },
  };
}

export function removeExpiredCombatAdvantage(
  combatState: CombatState,
): CombatState {
  const nextInstances: Record<string, AdvantageInstance> = {};

  for (const [id, instance] of Object.entries(
    combatState.runtimeAdvantageInstances,
  )) {
    const expired = isExpiredByEvent(instance.expiryConditions, {
      type: "turnEnded",
      round: combatState.round,
    });
    if (!expired) nextInstances[id] = instance;
  }

  return { ...combatState, runtimeAdvantageInstances: nextInstances };
}
