import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_resources_en } from "../../barbarian/subclasses/beast/en/en-beast-resources";
import { hunter_resources_en } from "../subclasses/hunter/en/hunter-resources-en";

import { gloom_stalker_resources_en } from "../subclasses/gloom-stalker/en/gloom-stalker-resources-en";
import { horizon_walker_resources_en } from "../subclasses/horizon-walker/en/horizon-walker-resources-en";
import { monster_slayer_resources_en } from "../subclasses/monster-slayer/en/monster-slayer-resources-en";

import { fey_wanderer_resources_en } from "../subclasses/fey-wanderer/en/fey-wanderer-resources-en";
import { swarmkeeper_resources_en } from "../subclasses/swarmkeeper/en/swarmkeeper-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...beast_resources_en,
  ...hunter_resources_en,

  // XGE
  ...gloom_stalker_resources_en,
  ...horizon_walker_resources_en,
  ...monster_slayer_resources_en,

  // TCE
  ...fey_wanderer_resources_en,
  ...swarmkeeper_resources_en,
};

export const ranger_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  foe_slayer: {
    name: "Foe Slayer",
    description: `It allows you to get a bonus to a weapon attack roll or weapon damage roll against one of your favored enemy. It recharges at the start of your turn.`,
  },
};
