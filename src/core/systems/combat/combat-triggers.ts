import { Character } from "@/core/entities/character/Character";
import {
  sweepExpiredByEvent,
  sweepExpiredPassiveAdvantage,
} from "@/core/rules/combat/expiry-helper";

export function onZeroHp(character: Character): Character {
  if (!character.combatState) return character;
  return {
    ...character,
    combatState: sweepExpiredByEvent(character.combatState, { type: "zeroHp" }),
  };
}

export function onActionTaken(
  character: Character,
  actionId: string,
): Character {
  if (!character.combatState) return character;
  return {
    ...character,
    combatState: sweepExpiredByEvent(character.combatState, {
      type: "actionTaken",
      actionId,
    }),
  };
}

export function onLongRest(character: Character): Character {
  const swept = sweepExpiredPassiveAdvantage(character, { type: "longRest" });
  if (!swept.combatState) return swept;
  return {
    ...swept,
    combatState: sweepExpiredByEvent(swept.combatState, { type: "longRest" }),
  };
}

export function onShortRest(character: Character): Character {
  const swept = sweepExpiredPassiveAdvantage(character, { type: "shortRest" });
  if (!swept.combatState) return swept;
  return {
    ...swept,
    combatState: sweepExpiredByEvent(swept.combatState, { type: "shortRest" }),
  };
}
