import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { battle_master_es } from "../subclasses/battle-master/es/battle-master-es";
import { champion_actions_es } from "../subclasses/champion/es/champion-actions-es";
import { eldritch_knight_actions_es } from "../subclasses/eldritch-knight/es/eldritch-knight-actions-es";

import { arcane_archer_actions_es } from "../subclasses/arcane-archer/es/arcane-archer-actions-es";
import { cavalier_actions_es } from "../subclasses/cavalier/es/cavalier-actions-es";
import { samurai_actions_es } from "../subclasses/samurai/es/samurai-actions-es";

import { psi_warrior_actions_es } from "../subclasses/psi-warrior/es/psi-warrior-actions-es";
import { rune_knight_actions_es } from "../subclasses/rune-knight/es/rune-knight-actions-es";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...battle_master_es,
  ...champion_actions_es,
  ...eldritch_knight_actions_es,

  // Xanathar's
  ...arcane_archer_actions_es,
  ...cavalier_actions_es,
  ...samurai_actions_es,

  // Tasha's
  ...psi_warrior_actions_es,
  ...rune_knight_actions_es,
};

export const fighter_actions_es: GameLocalizationCategory = {
  ...subclass_actions,

  second_wind: {
    name: "Tomar aliento",
    description:
      "Recuperas puntos de golpe igual a 1d10 + tu nivel de guerrero.",
  },
  action_surge: {
    name: "Acción súbita",
    description: `Puedes tomar una acción extra.`,
  },
  indomitable: {
    name: "Indomable",
    description: `Rehaces una tirada de salvación que hallas fallado. Debes usar el nuevo resultado.`,
  },
};
