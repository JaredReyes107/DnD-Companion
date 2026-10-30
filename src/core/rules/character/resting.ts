import { Character } from "@/core/entities/character/Character";
import { endCombat } from "@/core/rules/combat/combat-helper";
import { onLongRest, onShortRest } from "@/core/systems/combat/combat-triggers";
import { applyTimingTriggers } from "./resource-recharge";

/**
 * Artificial long rest (potion, spell, homebrew): every long-rest effect, but
 * combat continues. Effects that expire on a long rest are still swept.
 * A long rest also fires shortRest triggers.
 */
export function takeLongRest(character: Character): Character {
  const healed: Character = {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: 0,
      currentHP: character.hitPoints.currentMaximumHP,
    },
    ...(character.combatState && {
      combatState: {
        ...character.combatState,
        deathSaves: { successes: 0, failures: 0 },
      },
    }),
  };
  return onLongRest(applyTimingTriggers(healed, ["longRest", "shortRest"]));
}

/** Natural long rest: the artificial one, then combat ends and everything combat-scoped is gone. */
export function takeNaturalLongRest(character: Character): Character {
  return endCombat(takeLongRest(character));
}

export function takeShortRest(character: Character): Character {
  return onShortRest(applyTimingTriggers(character, ["shortRest"]));
}
