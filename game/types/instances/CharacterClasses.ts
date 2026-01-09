/* eslint-disable prettier/prettier */
import { ClassInstance } from "@/game/types/instances/ClassInstance";

export type CharacterClasses = {
  byId: Record<string, ClassInstance>;
  order: string[]; // orden de adquisición (importante para HP)
};
