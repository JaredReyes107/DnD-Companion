/* eslint-disable prettier/prettier */
import { CLASSES } from "@/game/base-data/CLASSES"

import { ClassTemplate } from "../types/templates/ClassTemplate";

export function buildClassRegistry(
  base: Record<string, ClassTemplate>,
  homebrew: Record<string, ClassTemplate>,
) {
  return {
    ...base,
    ...homebrew,
  };
}

let homebrewClasses: Record<string, ClassTemplate> = {};

export function getAllClassTemplates(): ClassTemplate[] {
  return [
    ...Object.values(CLASSES),
    ...Object.values(homebrewClasses),
  ]
}

export function registerHomebrewClass(cls: ClassTemplate) {
  homebrewClasses[cls.id] = cls;
}
