import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { KNOWLEDGE } from "./knowledge";
import { LIFE } from "./life";
import { LIGHT } from "./light";
import { NATURE } from "./nature";
import { TEMPEST } from "./tempest";
import { TRICKERY } from "./trickery";
import { WAR } from "./war";
import { FORGE } from "./forge";
import { GRAVE } from "./grave";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  knowledge: KNOWLEDGE,
  life: LIFE,
  light: LIGHT,
  nature: NATURE,
  tempest: TEMPEST,
  trickery: TRICKERY,
  war: WAR,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  forge: FORGE,
  grave: GRAVE,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  
};

export const CLERIC_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
