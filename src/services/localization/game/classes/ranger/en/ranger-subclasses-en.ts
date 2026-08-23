import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_en } from "../subclasses/beast-master/en/beast-master-en";
import { hunter_en } from "../subclasses/hunter/en/hunter-en";
import { gloom_stalker_en } from "../subclasses/gloom-stalker/en/gloom-stalker-en";
import { horizon_walker_en } from "../subclasses/horizon-walker/en/horizon-walker-en";
import { monster_slayer_en } from "../subclasses/monster-slayer/en/monster-slayer-en";
import { fey_wanderer_en } from "../subclasses/fey-wanderer/en/fey-wanderer-en";
import { swarmkeeper_en } from "../subclasses/swarmkeeper/en/swarmkeeper-en";

export const ranger_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...beast_master_en,
  ...hunter_en,

  // XGE
  ...gloom_stalker_en,
  ...horizon_walker_en,
  ...monster_slayer_en,

  // TCE
  ...fey_wanderer_en,
  ...swarmkeeper_en,
};
