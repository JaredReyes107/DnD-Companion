import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { LORE } from "./lore";
import { VALOR } from "./valor";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  lore: LORE,
  valor: VALOR,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {};

export const BARD_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
