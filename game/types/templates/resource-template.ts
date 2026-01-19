export type ResourceCategory =
  | "spell-slot"
  | "pact-slot"
  | "class-feature"
  | "subclass-feature"
  | "racial-feature"
  | "background-feature"
  | "feat"
  | "homebrew";

export type ResourceTemplate = {
  id: string;
  label: string; // i18n key o texto
  sourceId: string; // classId, featureId, raceId, etc
  //origin: "Players Handbook", //For distinguishing official rules and homebrew
  category: ResourceCategory; //For UI

  scalingType: string; // ej: "PB", "CHA", "class-level", "character-level","fixed:3", etc
  recharge: "shortRest" | "longRest" | "perTurn" | "none" | "custom";

  tags?: string[]; // para UI ("combat", "spell", "defensive")
};
