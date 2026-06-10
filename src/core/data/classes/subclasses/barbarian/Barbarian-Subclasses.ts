import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { BERSERKER } from "@/core/data/classes/subclasses/barbarian/Berserker";
import { TOTEM_WARRIOR } from "@/core/data/classes/subclasses/barbarian/Totem-Warrior";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  berserker: BERSERKER,
  totem_warrior: TOTEM_WARRIOR,
};

export const BARBARIAN_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
};
