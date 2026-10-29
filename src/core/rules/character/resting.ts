import { Character } from "@/core/entities/character/Character";
import { buildCombatState } from "@/core/rules/combat/combat-helper";
import { onLongRest, onShortRest } from "@/core/systems/combat/combat-triggers";
import { applyTimingTriggers } from "./resource-recharge";

// A long rest also fires shortRest triggers, so short-rest resources refill on it too.
export function takeLongRest(character: Character): Character {
  const rested = applyTimingTriggers(
    {
      ...character,
      hitPoints: {
        ...character.hitPoints,
        temporalHP: 0,
        currentHP: character.hitPoints.currentMaximumHP,
      },
      // A long rest ends the encounter's runtime state (statuses, runtime modifiers, death saves).
      combatState: character.combatState
        ? buildCombatState(character)
        : undefined,
    },
    ["longRest", "shortRest"],
  );
  return onLongRest(rested);
}

export function takeShortRest(character: Character): Character {
  return onShortRest(applyTimingTriggers(character, ["shortRest"]));
}
