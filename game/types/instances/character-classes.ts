import { ClassInstance } from "@/game/types/instances/class-instance";

export type CharacterClasses = {
  byId: Record<string, ClassInstance>;
  order: string[]; // orden de adquisición (importante para HP)
};
