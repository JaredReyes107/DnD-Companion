import { SpellcastingInstance } from "@/core/entities/spellcasting/spellcasting-instance";

export type ClassInstance = {
  classId: string;
  level: number;

  subclassId?: string;

  spellcastingInstance?: SpellcastingInstance;
};
