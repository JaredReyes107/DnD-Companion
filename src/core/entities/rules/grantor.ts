import { FeatureGrant } from "./feature-template";

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

export type GrantorRef =
  | { kind: "class-slot"; instanceId: string; classId: string; level: number }
  | { kind: "subclass"; subclassId: string; level: number }
  | { kind: "feature"; id: string }
  | { kind: "option"; id: string; poolId: string }
  | { kind: "acquisition"; id: string };

export type ResolvedGrant = {
  grant: FeatureGrant;
  chain: GrantorRef[];
};
