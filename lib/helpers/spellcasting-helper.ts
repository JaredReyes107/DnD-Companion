import { getClassTemplateById } from "@/game/data/registries/classes.registry";
import { SpellcastingTemplate } from "@/game/data/templates/spellcasting-template";

export function getSpellcastingTemplateByClassTemplateId(
  id: string,
): SpellcastingTemplate {
  const classTemplate = getClassTemplateById(id);

  if (!classTemplate.spellcastingTemplate) {
    throw new Error(`SpellcastingTemplate not found: ${id}`);
  }

  return classTemplate.spellcastingTemplate;
}
