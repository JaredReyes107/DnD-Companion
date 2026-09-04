import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { alchemist_resources_en } from "../subclasses/alchemist/en/alchemist-resources-en";
import { armorer_resources_en } from "../subclasses/armorer/en/armorer-resources-en";
import { artillerist_resources_en } from "../subclasses/artillerist/en/artillerist-resources-en";
import { battle_smith_resources_en } from "../subclasses/battle-smith/en/battle-smith-resources-en";

const subclass_resources: GameLocalizationCategory = {
  // TCE
  ...alchemist_resources_en,
  ...armorer_resources_en,
  ...artillerist_resources_en,
  ...battle_smith_resources_en,
};

export const artificer_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  magical_tinkering: {
    name: "Magical Tinkering",
    description: `The amount of objects you can have simultaneously affected with a minor magical effect.`,
  },
  infused_items: {
    name: "Infused Items",
    description: `The amount of currently active infusions.`,
  },
  flash_of_genius: {
    name: "Flash of Genius",
    description: `Used to add a bonus to skill checks or saving throws for yourself or others. It recharges on a long rest.`,
  },
  spell_storing_item_limit: {
    name: "Spell Storing Item Limit",
    description: `The amount of different items you can store spells on simultaneosly.`,
  },
};
