import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { DEVOTION } from "./devotion";
import { ANCIENTS } from "./ancients";
import { VENGEANCE } from "./vengeance";

import { OATHBREAKER } from "./oathbreaker";

import { CONQUEST } from "./conquest";
import { REDEMPTION } from "./redemption";

import { GLORY } from "./glory";
import { WATCHERS } from "./watchers";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  devotion: DEVOTION,
  ancients: ANCIENTS,
  vengeance: VENGEANCE,
};

const DMG_SUBCLASSES: Record<string, SubclassTemplate> = {
  oathbreaker: OATHBREAKER,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  conquest: CONQUEST,
  redemption: REDEMPTION,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  glory: GLORY,
  watchers: WATCHERS,
};

export const PALADIN_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...DMG_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
