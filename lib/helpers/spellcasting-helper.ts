import { getClassTemplateById } from "@/game/registries/classes.registry";
import { SpellcastingTemplate } from "@/game/types/templates/spellcasting-template";

export function getSpellcastingTemplateByClassTemplateId(
  id: string,
): SpellcastingTemplate {
  const classTemplate = getClassTemplateById(id);

  if (!classTemplate.spellcastingTemplate) {
    throw new Error(`SpellcastingTemplate not found: ${id}`);
  }

  return classTemplate.spellcastingTemplate;
}
