import { Character } from "@/core/entities/character/Character";
import {
  AbilityScores,
  ABILITIES,
} from "@/core/entities/rules/ability/ability.types";
import { CharacterSavingThrows } from "@/core/entities/rules/saving-throw/saving-throw-instance";
import { HitPoints } from "@/core/entities/rules/hit-points";
import { CharacterClasses } from "@/core/entities/character/character-classes";

/**
 * Canonical default values for a Character and its defaultable nested
 * entities. Used by the hydrator to backfill missing/malformed fields
 * from AsyncStorage. Not a full valid Character on its own (id/name/race
 * etc. have no sensible default) — only used to patch holes in existing
 * stored records, never to construct a character from scratch.
 */

export const defaultAbilityScores: AbilityScores = ABILITIES.reduce(
  (acc, ability) => {
    acc[ability] = 10;
    return acc;
  },
  {} as AbilityScores,
);

export const defaultSavingThrows: CharacterSavingThrows = ABILITIES.reduce(
  (acc, ability) => {
    acc[ability] = { hasProficiency: false };
    return acc;
  },
  {} as CharacterSavingThrows,
);

export const defaultHitPoints: HitPoints = {
  currentMaximumHP: 0,
  currentHP: 0,
  temporalHP: 0,
};

export const defaultCharacterClasses: CharacterClasses = {
  byId: {},
  order: [],
};

/**
 * Fields with a static, unconditional default. Deliberately excludes:
 * - identity fields (id, name, race, icon, alignment) — no safe default,
 *   a missing value there indicates real corruption, not staleness
 * - classes — needs shape-aware migration, handled separately
 * - dynamic maps (features, featureChoices, resources, actions,
 *   statModifiers, skills) — default to {} directly in the hydrator,
 *   never merged key-by-key since keys are runtime-assigned IDs
 * - combatState — live runtime data, out of persistence scope
 */
export const defaultScalarFields: Partial<Character> = {
  experiencePoints: 0,
  baseAbilityScores: defaultAbilityScores,
  baseMaximumHP: 10,
  baseSpeed: 30,
  hitPoints: defaultHitPoints,
  currentHitDice: {},
  savingThrows: defaultSavingThrows,
  actionLimits: { actions: 1, bonusActions: 1, reactions: 1 },
  encounterId: "",
};
