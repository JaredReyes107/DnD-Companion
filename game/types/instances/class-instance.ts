import { SpellcastingInstance } from "./spellcasting-instance";

export type ClassInstance = {
  classId: string;
  level: number;

  subclassId?: string;

  spellcastingInstance?: SpellcastingInstance;
};
