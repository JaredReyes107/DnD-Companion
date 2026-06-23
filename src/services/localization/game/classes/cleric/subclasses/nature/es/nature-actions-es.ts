import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const nature_actions_es: GameLocalizationCategory = {
  channel_divinity_charm_animals_and_plants: {
    name: "Hechizar Animales y Plantas",
    description:
      "Muestras tu símbolo sagrado e invocas el nombre de tu deidad. Cada criatura del tipo bestia o planta que te vea en un rango de 30 pies, debe hacer una salvación de Sabiduría. Si falla su salvación, es encantada durante un minuto o hasta que reciba daño. Mientras esté encantada será amistosa a ti y otras criaturas que designes.",
  },
  dampen_elements: {
    name: "Amortiguar Elementos",
    description:
      "Cuando tú o una criatura en un rango de 30 pies de ti reciba daño de ácido, frío, fuego, relámpago o trueno, puedes usar tu reacción para darle a esa criatura resistencia contra ese tipo de daño.",
  },
  master_of_nature: {
    name: "Maestro de la Naturaleza",
    description:
      "Mientras las criaturas estén encantadas por tu rasgo Hechizar Animales y Plantas, puedes usar una acción adicional en tu turno para ordenar verbalmente a cada una de esas criaturas qué hacer en el turno siguiente.",
  },
};
