import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { ABJURATION } from "./abjuration";
import { CONJURATION } from "./conjuration";
import { DIVINATION } from "./divination";
import { ENCHANTMENT } from "./enchantment";
import { EVOCATION } from "./evocation";
import { ILLUSION } from "./illusion";
import { NECROMANCY } from "./necromancy";
import { TRANSMUTATION } from "./transmutation";

import { WAR_MAGIC } from "./war-magic";

import { BLADESINGING } from "./bladesinging";
import { ORDER_OF_SCRIBES } from "./scribes";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  abjuration: ABJURATION,
  conjuration: CONJURATION,
  divination: DIVINATION,
  enchantment: ENCHANTMENT,
  evocation: EVOCATION,
  illusion: ILLUSION,
  necromancy: NECROMANCY,
  transmutation: TRANSMUTATION,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  war_magic: WAR_MAGIC,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  bladesinging: BLADESINGING,
  order_of_scribes: ORDER_OF_SCRIBES,
};

export const WIZARD_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
