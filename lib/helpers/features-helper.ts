import { getClassTemplateById } from "@/game/registries/classes.registry";
import { CharacterClasses } from "@/game/types/instances/character-classes";
import { FeatureTemplate } from "@/game/types/templates/feature-template";

export function getActiveFeatures(
  characterClasses: CharacterClasses,
): FeatureTemplate[] {
  const features: FeatureTemplate[] = [];

  // Clases
  for (const classId of characterClasses.order) {
    const classInstance = characterClasses.byId[classId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    for (let lvl = 1; lvl <= classInstance.level; lvl++) {
      features.push(...(classTemplate.featuresByLevel[lvl] ?? []));
    }

    /*
    if (classInstance.subclassId) {
      const subclass = getSubclassTemplateById(classInstance.subclassId);
      for (let lvl = 1; lvl <= classInstance.level; lvl++) {
        features.push(...(subclass.featuresByLevel[lvl] ?? []));
      }
    }
    */
  }

  // TODO: Same pattern for Feats, race, background, etc

  return features;
}
