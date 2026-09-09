// TODO: extend when Spells ship.
// Which app system produced this grant.
export type FeatureObtention =
  | { via: "class"; classId: string }
  | { via: "subclass"; classId: string; subclassId: string }
  | { via: "race"; raceId: string }
  | { via: "background"; backgroundId: string }
  | { via: "feat"; featId: string }
  | { via: "choice"; poolId: string; grantedBy: FeatureObtention }
  | { via: "homebrew"; description?: string };

export type ResourceGrantor = {
  system: "feature";
  featureId: string;
  obtainedVia: FeatureObtention;
};
