import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const soulknife_features_es: GameLocalizationCategory = {
  psionic_power: {
    name: "Poder Psiónico",
    description: `Albergas una fuente de energía psiónica en tu interior. Esta energía está representada por tus dados de Energía Psiónica, que son d6. Tienes una cantidad de estos dados igual al doble de tu bonificador por competencia, y sirven para alimentar los distintos poderes psiónicos que posees, que se explican debajo.
      Algunos de tus poderes gastan el dado de Energía Psiónica que usan, tal y como se especifica en la correspondiente descripción, por lo que no podrás usar un poder que te obligue a usar un dado si ya los has gastado todos. Recuperas todos los dados de Energía Psiónica tras finalizar un descanso largo. Además, como acción adicional, puedes recuperar un dado de Energía Psiónica gastado, pero no podrás volver a hacerlo hasta que finalices un descanso corto o largo.
      Cuando alcanzas determinados niveles en esta clase, el tamaño y de tus dados de Energía Psiónica aumenta: en el nivel 5 (d8), en el 11 (d10) y en el 17 (d12).
      Los poderes especificados a continuación usan tus dados de Energía Psiónica.
      - Don Psirreforzado: Cuando tu entrenamiento no psiónico te falle, tu poder psiónico podría ser de ayuda: si fallas una prueba de característica usando una habilidad o una herramienta en la que seas competente, podrás tirar un dado de Energía Psiónica y sumar el resultado a la prueba, lo que puede convertir un fallo en un éxito. Solo gastas el dado si la tirada tiene éxito.
      - Susurros Psíquicos: Puedes establecer comunicación telepática con otras criaturas: ¡una opción perfecta para infiltrarte sin llamar la atención! Como acción, elige una o más criaturas que puedas ver, hasta una cantidad igual a tu bonificador por competencia, y luego tira un dado de Energía Psiónica. Durante un número de horas igual al resultado, las criaturas elegidas podrán hablar contigo telepáticamente y tú podrás hablar telepática mente con ellas. Para enviar o recibir un mensaje (no requiere acción), tú y la criatura en cuestión debéis estar a 1 milla o menos la una de la otra. Una criatura no podrá usar este tipo de telepatía si no habla ningún idioma y, además, podrá finalizar la conexión telepática en cualquier momento (no requiere acción). La criatura y tú no tenéis por qué hablar un idioma en común para entenderos.
        La primera vez que utilices este poder tras cada descanso largo, no gastarás el dado de Energía Psiónica. El resto de veces que uses el poder, gastarás el dado.`,
  },
  psychic_blades: {
    name: "Cuchillas Psíquicas",
    description: `Puedes hacer que tu poder psiónico se manifieste en forma de resplandecientes cuchillas de energía psíquica. Siempre que uses la acción de Atacar, podrás hacer que aparezca una cuchilla psíquica en tu mano libre y realizar el ataque con esa arma. Esta cuchilla mágica es un arma cuerpo a cuerpo sencilla con las propiedades "sutil" y "arrojadiza". Tiene un alcance normal de 60 pies, pero no alcance largo, y al impactar inflige daño psíquico igual a 1d6 más el modificador por característica empleado para la tirada de ataque. La cuchilla se desvanecerá inmediatamente después de impactar o fallar contra su objetivo y no le dejará ninguna marca aunque le inflija daño.
      Tras atacar con la cuchilla, puedes realizar un ataque con arma a distancia o cuerpo a cuerpo con una segunda cuchilla psíquica como acción adicional en el mismo turno, siempre que tu otra mano esté libre para crearla. El dado de daño de este ataque adicional es 1d4, en vez de 1d6.`,
  },
  soul_blades: {
    name: "Cuchillas del Alma",
    description: `Tu Hoja Psíquica es ahora una expresión de tu alma henchida de fuerza psíquica, otorgándote estos poderes que utilizan tus dados de Energía Psiónica:
      - Golpes Teledirigidos: Si realizas una tirada de ataque con tu Hoja Psíquica y fallas, podrás tirar un dado de Energía Psiónica y sumar el número obtenido a la tirada de ataque. Si eso hace que el ataque impacte, gastarás el dado de Energía Psiónica.
      - Teletransporte Psíquico: Como acción adicional, manifiestas una Hoja Psíquica, gastas un dado de Energía Psiónica y lo tiras, y lanzas la cuchilla a un espacio sin ocupar que puedas ver a hasta una cantidad de pies igual a 10 veces el resultado. Luego te teletransportarás a ese espacio y la cuchilla desparecerá.`,
  },
  psychic_veil: {
    name: "Velo Psíquico",
    description: `Puedes tejer un velo de interferencias psíquicas para enmascararte. Como acción, puedes hacer que tanto tú como cualquier cosa que vistas o lleves contigo os volváis invisibles mágicamente durante 1 hora o hasta que desactives este efecto (no requiere acción). Esta invisibilidad terminará inmediatamente si infliges daño a una criatura o si obligas a una criatura a realizar una tirada de salvación.
      Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes un dado de Energía Psiónica para volver a utilizarlo.`,
  },
  rend_mind: {
    name: "Desgarro Mental",
    description: `Puedes pegar un tajo a la mente de una criatura con tu Hoja Psíquica. Cuando uses tu Hoja Psíquica para infligir daño de Ataque Furtivo a una criatura, podrás obligar a ese objetivo a realizar una tirada de salvación de Sabiduría (CD igual a 8 +tu bonificador por competencia + tu modificador por Destreza). Si la falla, el objetivo quedará aturdido durante 1 minuto. El objetivo aturdido puede repetir la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará del efecto.
      Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes tres dados de Energía Psiónica para volver a usarlo.`,
  },
};
