import { resolveClassInstance } from "@/game/data/registries/classes.registry";
import { Character } from "@/game/domain/character/Character";

export function getMaximumHitDice(
  character: Character,
): Record<number, number> {
  const hitDiceInstance: Record<number, number> = {};

  Object.values(character.classes.byId).forEach((classInstance) => {
    const hitDieSize = resolveClassInstance(classInstance).hitDie;
    hitDiceInstance[hitDieSize] =
      (hitDiceInstance[hitDieSize] || 0) + classInstance.level;
  });

  return hitDiceInstance;
}

export function getMaximumHitDiceAsArray(character: Character) {
  const maximumHitDiceArray = Object.entries(character.currentHitDice).map(
    ([diceSize, diceMaximum]) => ({
      diceSize,
      diceMaximum,
    }),
  );

  return maximumHitDiceArray;
}

export function getCurrentHitDiceAsArray(character: Character) {
  const currentHitDiceArray = Object.entries(character.currentHitDice).map(
    ([diceSize, diceAmount]) => ({
      diceSize,
      diceAmount,
    }),
  );

  return currentHitDiceArray;
}
