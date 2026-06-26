import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const stars_features_es: GameLocalizationCategory = {
  star_map: {
    name: "Mapa Estelar",
    description: `Has creado un mapa estelar como parte de tus estudios del firmamento. Es un objeto Diminuto y puede servir como canalizador mágico para tus conjuros de druida.
      Mientras sostienes este mapa, conoces el truco Guía. Además, tienes el conjuro Saeta guiada preparado. Este conjuro se considera, en lo que a ti respecta, un conjuro de druida, y no cuenta para el total de conjuros que puedes tener preparados. Puedes lanzar Saeta guiada sin gastar un espacio de conjuro. Puedes hacerlo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.
      Si pierdes el mapa, puedes realizar una ceremonia de 1 hora para crear uno de sustitución mágicamente. Esta ceremonia se puede llevar a cabo durante un descanso corto o largo y destruye el mapa anterior.`,
  },
  starry_form: {
    name: "Forma Estelar",
    description: `Puedes gastar un uso de tu rasgo Forma Salvaje para adoptar una forma estelar en lugar de transformarte en una bestia. Mientras estés en tu forma estelar, sigues teniendo el mismo perfil, pero tu cuerpo se vuelve luminoso: tus articulaciones resplandecen como estrellas y están conectadas por líneas brillantes, como en un mapa estelar. Esta forma emite luz brillante en un radio de 10 pies y luz tenue 10 pies más allá. La forma dura 10 minutos y terminará si la cancelas (no requiere acción), quedas incapacitado, mueres o vuelves a usar este rasgo.
      Siempre que adoptes tu forma estelar, elige cuál de las siguientes constelaciones brillará en tu cuerpo; en función de tu elección, gozarás de ciertos beneficios mientras dure la forma:
      Arquero. En tu cuerpo aparece una constelación con forma de arquero. Cuando activas esta forma, y como acción adicional en tus turnos siguientes mientras dure, puedes realizar un ataque de conjuro a distancia con el que lanzas una flecha luminosa a una criatura a 60 pies o menos de ti. Si impacta, el ataque causará una cantidad de daño radiante igual a 1d8 + tu modificador por Sabiduría.
      Cáliz. En tu cuerpo aparece una constelación con forma de cáliz de vida. Siempre que gastes un espacio de conjuro para lanzar un conjuro que haga recuperar puntos de golpe a una criatura, tú u otra criatura a 30 pies o menos de ti podréis recuperar una cantidad de puntos de golpe igual a 1d8 + tu modificador por Sabiduría.
      Dragón. En tu cuerpo aparece una constelación con forma de dragón sabio. Cuando hagas una prueba de Inteligencia o Sabiduría o una tirada de salvación de Constitución para mantener la concentración en un conjuro, podrás sustituir un resultado de 9 o menos en el d20 por un 10.`,
  },
  cosmic_omen: {
    name: "Presagio Cósmico",
    description: `Tras finalizar un descanso largo, puedes consultar tu Mapa Estelar para tener un presagio. Si lo haces, tira un dado. Hasta que finalices tu próximo descanso largo, dispondrás de una reacción especial que dependerá de si sacaste un número par o impar en la tirada:
      Fortuna (par). Cuando una criatura que puedas ver a 30 pies o menos de ti vaya a hacer una tirada de ataque, una tirada de salvación o una prueba de característica, puedes emplear tu reacción para tirar un d6 y sumar el resultado al total.
      Desdicha (impar). Cuando una criatura que puedas ver a 30 pies o menos de ti vaya a hacer una tirada de ataque, una tirada de salvación o una prueba de característica, puedes usar tu reacción para tirar un d6 y restar el resultado del total.
      Puedes usar esta reacción una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  twinkling_constellations: {
    name: "Constelaciones Centelleantes",
    description: "Las constelaciones de tu Forma Estelar mejoran. El 1d8 del Arquero y el Cáliz se convierte en 2d8, y mientras el Dragón está activo, tienes una velocidad volando de 20 pies y puedes levitar. Además, al comienzo de cada uno de tus turnos, mientras estés en tu Forma Estelar, podrás cambiar la constelación que brilla en tu cuerpo.",
  },
  full_of_stars: {
    name: "Colmado de Luz Estelar",
    description: "Mientras estés en tu Forma Estelar, te vuelves parcialmente incorpóreo, lo que te da resistencia al daño contundente, perforante y cortante.",
  },
};
