import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_features_en } from "@/services/localization/game/classes/barbarian/subclasses/berserker/en/en-berserker-features"
import { totem_warrior_features_en } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/en/en-totem-warrior-features"
import { ancestral_guardian_features_en } from "./subclasses/ancestral-guardian/en/en-ancestral-guardian-features";
import { storm_herald_features_en } from "./subclasses/storm-herald/en/en-storm-herald-features";
import { zealot_features_en } from "./subclasses/zealot/en/en-zealot-features";

const barbarian_subclass_features_en: GameLocalizationCategory = {
  ...berserker_features_en,
  ...totem_warrior_features_en,
  ...ancestral_guardian_features_en,
  ...storm_herald_features_en,
  ...zealot_features_en,
};

export const barbarian_features_en: GameLocalizationCategory = {
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

  ...barbarian_subclass_features_en,
};
