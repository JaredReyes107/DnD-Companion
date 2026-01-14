/* eslint-disable prettier/prettier */  
import { CharacterClasses } from "@/game/types/instances/character-classes";
import { ClassInstance } from "@/game/types/instances/class-instance";

export function getTotalCharacterLevel(classes: CharacterClasses): number {
  return classes.order.reduce(  
    (sum, id) => sum + classes.byId[id].level,
    0
  );
}

export function getClassLevel(
  classes: CharacterClasses,
  classId: string
): number {
  return classes.byId[classId]?.level ?? 0;
}

export function getClassesInOrder(
  classes: CharacterClasses
): ClassInstance[] {
  return classes.order.map(id => classes.byId[id]);
}
