/* eslint-disable prettier/prettier */
import { Ability, CharacterSavingThrows } from "@/game/types/templates/abilities-scores";

const ABILITIES: Ability[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

export function buildSavingThrows(): CharacterSavingThrows {
  return ABILITIES.reduce((acc, ability) => {
    acc[ability] = {
      ability,
      hasProficiency: false,
    };
    return acc;
  }, {} as CharacterSavingThrows);
}
