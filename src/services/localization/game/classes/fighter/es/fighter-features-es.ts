import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { battle_master_features_es } from "../subclasses/battle-master/es/battle-master-features-es";
import { champion_features_es } from "../subclasses/champion/es/champion-features-es";
import { eldritch_knight_features_es } from "../subclasses/eldritch-knight/es/eldritch-knight-features-es";

import { arcane_archer_features_es } from "../subclasses/arcane-archer/es/arcane-archer-features-es";
import { cavalier_features_es } from "../subclasses/cavalier/es/cavalier-features-es";
import { samurai_features_es } from "../subclasses/samurai/es/samurai-features-es";

import { psi_warrior_features_es } from "../subclasses/psi-warrior/es/psi-warrior-features-es";
import { rune_knight_features_es } from "../subclasses/rune-knight/es/rune-knight-features-es";

export const subclass_features: GameLocalizationCategory = {
  battle_master: battle_master_features_es,
  champion: champion_features_es,
  eldritch_knight: eldritch_knight_features_es,

  arcane_archer: arcane_archer_features_es,
  cavalier: cavalier_features_es,
  samurai: samurai_features_es,

  psi_warrior: psi_warrior_features_es,
  rune_knight: rune_knight_features_es,
};

export const fighter_features_es: GameLocalizationCategory = {
  ...subclass_features,

  fighting_style: {
    name: "Estilo de Combate",
    description:
      "Adoptas un estilo de combate particular como tu especialidad. Escoge una de las siguientes opciones. No puedes coger la misma opción más de una vez, ni siquiera si más adelante se te da de nuevo la oportunidad de elegir.",
  },
  second_wind: {
    name: "Tomar Aliento",
    description:
      "Dispones de una fuente ilimitada de vitalidad a la que puedes recurrir para protegerte del daño. Durante tu turno, puedes usar una acción adicional para recuperar un número de puntos de golpe igual a 1d10 + tu nivel de guerrero. Una vez usas este rasgo, debes terminar un descanso corto o largo antes de poder usarlo otra vez.",
  },
  action_surge: {
    name: "Acción Súbita",
    description: `Puedes esforzarte más allá de tus límites habituales durante un momento. En tu turno, puedes realizar una acción más aparte de tu acción normal y acción adicional habituales. 
      Una vez uses este rasgo, debes completar un descanso corto o largo antes de poder usarlo otra vez.`,
  },
  extra_attack: {
    name: "Ataque Adicional",
    description: `Puedes atacar más de una vez cuando realices la acción de ataque durante tu turno. A nivel 11 puedes atacar tres veces y a nivel 20 puedes atacar cuatro veces.`,
  },
  indomitable: {
    name: "Indomable",
    description:
      "Puedes repetir las tiradas de salvación que falles, aunque debes usar el nuevo resultado. No puedes volver a usar este rasgo hasta que no acabes un descanso prolongado.",
  },
};
