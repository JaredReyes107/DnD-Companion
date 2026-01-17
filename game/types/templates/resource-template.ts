export type ResourceCategory =
  | "spell-slot"
  | "pact-slot"
  | "class-feature"
  | "racial-feature"
  | "background-feature"
  | "feat"
  | "hp"
  | "custom";

export type ResourceTemplate = {
  id: string;
  label: string; // i18n key o texto
  source: "class" | "subclass" | "feat" | "spell" | "homebrew";

  category: ResourceCategory;

  scalingType: string; // ej: "PB", "CHA", "level * 2", "slots[3]"
  recharge: "shortRest" | "longRest" | "perTurn" | "none" | "custom";

  tags?: string[]; // para UI ("combat", "spell", "defensive")
};
