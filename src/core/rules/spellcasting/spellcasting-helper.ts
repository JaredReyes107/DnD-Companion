import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { SpellcastingTemplate } from "@/core/entities/rules/spellcasting-template";

export function getSpellcastingTemplateByClassTemplateId(
  id: string,
  subclassId?: string,
): SpellcastingTemplate {
  const classTemplate = getClassTemplateById(id);

  if (classTemplate.spellcastingTemplate) {
    return classTemplate.spellcastingTemplate;
  }

  if (subclassId) {
    const subclassTemplate = getSubclassTemplateById(subclassId);
    if (subclassTemplate.spellcastingTemplate) {
      return subclassTemplate.spellcastingTemplate;
    }
  }

  throw new Error(`SpellcastingTemplate not found: ${id}`);
}
