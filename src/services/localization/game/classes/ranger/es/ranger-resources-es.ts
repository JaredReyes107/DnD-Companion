import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_resources_es } from "../subclasses/beast-master/es/beast-master-resources-es";
import { hunter_resources_es } from "../subclasses/hunter/es/hunter-resources-es";

import { gloom_stalker_resources_es } from "../subclasses/gloom-stalker/es/gloom-stalker-resources-es";
import { horizon_walker_resources_es } from "../subclasses/horizon-walker/es/horizon-walker-resources-es";
import { monster_slayer_resources_es } from "../subclasses/monster-slayer/es/monster-slayer-resources-es";

import { fey_wanderer_resources_es } from "../subclasses/fey-wanderer/es/fey-wanderer-resources-es";
import { swarmkeeper_resources_es } from "../subclasses/swarmkeeper/es/swarmkeeper-resources-es";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...beast_master_resources_es,
  ...hunter_resources_es,

  // XGE
  ...gloom_stalker_resources_es,
  ...horizon_walker_resources_es,
  ...monster_slayer_resources_es,

  // TCE
  ...fey_wanderer_resources_es,
  ...swarmkeeper_resources_es,
};

export const ranger_resources_es: GameLocalizationCategory = {
  ...subclass_resources,
  foe_slayer: {
    name: "Asesino de Enemigos",
    description: `Te permite obtener un bonus a una tirada de ataque o tirada de daño contra uno de tus enemigos predilectos. Se recarga al inicio de tu turno.`,
  },
};
