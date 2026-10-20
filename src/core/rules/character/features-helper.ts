import { getFeatureTemplateById } from "@/core/data/registries/features.registry";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { CharacterClasses } from "@/core/entities/character/character-classes";
import { FeatureInstance } from "@/core/entities/features/feature-instance";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { Character } from "@/core/entities/character/Character";

export function getFeaturesFromClasses(
  characterClasses: CharacterClasses,
): FeatureTemplate[] {
  const features: FeatureTemplate[] = [];

  characterClasses.order.forEach((classKey, index) => {
    // order is acquisition order, so index 0 is the primary class
    const isPrimary = index === 0;
    const applies = (f: FeatureTemplate) =>
      f.appliesTo === undefined || (f.appliesTo === "primary") === isPrimary;

    const classInstance = characterClasses.byId[classKey];
    const classTemplate = getClassTemplateById(classInstance.classId);
    const subclass = classInstance.subclassId
      ? getSubclassTemplateById(classInstance.subclassId)
      : undefined;

    for (let lvl = 1; lvl <= classInstance.level; lvl++) {
      features.push(
        ...(classTemplate.featuresByLevel[lvl] ?? []).filter(applies),
      );
      features.push(...(subclass?.featuresByLevel[lvl] ?? []).filter(applies));
    }
  });
  return features;
}

// Resolves character.features into FeatureTemplate[]
// These are explicit grants — homebrew feats, racial features,
// training features, anything outside the class level pipeline
export function getFeaturesFromCharacter(
  characterFeatures: Record<string, FeatureInstance>,
): FeatureTemplate[] {
  return Object.values(characterFeatures).map((instance) =>
    getFeatureTemplateById(instance.featureId),
  );
}

// Single entry point for all consumers — merges both sources.
// Everything downstream (resources, actions, modifiers build functions)
// calls this and gets the full picture regardless of grant source.
export function getActiveFeatures(character: Character): FeatureTemplate[] {
  return [
    ...getFeaturesFromClasses(character.classes),
    ...getFeaturesFromCharacter(character.features),
  ];
}
