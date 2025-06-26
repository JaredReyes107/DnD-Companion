import { Class } from "@/app/Types/Class";
import { Feature } from "@/app/Types/Feature";

export type ClassDetails = {
  class: Class;
  subclass?: string;
  level: number;
  isCaster?: boolean;
  spellcastingAbility?: number; // index of Stat used

  classFeatures: Feature[];
  //subclassFeatures: Rasgo[];
};
