import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_features_es } from "@/services/localization/game/classes/barbarian/subclasses/berserker/es/es-berserker-features"
import { totem_warrior_features_es } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/es/es-totem-warrior-features"
import { ancestral_guardian_features_es } from "./subclasses/ancestral-guardian/es/es-ancestral-guardian-features";
import { storm_herald_features_es } from "./subclasses/storm-herald/es/es-storm-herald-features";
import { zealot_features_es } from "./subclasses/zealot/es/es-zealot-features";

const barbarian_subclass_features_es: GameLocalizationCategory = {
  ...berserker_features_es,
  ...totem_warrior_features_es,
  ...ancestral_guardian_features_es,
  ...storm_herald_features_es,
  ...zealot_features_es,
};

export const barbarian_features_es: GameLocalizationCategory = {
  rage: {
    name: "Furia",
    description: "",
  },
  unarmored_defense: {
    name: "Defensa sin Armadura",
    description: "",
  },
  reckless_attack: {
    name: "Ataque Temerario",
    description: "",
  },
  danger_sense: {
    name: "Sentido del Peligro",
    description: "",
  },
  primal_path: {
    name: "Senda de Barbaro",
    description: "",
  },
  extra_attack: {
    name: "Ataque Adicional",
    description: "",
  },
  fast_movement: {
    name: "Movimiento Rápido",
    description: "",
  },
  feral_instinct: {
    name: "Instinto Salvaje",
    description: "",
  },
  brutal_critical: {
    name: "Crítico Brutal",
    description: "",
  },
  relentless_rage: {
    name: "Furia Implacable",
    description: "",
  },
  persistent_rage: {
    name: "Furia Persistente",
    description: "",
  },
  indomitable_might: {
    name: "Poder Indomable",
    description: "",
  },
  primal_champion: {
    name: "Campeón Primordial",
    description: "",
  },

  ...barbarian_subclass_features_es,
};
