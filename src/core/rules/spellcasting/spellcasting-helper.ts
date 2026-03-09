import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { SpellcastingTemplate } from "@/core/entities/rules/spellcasting-template";

export function getSpellcastingTemplateByClassTemplateId(
  id: string,
): SpellcastingTemplate {
  const classTemplate = getClassTemplateById(id);

  if (!classTemplate.spellcastingTemplate) {
    throw new Error(`SpellcastingTemplate not found: ${id}`);
  }

  return classTemplate.spellcastingTemplate;
}
