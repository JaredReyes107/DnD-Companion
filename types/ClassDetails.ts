import { Class } from "@/types/Class";
import { Feature } from "@/types/Feature";

export type ClassDetails = {
  class: Class;
  subclass?: string;
  level: number;
  isCaster?: boolean;
  spellcastingAbility?: number; // index of Stat used

  classFeatures: Feature[];
  //subclassFeatures: Rasgo[];
};
