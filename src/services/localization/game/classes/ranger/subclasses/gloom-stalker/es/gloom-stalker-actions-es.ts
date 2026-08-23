import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const gloom_stalker_actions_es: GameLocalizationCategory = {
  dread_ambusher: {
    name: "Emboscador Pavoroso",
    description: `Realizas un ataque con arma adicional como parte de la acción de 'Atacar' en tu primer turno de cada combate, y ese ataque inflige 1d8 de daño adicional.`,
  },
  stalkers_flurry: {
    name: "Oleada del Acechador",
    description: `Cuando falles una tirada de ataque con arma druante tu turno, puedes hacer otro ataque con arma como parte de la misma acción.`,
  },
  shadowy_dodge: {
    name: "Esquive de las Sombras",
    description: `Cuando una criatura hace una tirada de ataque contra ti, si no tiene ventaja en esa tirada puedes usar tu reacción para obligar a que la realice con desventaja. Debes usar este rasgo antes de saber el resultado de la tirada de ataque.`,
  },
};
