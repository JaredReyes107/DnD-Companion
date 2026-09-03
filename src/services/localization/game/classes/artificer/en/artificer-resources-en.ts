import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // TCE
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
