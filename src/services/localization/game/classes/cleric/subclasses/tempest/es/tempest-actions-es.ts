import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const tempest_actions_es: GameLocalizationCategory = {
    wrath_of_the_storm: {
        name: "Ira de la Tormenta",
        description: `Cuando una criatura que se encuentre a 5 pies o menos de ti y que puedas ver te impacte con un ataque, podrás usar tu reacción para obligarla a hacer una tirada de salvación de Destreza. Dicha criatura recibe 2d8 de daño de relámpago o trueno (a tu elección) si falla la tirada o la mitad si la supera.
            Puedes emplear este rasgo tantas veces como tu modificador por Sabiduría (mínimo una vez). Recuperas todos los usos tras finalizar un descanso largo.`,
    },
    channel_divinity_destructive_wrath: {
        name: "Ira Destructora",
        description: "Cuando tires para determinar la cantidad de daño de relámpago o trueno que causas, podrás usar tu Canalizar Divinidad para hacer el daño máximo en vez de tirar los dados.",
    },
};
