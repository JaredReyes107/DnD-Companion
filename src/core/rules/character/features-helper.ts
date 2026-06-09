import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { CharacterClasses } from "@/core/entities/character/character-classes";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";

/**
 * Collects all active FeatureTemplates for a character's current classes
 * and subclasses, up to each class's current level.
 *
 * Features from classes and subclasses feed the same pipeline — resources,
 * actions and modifiers referenced by features are resolved from their
 * respective flat registries. No special subclass handling is required
 * downstream.
 *
 * TODO: Extend this with the same pattern for Race, Background, and Feats
 * once those systems are implemented.
 */
export function getActiveFeatures(
  characterClasses: CharacterClasses,
): FeatureTemplate[] {
  const features: FeatureTemplate[] = [];

  for (const classId of characterClasses.order) {
    const classInstance = characterClasses.byId[classId];
    const classTemplate = getClassTemplateById(classInstance.classId);

    // Class features
    for (let lvl = 1; lvl <= classInstance.level; lvl++) {
      features.push(...(classTemplate.featuresByLevel[lvl] ?? []));
    }

    // Subclass features — collected from the same level range as class features.
    // The subclass template owns its own featuresByLevel keyed by character level,
    // so the loop is identical. Resources and actions referenced by subclass
    // features live in the same flat registries as class resources/actions.
    if (classInstance.subclassId) {
      const subclassTemplate = getSubclassTemplateById(
        classInstance.subclassId,
      );

      for (let lvl = 1; lvl <= classInstance.level; lvl++) {
        features.push(...(subclassTemplate.featuresByLevel[lvl] ?? []));
      }
    }

    // TODO: Same pattern for Race, Background, Feats
  }

  return features;
}
