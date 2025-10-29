import { Feature } from "../../types";
import { Character } from "../../types/Character";

export const getUnlockedClassFeatures = (
  character: Character,
  characterClassIndex: number,
): Feature[] => {
  const characterClass = character.Classes[characterClassIndex].class;
  const classLevel = character.Classes[characterClassIndex].level;

  const unlockedFeatures: Feature[] = [];

  characterClass.classFeatures.forEach((feature: Feature) => {
    const newFeature = feature;

    if (!newFeature.level) {
      newFeature.level = 1;
    }

    if (newFeature.level <= classLevel) {
      if (newFeature.charges) {
        const charges = newFeature.charges;

        switch (charges.scaling.type) {
          case "none":
            break;
          case "level":
            charges.max =
              charges.scaling.values[
                character.Classes[characterClassIndex].level
              ];
            charges.usesLeft = charges.max;
            break;
          case "ability":
            charges.max = Math.max(
              1,
              character.StatModifiers[charges.scaling.abilityIndex],
            );
            charges.usesLeft = charges.max;
            break;
          case "proficiency":
            charges.max = character.ProficiencyBonus;
            charges.usesLeft = charges.max;
            break;
          case "formula":
            // TODO: Parse the 'formula' property of 'charges.scaling' and use it to calculate the charges
            break;
          default:
            break;
        }
      }

      unlockedFeatures.push(feature);
    }
  });

  return unlockedFeatures;
};
