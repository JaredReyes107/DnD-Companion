import { FeatureTemplate } from "@/core/entities/rules/feature-template";

type Source = FeatureTemplate["source"];

/** Same feature everywhere; only the level and where it came from change. */
export const abilityScoreImprovement = (
  level: number,
  source: Source = "class",
): FeatureTemplate => ({
  id: "ability_score_improvement",
  source,
  level,
  tags: ["ASI"],
  // TODO: grant the asi/feat choice once the feat system exists.
});

export const extraAttack = (
  level: number,
  source: Source = "class",
): FeatureTemplate => ({
  id: "extra_attack",
  source,
  level,
  tags: ["combat", "extra-attack"],
});
