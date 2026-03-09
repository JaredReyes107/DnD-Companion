import { ClassInstance } from "@/core/entities/character/class-instance";

export type CharacterClasses = {
  byId: Record<string, ClassInstance>;
  order: string[]; // orden de adquisición (importante para HP)
};
