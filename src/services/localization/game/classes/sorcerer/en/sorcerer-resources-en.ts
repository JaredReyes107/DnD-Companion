import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { draconic_resources_en } from "../subclasses/draconic/en/draconic-resources-en";
import { wild_magic_sorcerer_resources_en } from "../subclasses/wild/en/wild-magic-resources-en";

import { divine_soul_resources_en } from "../subclasses/divine-soul/en/divine-soul-resources-en";
import { shadow_magic_resources_en } from "../subclasses/shadow/en/shadow-magic-resources-en";
import { storm_resources_en } from "../subclasses/storm/en/storm-resources-en";

import { aberrant_mind_resources_en } from "../subclasses/aberrant-mind/en/aberrant-mind-resources-en";
import { clockwork_soul_resources_en } from "../subclasses/clockwork-soul/en/clockwork-soul-resources-en";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  ...draconic_resources_en,
  ...wild_magic_sorcerer_resources_en,

  // XGE
  ...divine_soul_resources_en,
  ...shadow_magic_resources_en,
  ...storm_resources_en,

  // TCE
  ...aberrant_mind_resources_en,
  ...clockwork_soul_resources_en,
};

export const sorcerer_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  sorcery_points: {
    name: "Sorcery Points",
    description: `A magical reserve used to cast more spell or alter their properties during casting. You regain all expended sorcery points after a long rest.`,
  },
};
