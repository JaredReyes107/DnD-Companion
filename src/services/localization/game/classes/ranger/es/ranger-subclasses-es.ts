import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_es } from "../subclasses/beast-master/es/beast-master-es";
import { hunter_es } from "../subclasses/hunter/es/hunter-es";
import { gloom_stalker_es } from "../subclasses/gloom-stalker/es/gloom-stalker-es";
import { horizon_walker_es } from "../subclasses/horizon-walker/es/horizon-walker-es";
import { monster_slayer_es } from "../subclasses/monster-slayer/es/monster-slayer-es";
import { fey_wanderer_es } from "../subclasses/fey-wanderer/es/fey-wanderer-es";
import { swarmkeeper_es } from "../subclasses/swarmkeeper/es/swarmkeeper-es";

export const ranger_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...beast_master_es,
  ...hunter_es,

  // XGE
  ...gloom_stalker_es,
  ...horizon_walker_es,
  ...monster_slayer_es,

  // TCE
  ...fey_wanderer_es,
  ...swarmkeeper_es,
};
