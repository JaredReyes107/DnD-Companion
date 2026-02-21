export function endTurn(character: Character) {
  const nextLevel = XP_TABLE.find((l) => l.level === currentLevel + 1);
  if (!nextLevel) return null;

  return nextLevel.minXP;
}

export function removeExpiredCombatModifiers(
  combatState: CombatState,
): CombatState {
  const nextModifiers: Record<string, ActiveCombatModifier> = {};

  for (const [id, active] of Object.entries(combatState.modifiers)) {
    const expiredByRound =
      active.expiresAtRound !== undefined &&
      combatState.round > active.expiresAtRound;

    const expiredByTurn =
      active.expiresAtTurn !== undefined &&
      combatState.currentTurnIndex > active.expiresAtTurn;

    if (!expiredByRound && !expiredByTurn) {
      nextModifiers[id] = active;
    }
  }

  return {
    ...combatState,
    modifiers: nextModifiers,
  };
}
