import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { OPEN_HAND } from "./open-hand";
import { SHADOW } from "./shadow";
import { FOUR_ELEMENTS } from "./four-elements";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  open_hand: OPEN_HAND,
  shadow: SHADOW,
  four_elements: FOUR_ELEMENTS,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {};

export const MONK_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
