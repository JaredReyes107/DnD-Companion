import {
  getFeatureRegistry,
  getFeatureTemplateById,
} from "@/core/data/registries/features.registry";
import { getClassTemplateById } from "@/core/data/registries/classes.registry";

/**
 * Returns the character level at which the given class unlocks its subclass
 * choice, derived from the first feature tagged "subclass" in the class
 * progression.
 *
 * Returns null if the class has no subclass feature defined (should not happen
 * for any PHB class, but guards against incomplete homebrew data).
 */
export function getSubclassUnlockLevel(classId: string): number | null {
  const classTemplate = getClassTemplateById(classId);
  const featureRegistry = getFeatureRegistry();

  for (let level = 1; level <= 20; level++) {
    const legacyFeatures = classTemplate.featuresByLevel?.[level] ?? [];
    const hasSubclassFeature = (classTemplate.progression?.[level] ?? []).some(
      (ref) => {
        const featureId = typeof ref === "string" ? ref : ref.id;
        const feature =
          legacyFeatures.find(
            (legacyFeature) => legacyFeature.id === featureId,
          ) ??
          featureRegistry[featureId] ??
          getFeatureTemplateById(featureId);
        return feature.tags?.includes("subclass");
      },
    );

    if (hasSubclassFeature) {
      return level;
    }
  }

  return null;
}
