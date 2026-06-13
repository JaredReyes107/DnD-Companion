import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { BERSERKER } from "@/core/data/classes/subclasses/barbarian/Berserker";
import { TOTEM_WARRIOR } from "@/core/data/classes/subclasses/barbarian/Totem-Warrior";
import { ANCESTRAL_GUARDIAN } from "./Ancestral-Guardian";
import { STORM_HERALD } from "./Storm-Herald";
import { ZEALOT } from "./Zealot";
import { BEAST } from "./Beast";
import { WILD_MAGIC } from "./Wild-Magic";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  berserker: BERSERKER,
  totem_warrior: TOTEM_WARRIOR,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  ancestral_guardian: ANCESTRAL_GUARDIAN,
  storm_herald: STORM_HERALD,
  zealot: ZEALOT,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  beast: BEAST,
  wild_magic: WILD_MAGIC,
};

export const BARBARIAN_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
