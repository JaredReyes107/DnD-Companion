import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const monk_features_es: GameLocalizationCategory = {
  unarmored_defense: {
    name: "Defensa sin Armadura",
    description:
      "Mientras no lleves ni armadura ni escudo, tu CA es igual a 10 + tu modificador por Destreza + tu modificador por Sabiduría.",
  },
  martial_arts: {
    name: "Artes Marciales",
    description: `Tu práctica en las artes marciales te permite dominar estilos de combate que usan impactos desarmados y armas de monje, que son espadas cortas y cualquier arma cuerpo a cuerpo sencilla que no tenga la propiedad «dos manos» o «pesada». Obtienes los siguientes beneficios mientras estás desarmado o solo blandes armas de monje y no llevas ni armadura ni escudo:
      Puedes usar Destreza en lugar de Fuerza en los ataques y las tiradas de daño.
      Puedes utilizar el dado de daño desarmado en lugar del daño habitual de tu impacto desarmado o arma de monje. Este dado cambia según vas consiguiendo niveles de monje.
      Cuando en tu turno realizas una acción de ataque desarmado o con un arma de monje, puedes realizar un ataque desarmado como acción adicional. Por ejemplo, si realizas una acción de ataque con un bastón, también puedes realizar un ataque desarmado como acción adicional, asumiendo que todavía no hayas hecho una acción adicional durante ese turno.
      Ciertos monasterios usan tipos de armas de monje especializadas. Por ejemplo, puedes usar dos clavas de madera conectadas por una cadena corta (que se llama nunchaku) o una hoz con una hoja más corta y recta (que se llama kama). Independientemente del nombre que uses para tu arma de monje, puedes usar las estadísticas de juego que se indican para el arma.`,
  },
  ki: {
    name: "Ki",
    description: `Tu entrenamiento te permite utilizar la energía mística del ki. Tu acceso a esta energía se representa mediante un número de puntos de ki. Dispones de un número de puntos de ki iguales a tu nivel de monje.
      Puedes gastar estos puntos para activar varios rasgos de ki.
      Cuando gastas 1 punto de ki, este no vuelve a estar disponible hasta que no termines un descanso prolongado o breve, al final del cual recuperas todos los puntos gastados. Debes pasar al menos 30 minutos de descanso meditando para recuperar tus puntos de ki.
      Algunos de tus rasgos de ki requieren que tu objetivo haga una tirada de salvación para resistir sus efectos. La CD de la tirada de salvación se calcula de este modo:
      CD salvación de ki = 8 + tu bonificador por competencia + tu modificador por Sabiduría`,
  },
  unarmored_movement: {
    name: "Movimiento sin Armadura",
    description: `Tu velocidad aumenta mientras no lleves ni armadura ni escudo. Este bonificador aumenta de forma pasiva en 10 pies, y aumenta en 5 pies adicionales en los niveles 6, 10, 14 y 18. A nivel 9 consigues la capacidad de moverte por superficies verticales y sobre líquidos durante tu turno sin caer mientras te mueves.`,
  },
  monastic_tradition: {
    name: "Tradición Monástica",
    description: `Cuando llegas al nivel 3, te encomiendas a una tradición monástica de tu elección. Tu tradición te otorga rasgos en el nivel 3 y de nuevo en los niveles 6, 11 y 17.`,
  },
  deflect_missiles: {
    name: "Desviar Proyectiles",
    description: `Puedes usar tu reacción para desviar o atrapar un proyectil cuando te impacte un ataque de arma a distancia. Cuando lo hagas, el daño que recibes del ataque se reduce en 1d10 + tu modificador por Destreza + tu nivel de monje.
      Si reduces el daño a 0, puedes atrapar el proyectil si es lo suficientemente pequeño como para caber en una mano y tienes al menos una mano libre. En este caso, puedes gastar 1 punto de ki para hacer un ataque a distancia con el arma o la munición que acabas de coger como parte de la misma reacción. Realizas este ataque como si tuvieras competencia y el misil cuenta como un arma de monje que tiene alcance normal de 20 pies y alcance largo de 60 pies.`,
  },
  slow_fall: {
    name: "Caída Lenta",
    description: `Puedes usar tu reacción para reducir cualquier daño por caída que recibas. Este daño se reduce un número igual a tu nivel de monje multiplicado por 5.`,
  },
  extra_attack: {
    name: "Ataque Adicional",
    description: `Puedes atacar dos veces en lugar de una cuando realizas una acción de ataque durante tu turno.`,
  },
  stunning_strike: {
    name: "Golpe Aturdidor",
    description: `Puedes interferir en el flujo de ki del cuerpo de un oponente. Cuando impactes a otra criatura con un ataque de arma cuerpo a cuerpo, puedes gastar 1 punto de ki para intentar infligir un golpe aturdidor. El objetivo debe tener éxito en una tirada de salvación de Constitución para no quedarse aturdido hasta el final de tu siguiente turno.`,
  },
  ki_empowered_strikes: {
    name: "Impactos de Ki",
    description: `Tus impactos sin arma cuentan como si fueran mágicos a efectos de superar la resistencia y la inmunidad a ataques y daño no mágicos.`,
  },
  evasion: {
    name: "Evasión",
    description: `Tu agilidad instintiva te permite esquivar algunos efectos de área, como el aliento de rayo de un dragón azul o el conjuro Bola de fuego. Cuando estés sujeto a un efecto que te permita hacer una tirada de salvación de Destreza para recibir solo la mitad del daño, en lugar de eso no recibes ningún daño si tienes éxito en la tirada de salvación y solo la mitad si fallas.`,
  },
  stillness_of_mind: {
    name: "Quietud de la Mente",
    description: `Puedes utilizar tu acción para eliminar un efecto que te haya dejado hechizado o asustado.`,
  },
  purity_of_body: {
    name: "Pureza del Cuerpo",
    description: `Tu maestría de tu flujo de ki te hace inmune a las enfermedades y al veneno.`,
  },
  tongue_of_the_sun_and_moon: {
    name: "Lengua del Sol y la Luna",
    description: `Aprendes a tocar el ki de otras mentes para entender todas las lenguas habladas. Además, cualquier criatura que entienda una lengua determinada puede entender lo que digas.`,
  },
  diamond_soul: {
    name: "Alma de Diamante",
    description: `Tu maestría del ki te otorga competencia con todas las tiradas de salvación. Además, cuando hagas una tirada de salvación y falles, puedes gastar 1 punto de ki para volver a tirar los dados y coger el segundo resultado.`,
  },
  timeless_body: {
    name: "Cuerpo Eterno",
    description: `Tu ki evita que sufras la fragilidad de la vejez, y no puedes envejecer mágicamente, aunque todavía puedes morir de viejo. Además, ya no necesitas comida ni agua.`,
  },
  empty_body: {
    name: "Cuerpo Vacío",
    description: `Puedes utilizar tu acción para gastar 4 puntos de ki y volverte invisible durante 1 minuto. Durante ese tiempo, también tienes resistencia a todo tipo de daño salvo al daño por fuerza.`,
  },
  perfect_self: {
    name: "Yo Perfecto",
    description: `Cuanto tires iniciativa y no te queden puntos de ki, recuperas 4 puntos ki.`,
  },
};
