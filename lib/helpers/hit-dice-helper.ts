import { resolveClassInstance } from "@/game/registries/classes.registry";
import { Character } from "@/game/types/instances/Character";

export function getMaximumHitDice(
  character: Character,
): Record<number, number> {
  const hitDiceInstance: Record<number, number> = {};

  Object.values(character.classes.byId).map((classInstance) => {
    const hitDieSize = resolveClassInstance(classInstance).hitDie;

    if (!hitDiceInstance[hitDieSize]) {
      hitDiceInstance[hitDieSize] = classInstance.level;
    } else {
      hitDiceInstance[hitDieSize] =
        hitDiceInstance[hitDieSize] + classInstance.level;
    }
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
