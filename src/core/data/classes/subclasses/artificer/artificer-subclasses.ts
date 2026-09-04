import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

import { ALCHEMIST } from "./alchemist";
import { ARMORER } from "./armorer";
import { ARTILLERIST } from "./artillerist";
import { BATTLE_SMITH } from "./battle-smith";

const TASHA_SUBCLASSES: Record<string, SubclassTemplate> = {
  alchemist: ALCHEMIST,
  armorer: ARMORER,
  artillerist: ARTILLERIST,
  battle_smith: BATTLE_SMITH,
};

export const ARTIFICER_SUBCLASSES: Record<string, SubclassTemplate> = {
  ...TASHA_SUBCLASSES,
};
