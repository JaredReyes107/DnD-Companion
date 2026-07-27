import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const nature_features_es: GameLocalizationCategory = {
  nature_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  acolyte_of_nature: {
    name: "Acólito de la Naturaleza",
    description:
      "Aprendes un truco de druida de tu elección. También ganas competencia en una de las siguientes habilidades, a tu elección: Trato con Animales, Naturaleza, o Supervivencia.",
  },
  bonus_proficiencies_nature: {
    name: "Competencias Adicionales",
    description: "Obtienes competencia con armadura pesada.",
  },
  channel_divinity_charm_animals_and_plants: {
    name: "Canalizar Divinidad: Hechizar Naturaleza",
    description: `Puedes usar tu Canalizar Divinidad para encantar animales o plantas. Como una acción, muestras tu símbolo sagrado e invocas el nombre de tu deidad. Cada criatura del tipo bestia o planta que te vea en un rango de 30 pies, debe hacer una salvación de Sabiduría. Si falla su salvación, es encantada durante un minuto o hasta que reciba daño. Mientras esté encantada será amistosa a ti y otras criaturas que designes.`,
  },
  dampen_elements: {
    name: "Amortiguar Elementos",
    description:
      "Cuando tú o una criatura en un rango de 30 pies de ti reciba daño de ácido, frío, fuego, relámpago o trueno, puedes usar tu reacción para darle a esa criatura resistencia contra ese tipo de daño.",
  },
  divine_strike: {
    name: "Golpe Divino",
    description:
      "Ganas la habilidad de infundir de energía divina tus golpes con arma. Una vez por turno, cuando golpees a una criatura con un ataque con arma, puedes hacer que el ataque cause daño adicional de frío, fuego o eléctrico (a tu elección) al objetivo.",
  },
  master_of_nature: {
    name: "Maestro de la Naturaleza",
    description:
      "Ganas la habilidad de comandar plantas y animales. Mientras las criaturas estén encantadas por tu rasgo Hechizar Animales y Plantas, puedes usar una acción adicional en tu turno para ordenar verbalmente a cada una de esas criaturas qué hacer en el turno siguiente.",
  },
};
