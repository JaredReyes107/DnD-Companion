import { Character } from "../types/instances/character";

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
