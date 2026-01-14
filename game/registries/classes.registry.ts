/* eslint-disable prettier/prettier */
import { CLASSES } from "@/game/base-data/classes"

import { ClassTemplate } from "../types/templates/class-template";

export function buildClassRegistry(
  base: Record<string, ClassTemplate>,
  homebrew: Record<string, ClassTemplate>,
) {
  return {
    ...base,
    ...homebrew,
  };
}

const homebrewClasses: Record<string, ClassTemplate> = {};

export function getAllClassTemplates(): ClassTemplate[] {
  return [
    ...Object.values(CLASSES),
    ...Object.values(homebrewClasses),
  ]
}

export function registerHomebrewClass(cls: ClassTemplate) {
  homebrewClasses[cls.id] = cls;
}
