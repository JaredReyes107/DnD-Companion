import { Character } from "../domain/character/Character";
import { RuntimeModifierInstance } from "../data/templates/stats.types";
import { CombatState } from "../domain/combat/combat-state";

export function advanceRound(character: Character) {
  if (!character.combatState) return character;

  const updatedCharacter: Character = {
    ...character,
    combatState: removeExpiredCombatModifiers(character.combatState),
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
