import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {};

export const ROGUE_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
