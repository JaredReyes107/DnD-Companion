import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fey_wanderer_features_es: GameLocalizationCategory = {
  dreadful_strikes: {
    name: "Golpes Pavorosos",
    description: `Puedes potenciar tus golpes con armas con magia mental procedente de las melancólicas hondonadas de Feywild. Cuando impactas a una criatura con un arma, puedes infligir 1d4 de daño psíquico adicional al objetivo, que solo puede sufrir este daño adicional una vez por turno. El daño adicional aumenta a 1d6 cuando alcanzas el nivel 11 de esta clase.`,
  },
  fey_wanderer_magic: {
    name: "Magia de Errante Feérico",
    description: `Aprendes conjuros adicionales cuando alcanzas determinados niveles de esta clase. Todos estos conjuros se consideran, en lo que a ti respecta, conjuros de explorador, pero no cuentan para el total de conjuros de explorador que conoces.`,
  },
  otherworldly_glamour: {
    name: "Glamour Sobrenatural",
    description: `Tus cualidades feéricas te dotan de un encanto sobrenatural. Como resultado, en cada prueba de Carisma que hagas obtienes un bonificador igual a tu modificador por Sabiduría (mínimo de +1).
      Además, ganas competencia en una de las siguientes habilidades de tu elección: Engaño, Interpretación o Persuasión.`,
  },
  beguiling_twist: {
    name: "Giro Seductor",
    description: `La magia de Feywild protege tu mente. Tienes ventaja en las tiradas de salvación para evitar que te hechicen o te asusten.
      Además, siempre que tú o una criatura que puedas ver a 120 pies o menos de ti tengáis éxito en una tirada de salvación para evitar que os hechicen o asusten, puedes usar tu reacción para obligar a otra criatura diferente que puedas ver a 120 pies o menos de ti a hacer una tirada de salvación de Sabiduría contra tu CD de salvación de conjuros. Si falla, el objetivo quedará hechizado o asustado por ti (a tu elección) durante 1 minuto. El objetivo puede repetir la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará del efecto.`,
  },
  fey_reinforcements: {
    name: "Refuerzos Feéricos",
    description: `Las cortes reales de Feywild te han bendecido con la ayuda de los seres feéricos, por lo que conoces Invocar feérico. No cuenta para el total de conjuros de explorador que conoces y puedes lanzarlo sin ningún componente material. También puedes lanzarlo una vez sin ningún espacio de conjuro y recuperas la capacidad de hacerlo tras finalizar un descanso largo.
      Cuando empieces a lanzar el conjuro, puedes modificarlo para que no requiera concentración. Si lo haces, la duración del conjuro es de 1 minuto para ese lanzamiento.`,
  },
  misty_wanderer: {
    name: "Errante Brumoso",
    description: `Puedes entrar y salir de Feywild para desplazarte en un abrir y cerrar de ojos: puedes lanzar Paso brumoso sin gastar un espacio de conjuro. Puedes hacerlo una cantidad de veces igual a tu modificador por Sabiduría (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.
      Además, cada vez que lances Paso brumoso, podrás elegir a una criatura voluntaria que puedas ver a 5 pies o menos de ti para que te acompañe. Dicha criatura se teletransportará a un espacio sin ocupar de tu elección a 5 pies o menos de tu espacio de destino.`,
  },
};
