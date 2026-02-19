import { getMaximumHitDice } from "@/lib/helpers/hit-dice-helper";
import { Character } from "../types/instances/Character";

export function takeDamage(
  damageTaken: number,
  character: Character,
): Character {
  const remainingTempHP = character.hitPoints.temporalHP - damageTaken;

  if (remainingTempHP < 0) {
    const leftoverDamage = Math.abs(remainingTempHP);
    const remainingHP = character.hitPoints.currentHP - leftoverDamage;

    return {
      ...character,
      hitPoints: {
        ...character.hitPoints,
        temporalHP: 0,
        currentHP: Math.max(remainingHP, 0),
      },
    };
  }

  return {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: remainingTempHP,
    },
  };
}

export function gainTempHp(
  tempHpGained: number,
  character: Character,
): Character {
  return {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: tempHpGained,
    },
  };
}

export function receiveHealing(
  HpRecovered: number,
  character: Character,
): Character {
  if (character.combatState) {
    return {
      ...character,
      hitPoints: {
        ...character.hitPoints,
        currentHP: Math.min(
          character.hitPoints.currentHP + HpRecovered,
          character.hitPoints.currentMaximumHP,
        ),
      },
      combatState: {
        ...character.combatState,
        deathSaves: {
          successes: 0,
          failures: 0,
        },
      },
    };
  }

  return {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      currentHP: Math.min(
        character.hitPoints.currentHP + HpRecovered,
        character.hitPoints.currentMaximumHP,
      ),
    },
  };
}

export function setCurrentHp(HpValue: number, character: Character): Character {
  return {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      currentHP: HpValue,
    },
  };
}

export function spendHitDie(
  hitDieSize: number,
  character: Character,
): Character {
  const newHitDiceAmount = character.currentHitDice;

  newHitDiceAmount[hitDieSize] =
    character.currentHitDice[hitDieSize] > 0
      ? character.currentHitDice[hitDieSize] - 1
      : 0;

  return {
    ...character,
    currentHitDice: newHitDiceAmount,
  };
}

export function recoverHitDie(
  hitDieSize: number,
  character: Character,
): Character {
  const maximumHitDiceAmount = getMaximumHitDice(character)[hitDieSize];
  const newHitDiceAmount = character.currentHitDice;

  newHitDiceAmount[hitDieSize] =
    character.currentHitDice[hitDieSize] < maximumHitDiceAmount
      ? character.currentHitDice[hitDieSize] + 1
      : character.currentHitDice[hitDieSize];

  return {
    ...character,
    currentHitDice: newHitDiceAmount,
  };
}
