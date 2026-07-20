export type ChoiceSelectionTrigger =
  | "onLevelUp" // Battle Master maneuvers, Eldritch Invocations, Metamagic
  | "onLongRest" // Cosmic Omen Weal/Woe
  | "onShortRest" // nothing common, but exists in some homebrew
  | "onActivation"; // Starry Form constellation — chosen at the moment of use

export type ChoicePoolTemplate = {
  id: string;
  sourceId: string;
  classId: string; // For class-level driven picks

  selectionTrigger: ChoiceSelectionTrigger;

  optionIds: string[];

  // level -> cumulative total picks at that level
  picksAtLevel: Record<number, number>;

  allowDuplicates?: boolean;
};
