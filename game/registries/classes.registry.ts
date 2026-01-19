import { CLASSES } from "@/game//base-data/classes";
import { ClassTemplate } from "@/game/types/templates/class-template";
import { ClassInstance } from "@/game/types/instances/class-instance";
import { CharacterClasses } from "@/game/types/instances/character-classes";

const homebrewClasses: Record<string, ClassTemplate> = {};

export function registerHomebrewClass(cls: ClassTemplate) {
  homebrewClasses[cls.id] = cls;
}

export function getClassRegistry(): Record<string, ClassTemplate> {
  return {
    ...CLASSES,
    ...homebrewClasses,
  };
}

// Helpers

export function getClassTemplateById(id: string): ClassTemplate {
  const cls = getClassRegistry()[id];
  if (!cls) {
    throw new Error(`ClassTemplate not found: ${id}`);
  }
  return cls;
}

export function resolveClassInstance(instance: ClassInstance): ClassTemplate {
  return getClassTemplateById(instance.classId);
}

export function getAllClassTemplates(): ClassTemplate[] {
  return Object.values(getClassRegistry());
}

export function getClassTemplatesFromCharacter(
  classes: CharacterClasses,
): ClassTemplate[] {
  return classes.order.map((id) =>
    getClassTemplateById(classes.byId[id].classId),
  );
}

export function getClassInstanceByTemplateId(
  classes: CharacterClasses,
  classTemplateId: string,
): ClassInstance | undefined {
  for (const instanceId of classes.order) {
    const instance = classes.byId[instanceId];
    if (instance.classId === classTemplateId) {
      return instance;
    }
  }
  return undefined;
}
