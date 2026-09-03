import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { ARCHFEY } from "./archfey";
import { FIEND } from "./fiend";
import { GREAT_OLD_ONE } from "./great-old-one";

import { CELESTIAL } from "./celestial";
import { HEXBLADE } from "./hexblade";

import { FATHOMLESS } from "./fathomless";
import { GENIE } from "./genie";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  archfey: ARCHFEY,
  fiend: FIEND,
  great_old_one: GREAT_OLD_ONE,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  celestial: CELESTIAL,
  hexblade: HEXBLADE,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  fathomless: FATHOMLESS,
  genie: GENIE,
};

export const WARLOCK_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
