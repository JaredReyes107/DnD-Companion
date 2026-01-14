import {
  Ability,
  AbilityScores,
} from "@/game/types/templates/abilities-scores";

const ABILITIES: Ability[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

export function buildAbilityScores(): AbilityScores {
  return ABILITIES.reduce((acc, ability) => {
    acc[ability] = {
      ability,
      value: 8,
    };
    return acc;
  }, {} as AbilityScores);
}
