import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fey_wanderer_actions_es: GameLocalizationCategory = {
  dreadful_strikes: {
    name: "Golpes Pavorosos",
    description: `Cuando impactas a una criatura con un arma, puedes infligir 1d4 de daño psíquico adicional al objetivo. El daño adicional aumenta a 1d6 cuando alcanzas el nivel 11 de esta clase.`,
  },
  beguiling_twist: {
    name: "Giro Seductor",
    description: `Cuando  tú o una criatura que puedas ver a 120 pies o menos de ti tengan éxito en una tirada de salvación para evitar que ser hechizados o asustados, puedes usar tu reacción para obligar a otra criatura diferente que puedas ver a 120 pies o menos de ti a hacer una tirada de salvación de Sabiduría contra tu CD de salvación de conjuros. Si falla, el objetivo quedará hechizado o asustado por ti (a tu elección) durante 1 minuto. El objetivo puede repetir la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará del efecto.`,
  },
  fey_reinforcements: {
    name: "Refuerzos Feéricos",
    description: `Puedes lanzar el conjuro 'Invocar Feérico' sin necesitar componentes materiales, y puedes lanzarlo una vez sin ningún espacio de conjuro. Además, cuando empieces a lanzar el conjuro, puedes modificarlo para que no requiera concentración. Si lo haces, la duración del conjuro es de 1 minuto para ese lanzamiento.`,
  },
  misty_wanderer: {
    name: "Errante Brumoso",
    description: `Lanzas 'Paso brumoso' sin gastar un espacio de conjuro. Además, cada vez que lances Paso brumoso, podrás elegir a una criatura voluntaria que puedas ver a 5 pies o menos de ti para que te acompañe. Dicha criatura se teletransportará a un espacio sin ocupar de tu elección a 5 pies o menos de tu espacio de destino.`,
  },
};
