import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { battle_master_resources_es } from "../subclasses/battle-master/es/battle-master-resources-es";
import { champion_resources_es } from "../subclasses/champion/es/champion-resources-es";
import { eldritch_knight_resources_es } from "../subclasses/eldritch-knight/es/eldritch-knight-resources-es";

import { arcane_archer_resources_es } from "../subclasses/arcane-archer/es/arcane-archer-resources-es";
import { cavalier_resources_es } from "../subclasses/cavalier/es/cavalier-resources-es";
import { samurai_resources_es } from "../subclasses/samurai/es/samurai-resources-es";

import { psi_warrior_resources_es } from "../subclasses/psi-warrior/es/psi-warrior-resources-es";
import { rune_knight_resources_es } from "../subclasses/rune-knight/es/rune-knight-resources-es";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...battle_master_resources_es,
  ...champion_resources_es,
  ...eldritch_knight_resources_es,

  // XGE
  ...arcane_archer_resources_es,
  ...cavalier_resources_es,
  ...samurai_resources_es,

  // TCE
  ...psi_warrior_resources_es,
  ...rune_knight_resources_es,
};

export const fighter_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  second_wind: {
    name: "Tomar aliento",
    description:
      "Recuperas puntos de golpe igual a 1d10 + tu nivel de guerrero. Una vez que uses este rasgo, debes terminar un descanso corto o largo para usarlo de nuevo.",
  },
  action_surge: {
    name: "Acción súbita",
    description: `Puedes tomar una acción extra. Recuperas todos los usos de este rasgo después de un descanso corto o largo.`,
  },
  indomitable: {
    name: "Indomable",
    description: `Rehaces una tirada de salvación que hallas fallado. Debes usar el nuevo resultado. Recuperas todos los usos de este rasgo después de un descanso largo.`,
  },
};
