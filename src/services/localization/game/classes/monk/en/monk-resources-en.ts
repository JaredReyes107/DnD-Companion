import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { four_elements_resources_en } from "../subclasses/four-elements/en/four-elements-resources-en";
import { open_hand_resources_en } from "../subclasses/open-hand/en/open-hand-resources-en";
import { shadow_resources_en } from "../subclasses/shadow/en/shadow-resources-en";

import { drunken_master_resources_en } from "../subclasses/drunken-master/en/drunken-master-resources-en";
import { kensei_resources_en } from "../subclasses/kensei/en/kensei-resources-en";
import { sun_soul_resources_en } from "../subclasses/sun-soul/en/sun-soul-resources-en";

import { astral_self_resources_en } from "../subclasses/astral-self/en/astral-self-resources-en";
import { mercy_resources_en } from "../subclasses/mercy/en/mercy-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...four_elements_resources_en,
  ...open_hand_resources_en,
  ...shadow_resources_en,

  // XGE
  ...drunken_master_resources_en,
  ...kensei_resources_en,
  ...sun_soul_resources_en,

  // TCE
  ...astral_self_resources_en,
  ...mercy_resources_en,
};

export const monk_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  ki: {
    name: "Ki",
    description: `A mystical energy that allows you to perform a variety of feats.`,
  },
};
