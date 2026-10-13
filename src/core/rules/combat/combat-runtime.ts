import { Character } from "@/core/entities/character/Character";
import { CombatState } from "@/core/entities/combat/combat-state";
import { AdvantageInstance } from "@/core/entities/rules/advantage/advantage-instance";
import { isExpiredByEvent } from "./expiry-helper";

export function startNewTurn(character: Character): Character {
  if (!character.combatState) return character;

  const updatedCombatState = {
    ...character.combatState,
    actionEconomy: {
      actions: { max: 1, current: 1 },
      bonusActions: { max: 1, current: 1 },
      reactions: { max: 1, current: 1 },
    },
    round: character.combatState.round + 1,
  };

  return {
    ...character,
    combatState: updatedCombatState,
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
