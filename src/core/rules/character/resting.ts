import { Character } from "@/core/entities/character/Character";
import { buildCombatState } from "@/core/rules/combat/combat-helper";
import { onLongRest, onShortRest } from "@/core/systems/combat/combat-triggers";
import { resetChoicesForTrigger } from "./choices-helper";
import { restoreResourcesByTrigger } from "./resource-recharge";

export function takeLongRest(character: Character): Character {
  const rested: Character = {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: 0,
      currentHP: character.hitPoints.currentMaximumHP,
    },
    combatState: buildCombatState(character),
    resources: restoreResourcesByTrigger(character.resources, [
      "longRest",
      "shortRest",
    ]),
    featureChoices: resetChoicesForTrigger(character, "longRest"),
  };
  return onLongRest(rested);
}

export function takeShortRest(character: Character): Character {
  const rested: Character = {
    ...character,
    resources: restoreResourcesByTrigger(character.resources, ["shortRest"]),
    featureChoices: resetChoicesForTrigger(character, "shortRest"),
  };
  return onShortRest(rested);
}
