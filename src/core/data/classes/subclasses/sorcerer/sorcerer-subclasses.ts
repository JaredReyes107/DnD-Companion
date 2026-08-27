import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { DRACONIC_BLOODLINE } from "./draconic";
import { WILD_MAGIC_SORCERER } from "./wild-magic";

import { DIVINE_SOUL } from "./divine-soul";
import { SHADOW_MAGIC } from "./shadow-magic";
import { STORM_SORCERY } from "./storm";

import { ABERRANT_MIND } from "./aberrant-mind";
import { CLOCKWORK_SOUL } from "./clockwork-soul";

const PHB_SUBCLASSES: Record<string, SubclassTemplate> = {
  draconic_bloodline: DRACONIC_BLOODLINE,
  wild_magic_sorcerer: WILD_MAGIC_SORCERER,
};

const XANATHAR_SUBCLASSES: Record<string, SubclassTemplate> = {
  divine_soul: DIVINE_SOUL,
  shadow_magic: SHADOW_MAGIC,
  storm: STORM_SORCERY,
};

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  aberrant_mind: ABERRANT_MIND,
  clockwork_soul: CLOCKWORK_SOUL,
};

export const SORCERER_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...PHB_SUBCLASSES,
  ...XANATHAR_SUBCLASSES,
  ...TASHA_SUBCLASSES,
};
