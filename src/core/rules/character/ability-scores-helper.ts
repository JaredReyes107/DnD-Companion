import {
  ABILITIES,
  AbilityScores,
} from "@/core/entities/rules/ability/ability.types";

export function buildAbilityScores(): AbilityScores {
  return ABILITIES.reduce((acc, ability) => {
    acc[ability] = 8;
    return acc;
  }, {} as AbilityScores);
}
