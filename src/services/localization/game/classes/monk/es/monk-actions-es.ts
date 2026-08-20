import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const monk_actions_es: GameLocalizationCategory = {
  flurry_of_blows: {
    name: "Ráfaga de Golpes",
    description: `Después de realizar tu acción de ataque durante tu turno, puedes gastar 1 punto de ki para realizar dos impactos desarmados como acción adicional.`,
  },
  patient_defense: {
    name: "Defensa Paciente",
    description: `Puedes gastar 1 punto de ki para hacer una acción de esquivar como acción adicional durante tu turno.`,
  },
  step_of_the_wind: {
    name: "Paso del Viento",
    description: `Puedes gastar 1 punto de ki para realizar una acción de retirarse o esprintar como una acción adicional durante tu turno. Tu distancia de salto se dobla durante ese turno.`,
  },
  deflect_missiles: {
    name: "Desviar Proyectiles",
    description: `Desvías o atrapas un proyectil cuando te impacte un ataque de arma a distancia. El daño que recibes del ataque se reduce en 1d10 + tu modificador por Destreza + tu nivel de monje.
      Si reduces el daño a 0, puedes gastar un punto de ki para atrapar el proyectil si es lo suficientemente pequeño como para caber en una mano y tienes al menos una mano libre. Haces un ataque a distancia con el arma o la munición que acabas de coger como parte de la misma reacción. Realizas este ataque como si tuvieras competencia y el misil cuenta como un arma de monje que tiene alcance normal de 20 pies y alcance largo de 60 pies.`,
  },
  slow_fall: {
    name: "Caída Lenta",
    description: `Reduces cualquier daño por caída que recibas. Este daño se reduce un número igual a tu nivel de monje multiplicado por 5.`,
  },
  stunning_strike: {
    name: "Golpe Aturdidor",
    description: `Cuando impactes a otra criatura con un ataque de arma cuerpo a cuerpo, gastas 1 punto de ki para intentar infligir un golpe aturdidor. El objetivo debe tener éxito en una tirada de salvación de Constitución para no quedarse aturdido hasta el final de tu siguiente turno.`,
  },
  stillness_of_mind: {
    name: "Quietud de la Mente",
    description: `Eliminas un efecto que te haya dejado hechizado o asustado.`,
  },
  diamond_soul: {
    name: "Alma de Diamante",
    description: `Cuando hagas una tirada de salvación y falles, puedes gastar 1 punto de ki para volver a tirar los dados y coger el segundo resultado.`,
  },
  empty_body_invisibility: {
    name: "Cuerpo Vacío: Invisibilidad",
    description: `Gastas 4 puntos de ki para volverte invisible durante 1 minuto. Durante ese tiempo, ganas resistencia contra todos los tipos de daño excepto fuerza`,
  },
  empty_body_astral_projection: {
    name: "Cuerpo Vacío: Proyección Astral",
    description: `Gastas 8 puntos de ki para lanzar 'Projección Astral' sin necesitar componentes materiales. No puedes llevar otras criaturas contigo de este modo.`,
  },
};
