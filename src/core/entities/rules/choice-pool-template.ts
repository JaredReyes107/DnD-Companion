import { TimingTrigger } from "./trigger";

export type ChoicePoolTemplate = {
  id: string;
  sourceId: string;
  classId: string; // For class-level driven picks

  selectionTrigger: TimingTrigger;

  optionIds: string[];

  // level -> cumulative total picks at that level
  picksAtLevel: Record<number, number>;

  allowDuplicates?: boolean;
};
