import { Feature } from "../Types";
import { Character } from "../Types/Character"
import { Class, Subclass } from "@/app/Types/Class";

export const getUnlockedClassFeatures = (character: Character, characterClassIndex: number): Feature[] => 
{
  const characterClass = character.Classes[characterClassIndex].class
  const classLevel = character.Classes[characterClassIndex].level;

  let unlockedFeatures: Feature[] = [];

  characterClass.classFeatures.forEach((feature: Feature) => 
  {
    let newFeature = feature;

    if(newFeature.level <= classLevel)
    {
      if(newFeature.charges)
      {
        let charges = newFeature.charges;

        switch(charges.scaling.type)
        {
          case "none":
            break;
          case "level":
            charges.max = charges.scaling.values[character.Classes[characterClassIndex].level];
            charges.usesLeft = charges.max;
            break;
          case "ability":
            const usableValue = Math.max(1, character.StatModifiers[charges.scaling.abilityIndex]);

            charges.max = usableValue;
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
}