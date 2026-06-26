import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { LAND } from "./land";
import { MOON } from "./moon";

import { DREAMS } from "./dreams";
import { SHEPHERD } from "./shepherd";

import { STARS } from "./stars";
import { SPORES } from "./spores";
import { WILDFIRE } from "./wildfire";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  land: LAND,
  moon: MOON,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  dreams: DREAMS,
  shepherd: SHEPHERD,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  stars: STARS,
  spores: SPORES,
  wildfire: WILDFIRE,
};

export const DRUID_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
