import { Character } from "@/core/entities/character/Character";
import { applyTimingTriggers } from "@/core/rules/character/resource-recharge";
import { startNewTurn } from "@/core/rules/combat/combat-runtime";
import {
  sweepExpiredByEvent,
  sweepExpiredPassiveAdvantage,
} from "@/core/rules/combat/expiry-helper";

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

export function onZeroHp(character: Character): Character {
  if (!character.combatState) return character;
  return {
    ...character,
    combatState: sweepExpiredByEvent(character.combatState, { type: "zeroHp" }),
  };
}

export function onStartTurn(character: Character): Character {
  const advanced = applyTimingTriggers(startNewTurn(character), [
    "roundStart",
    "turnStart",
  ]);
  if (!advanced.combatState) return advanced;
  return {
    ...advanced,
    combatState: sweepExpiredByEvent(advanced.combatState, {
      type: "turnStarted",
      newRound: advanced.combatState.round,
    }),
  };
}

export function onEndTurn(character: Character): Character {
  if (!character.combatState) return character;
  const swept: Character = {
    ...character,
    combatState: sweepExpiredByEvent(character.combatState, {
      type: "turnEnded",
      round: character.combatState.round,
    }),
  };
  return applyTimingTriggers(swept, ["turnEnd"]);
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
