import { Character } from "@/core/entities/character/Character";
import { buildCharacterActions } from "../combat/actions-helper";
import { buildCharacterAdvantageInstances } from "./advantage-helper";
import { buildCharacterDerivedProficiencies } from "./checks-helper";
import { bootstrapFeatureChoices } from "./choices-helper";
import { buildCharacterLanguageState } from "./languages-helper";
import { buildCharacterPassiveModifiers } from "./modifiers-helper";
import { buildCharacterResources } from "./resources-helper";

export function rebuildDerivedState(character: Character): Character {
  const featureChoices = bootstrapFeatureChoices(character);
  const base: Character = { ...character, featureChoices };
  return {
    ...base,
    statModifiers: buildCharacterPassiveModifiers(base),
    resources: buildCharacterResources(base),
    actions: buildCharacterActions(base),
    checks: {
      ...base.checks,
      proficiencies: buildCharacterDerivedProficiencies(base),
      passiveAdvantageInstances: buildCharacterAdvantageInstances(base),
    },
    languages: buildCharacterLanguageState(base),
  };
}
