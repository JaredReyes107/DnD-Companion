export type ResourceCategory =
  | "spell_slots"
  | "pact_slots"
  | "class_features"
  | "subclass_features"
  | "racial_features"
  | "background_features"
  | "feats"
  | "homebrew";

export type ResourceTemplate = {
  id: string;
  sourceId: string; // classId, featureId, raceId, etc
  //origin: "Players Handbook", //For distinguishing official rules and homebrew
  category: ResourceCategory; //For UI sections in the Dashboard

  scalingType: string; // ej: "PB", "CHA", "class-level", "character-level","fixed:3", etc
  recharge:
    | "shortRest"
    | "longRest"
    | "perTurn"
    | "perRound"
    | "none"
    | "custom";

  tags?: string[]; // para UI ("combat", "spell", "defensive")
};
