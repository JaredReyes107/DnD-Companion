import { Character, ClassDetails, Feature } from "../../types";

function getFeatureChargeMax(feature: Feature, character: Character): number {
  const { charges } = feature;

  if (!charges) return 0;

  switch (charges.scaling.type) {
    case "level":
      return getClassScaling(feature, character.Classes);
    case "ability":
      return getAbilityModifier(character, charges.scaling.abilityIndex);
    case "proficiency":
      return character.ProficiencyBonus;
    case "formula":
      return evaluateFormula(charges.scaling.formula, character);
    case "none":
    default:
      return charges.scaling.value;
  }
}

function getAbilityModifier(
  character: Character,
  abilityIndex: number,
): number {
  const abilityModifier = character.StatModifiers.at(abilityIndex);

  return abilityModifier ? abilityModifier : 0;
}

function getClassScaling(
  feature: Feature,
  characterClasses: ClassDetails[],
): number {
  let charges: number | undefined = 0;

  characterClasses.forEach((characterClass) => {
    if (
      characterClass.class.name == feature.class &&
      feature.charges?.scaling.type == "level"
    ) {
      if (
        feature.charges?.scaling.values.at(characterClass.level - 1) !=
        undefined
      ) {
        charges = feature.charges.scaling.values.at(characterClass.level - 1);
      }
    }
  });

  return charges;
}

function evaluateFormula(formula: string, character: Character) {
  return 0;
}
