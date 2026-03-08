import { Character } from "../domain/character/Character";
import { RuntimeModifierInstance } from "../data/templates/stats.types";
import { CombatState } from "../domain/combat/combat-state";

export function advanceRound(character: Character) {
  if (!character.combatState) return character;

  const updatedCombatState = {
    ...character.combatState,
    actionEconomy: {
      actions: 1,
      bonusActions: 1,
      reactions: 1,
    },
    round: character.combatState.round + 1,
  };

  const updatedCharacter: Character = {
    ...character,
    combatState: removeExpiredCombatModifiers(updatedCombatState),
  };

  return updatedCharacter;
}

export function removeExpiredCombatModifiers(
  combatState: CombatState,
): CombatState {
  const nextModifiers: Record<string, RuntimeModifierInstance> = {};

  for (const [id, active] of Object.entries(combatState.runtimeModifiers)) {
    const expiredByRound =
      active.expiresAtRound !== undefined &&
      combatState.round >= active.expiresAtRound;

    if (!expiredByRound) {
      nextModifiers[id] = active;
    }
  }

  return {
    ...combatState,
    runtimeModifiers: nextModifiers,
  };
}
