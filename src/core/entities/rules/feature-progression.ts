/**
 * A feature scheduled for a class or subclass progression.
 * The object form supports progression-specific applicability.
 */
export type FeatureRef =
  | string
  | { id: string; appliesTo?: "primary" | "multiclass" };

/**
 * Feature schedule keyed by character level.
 * This is transitional alongside featuresByLevel until schedules are migrated.
 */
export type Progression = Record<number, FeatureRef[]>;
