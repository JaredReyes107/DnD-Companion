import { SpellcastingInstance } from "@/game/domain/spellcasting/spellcasting-instance";

export type ClassInstance = {
  classId: string;
  level: number;

  subclassId?: string;

  spellcastingInstance?: SpellcastingInstance;
};
