import { Character } from "@/core/entities/character/Character";
import { EligibilityCondition } from "@/core/entities/rules/eligibility/eligibility-condition";
import { resolveCheckProficiency } from "./checks-helper";
import {
  getTotalCharacterLevel,
  getClassLevel,
} from "./character-multiclassing";
import { getActiveFeatures } from "./features-helper";

export function evaluateEligibility(
  character: Character,
  condition: EligibilityCondition,
): boolean {
  switch (condition.type) {
    case "minCharacterLevel":
      return getTotalCharacterLevel(character.classes) >= condition.level;

    case "minClassLevel":
      return (
        getClassLevel(character.classes, condition.classId) >= condition.level
      );

    case "hasProficiency":
      return resolveCheckProficiency(character, condition.nodeId);

    case "lacksProficiency":
      return !resolveCheckProficiency(character, condition.nodeId);

    case "hasFeature":
      return getActiveFeatures(character).some(
        (f) => f.id === condition.featureId,
      );

    case "hasOptionSelected":
      return Object.values(character.featureChoices).some((instance) =>
        instance.selectedOptionIds.includes(condition.optionId),
      );

    case "all":
      return condition.conditions.every((c) =>
        evaluateEligibility(character, c),
      );

    case "any":
      return condition.conditions.some((c) =>
        evaluateEligibility(character, c),
      );
  }
}
