import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { LORE } from "./lore";
import { VALOR } from "./valor";
import { GLAMOUR } from "./glamour";
import { SWORDS } from "./swords";
import { WHISPERS } from "./whispers";
import { CREATION } from "./creation";
import { ELOQUENCE } from "./eloquence";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  lore: LORE,
  valor: VALOR,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  glamour: GLAMOUR,
  swords: SWORDS,
  whispers: WHISPERS,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  creation: CREATION,
  elocuence: ELOQUENCE,
};

export const BARD_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
