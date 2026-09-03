import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const battle_smith_features_es: GameLocalizationCategory = {
  tool_proficiency_battle_smith: {
    name: "Competencia con Herramientas",
    description:
      "Obtienes competencia con las herramientas de herrero. Si ya tienes esta competencia, obtienes competencia con otro tipo de herramientas de artesano de tu elección.",
  },
  battle_smith_spells: {
    name: "Conjuros de Herrero de Batalla",
    description:
      "Siempre tienes preparados ciertos conjuros después de alcanzar niveles concretos en esta clase, como se muestra en la tabla de Conjuros de Herrero de Batalla. Estos conjuros cuentan como conjuros de artificiero para ti, pero no cuentan para el número de conjuros de artificiero que preparas.",
  },
  battle_ready: {
    name: "Listo para la Batalla",
    description:
      "Tu entrenamiento en combate y tus experimentos con la magia han dado frutos de dos maneras: Obtienes competencia con armas marciales. Cuando atacas con un arma mágica, puedes usar tu modificador de Inteligencia, en lugar del de Fuerza o Destreza, para las tiradas de ataque y daño.",
  },
  steel_defender: {
    name: "Defensor de Acero",
    description:
      "Tu ingenio te ha dado un compañero fiel, un defensor de acero. Es amistoso contigo y tus compañeros, y obedece tus órdenes. Consulta las características de esta criatura en el bloque de estadísticas del defensor de acero, que usa tu bonificador de competencia (BC) en varios lugares. Tú determinas el aspecto de la criatura y si tiene dos o cuatro patas; tu elección no tiene efecto en sus características de juego. En combate, el defensor comparte tu cuenta de iniciativa, pero toma su turno inmediatamente después del tuyo. Puede moverse y usar su reacción por sí mismo, pero la única acción que realiza en su turno es la acción de Esquivar, a menos que uses una acción adicional en tu turno para ordenarle que realice otra acción. Esa acción puede ser una de su bloque de estadísticas u otra distinta. Si estás incapacitado, el defensor puede realizar cualquier acción de su elección, no solo Esquivar. Si se lanza el conjuro reparar sobre él, recupera 2d6 puntos de golpe. Si ha muerto en la última hora, puedes usar tus herramientas de herrero como una acción para revivirlo, siempre que estés a 1,5 metros de él y gastes un espacio de conjuro de nivel 1 o superior. El defensor de acero vuelve a la vida después de 1 minuto con todos sus puntos de golpe restaurados. Al final de un descanso largo, puedes crear un nuevo defensor de acero si tienes tus herramientas de herrero contigo. Si ya tienes un defensor de acero de esta característica, el primero perece inmediatamente. El defensor también perece si tú mueres.",
  },
  extra_attack: {
    name: "Ataque Adicional",
    description:
      "Puedes atacar dos veces, en lugar de una, cada vez que realizas la acción de Atacar en tu turno.",
  },
  arcane_jolt: {
    name: "Descarga Arcana",
    description:
      "Aprendes nuevas formas de canalizar energía arcana para dañar o curar. Cuando tú golpeas a un objetivo con un ataque con arma mágica, o tu defensor de acero golpea a un objetivo, puedes canalizar energía mágica a través del golpe para crear uno de los siguientes efectos: El objetivo recibe 2d6 de daño de fuerza adicional. Elige una criatura u objeto que puedas ver a 9 metros del objetivo. Energía curativa fluye hacia el receptor elegido, restaurándole 2d6 puntos de golpe. Puedes usar esta energía un número de veces igual a tu modificador de Inteligencia (mínimo una vez), pero no puedes hacerlo más de una vez por turno. Recuperas todos los usos gastados al finalizar un descanso largo.",
  },
  improved_defender: {
    name: "Defensor Mejorado",
    description:
      "Tu Descarga Arcana y tu defensor de acero se vuelven más poderosos: El daño adicional y la curación de tu Descarga Arcana aumentan ambos a 4d6. Tu defensor de acero obtiene un bonificador de +2 a la Clase de Armadura. Cada vez que tu defensor de acero usa su Desviar Ataque, el atacante recibe daño de fuerza igual a 1d4 + tu modificador de Inteligencia.",
  },
};
