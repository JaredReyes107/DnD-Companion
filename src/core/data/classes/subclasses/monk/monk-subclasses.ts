import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { OPEN_HAND } from "./open-hand";
import { SHADOW } from "./shadow";
import { FOUR_ELEMENTS } from "./four-elements";

import { DRUNKEN_MASTER } from "./drunken-master";
import { KENSEI } from "./kensei";
import { SUN_SOUL } from "./sun-soul";

import { ASTRAL_SELF } from "./astral-self";
import { MERCY } from "./mercy";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  open_hand: OPEN_HAND,
  shadow: SHADOW,
  four_elements: FOUR_ELEMENTS,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  drunken_master: DRUNKEN_MASTER,
  kensei: KENSEI,
  sun_soul: SUN_SOUL,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  astral_self: ASTRAL_SELF,
  mercy: MERCY,
};

export const MONK_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
