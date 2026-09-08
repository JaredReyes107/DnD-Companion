// Which app system produced this grant.
// TODO: extend when Spells ship.
export type FeatureObtention =
  | { via: "class"; classId: string }
  | { via: "subclass"; classId: string; subclassId: string } // classId kept for level lookups
  | { via: "race"; raceId: string }
  | { via: "background"; backgroundId: string }
  | { via: "feat"; featId: string }
  | { via: "homebrew"; description?: string }; // training, custom magical effect, etc

export type ResourceGrantor = {
  system: "feature";
  featureId: string;
  obtainedVia: FeatureObtention;
};
