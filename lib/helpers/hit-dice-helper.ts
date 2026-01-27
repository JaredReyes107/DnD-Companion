import { resolveClassInstance } from "@/game/registries/classes.registry";
import { Character } from "@/game/types/instances/character";

export function buildHitDice(character: Character): Record<number, number> {
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

  console.log(hitDiceInstance);

  return hitDiceInstance;
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
