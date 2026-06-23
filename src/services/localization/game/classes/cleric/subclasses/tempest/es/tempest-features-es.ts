import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const tempest_features_es: GameLocalizationCategory = {
  tempest_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description:
      "Ganas competencia con las armas marciales y armaduras pesadas.",
  },
  wrath_of_the_storm: {
    name: "Ira de la Tormenta",
    description: `Puedes castigar con el poder de la tormenta a quienes te ataquen. Cuando una criatura que se encuentre a 5 pies o menos de ti y que puedas ver te impacte con un ataque, podrás usar tu reacción para obligarla a hacer una tirada de salvación de Destreza. Dicha criatura recibe 2d8 de daño de relámpago o trueno (a tu elección) si falla la tirada o la mitad si la supera.
      Puedes emplear este rasgo tantas veces como tu modificador por Sabiduría (mínimo una vez). Recuperas todos los usos tras finalizar un descanso largo.`,
  },
  channel_divinity_destructive_wrath: {
    name: "Canalizar Divinidad: Ira Destructora",
    description:
      "Puedes utilizar tu Canalizar Divinidad para empuñar el poder de la tormenta con furia desmedida. Cuando tires para determinar la cantidad de daño de relámpago o trueno que causas, podrás usar tu Canalizar Divinidad para hacer el daño máximo en vez de tirar los dados.",
  },
  thunderbolt_strike: {
    name: "Golpe Tempestuoso",
    description:
      "A partir de nivel 6, cuando causes daño de relámpago a una criatura Grande o más pequeña, también puedes empujarla hasta 10 pies en la dirección opuesta a ti.",
  },
  divine_strike: {
    name: "Golpe Divino",
    description:
      "Tienes la capacidad para imbuir los golpes de tu arma con energía divina. Una vez en cada uno de tus turnos, cuando impactes a una criatura con un ataque con arma, puedes hacer que dicho ataque cause de daño de trueno adicional al objetivo.",
  },
  stormborn: {
    name: "Hijo de la Tormenta",
    description:
      "Tienes velocidad de vuelo equivalente a tu actual velocidad caminando, siempre que no estés en interiores o bajo tierra.",
  },
};
