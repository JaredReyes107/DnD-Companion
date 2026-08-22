import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { four_elements_resources_es } from "../subclasses/four-elements/es/four-elements-resources-es";
import { open_hand_resources_es } from "../subclasses/open-hand/es/open-hand-resources-es";
import { shadow_resources_es } from "../subclasses/shadow/es/shadow-resources-es";

import { drunken_master_resources_es } from "../subclasses/drunken-master/es/drunken-master-resources-es";
import { kensei_resources_es } from "../subclasses/kensei/es/kensei-resources-es";
import { sun_soul_resources_es } from "../subclasses/sun-soul/es/sun-soul-resources-es";

import { astral_self_resources_es } from "../subclasses/astral-self/es/astral-self-resources-es";
import { mercy_resources_es } from "../subclasses/mercy/es/mercy-resources-es";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...four_elements_resources_es,
  ...open_hand_resources_es,
  ...shadow_resources_es,

  // XGE
  ...drunken_master_resources_es,
  ...kensei_resources_es,
  ...sun_soul_resources_es,

  // TCE
  ...astral_self_resources_es,
  ...mercy_resources_es,
};

export const monk_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  ki: {
    name: "Ki",
    description: `Una energía mística que te permite realizar distintas hazañas.`,
  },
};
