import { getClassTemplateById } from "@/core/data/registries/classes.registry";

/**
 * Returns the character level at which the given class unlocks its subclass
 * choice, derived from the first feature tagged "subclass" in featuresByLevel.
 *
 * Returns null if the class has no subclass feature defined (should not happen
 * for any PHB class, but guards against incomplete homebrew data).
 */
export function getSubclassUnlockLevel(classId: string): number | null {
  const classTemplate = getClassTemplateById(classId);

  for (const [level, features] of Object.entries(classTemplate.featuresByLevel)) {
    const hasSubclassFeature = features.some((f) =>
      f.tags?.includes("subclass"),
    );
    if (hasSubclassFeature) {
      return Number(level);
    }
  }

  return null;
}
