import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const paladin_features_es: GameLocalizationCategory = {
  divine_sense: {
    name: "Sentido Divino",
    description: `Para tus sentidos, la presencia de un gran mal se percibe como un hedor nocivo, mientras que un bien poderoso es como música celestial. Como acción, puedes abrir tus sentidos para detectar tales fuerzas. Hasta el final de tu siguiente turno, sabes dónde se encuentra cualquier celestial, infernal o no muerto que esté a menos de 60 pies de ti y que no esté completamente cubierto. Sabes de qué tipo es (celestial, infernal o no muerto), pero no su identidad (el vampiro conde Strahd von Zarovich, por ejemplo). Dentro del mismo radio, también puedes detectar la presencia de cualquier lugar u objeto que haya sido bendecido o desacralizado, como con el conjuro Consagrar.
      Puedes usar este rasgo un número de veces igual a 1 + tu modificador por Carisma. Cuando termines un descanso largo, recuperas todos los usos que hayas gastado.`,
  },
  lay_on_hands: {
    name: "Imponer las Manos",
    description: `Tu toque sagrado puede curar heridas. Tienes una reserva de poder curativo que se recupera cuando terminas un descanso largo. Con dicha reserva, puedes recuperar un número de puntos de golpe igual a tu nivel de paladín multiplicado por 5.
      Como acción, puedes tocar a una criatura y extraer poder de la reserva para hacer que esta recupere puntos de golpe hasta la cantidad máxima que quede en tu reserva.
      De forma alternativa, puedes gastar 5 puntos de golpe de tu reserva de curación para curar al objetivo de una enfermedad o neutralizar el veneno que le afecta. Puedes curar varias enfermedades y neutralizar varios venenos con un único uso de Imposición de manos gastando puntos de golpe independientes para cada uno.
      Este rasgo no afecta ni a los no muertos ni a los constructos.`,
  },
  divine_smite: {
    name: "Castigo Divino",
    description: `Cuando impactes a una criatura con un ataque de arma cuerpo a cuerpo, puedes gastar un espacio de conjuro para infligir daño radiante al objetivo además del daño del arma. El daño adicional es 2d8 si el espacio de conjuro es de nivel 1, más 1d8 por cada nivel de conjuro mayor de 1, hasta un máximo de 5d8. El daño aumenta en 1d8 si el objetivo es un no muerto o un infernal.`,
  },
  spellcasting_paladin: {
    name: "Lanzamiento de Conjuros",
    description: `Has aprendido a utilizar magia divina a través de la meditación y la oración para lanzar conjuros igual que lo hace un clérigo.
      Preparar y lanzar conjuros:
        La tabla del paladín muestra cuántos espacios de conjuro tienes para lanzar tus conjuros. Para hacerlo, debes gastar un espacio del mismo nivel que el conjuro o superior. Recuperas todos los espacios de conjuro gastados cuando termines un descanso prolongado.
        Tú preparas la lista de conjuros que puedes lanzar: elige un número de conjuros de paladín igual a tu modificador por Carisma + la mitad de tu nivel de paladín, redondeando hacia abajo (mínimo un conjuro). Los conjuros deben ser de un nivel para el cual tengas espacios de conjuro.
        Por ejemplo, si eres un paladín de nivel 5, tendrás cuatro espacios de conjuro de nivel 1, y dos de nivel 2. Con Carisma 14, tu lista de conjuros preparados puede incluir cuatro conjuros de nivel 1 o 2, en cualquier combinación. Si preparas el conjuro de nivel 1 Curar heridas, puedes lanzarlo usando espacios de nivel 1 o 2. Lanzar un conjuro no hace que se elimine de tu lista de conjuros preparados.
        Puedes cambiar tu lista de conjuros preparados durante un descanso prolongado. Preparar una nueva lista de conjuros de paladín requiere pasar tiempo orando y meditando, al menos 1 minuto por nivel de conjuro para cada uno de los conjuros de tu lista.
      Característica para lanzar conjuros:
        La característica con la que lanzas tus conjuros de paladín es Carisma, dado que tu poder proviene de la fuerza de tus convicciones. Además, usas tu modificador por Carisma para establecer la CD de la tirada de salvación de los conjuros de paladín que lances y cuando haces una tirada de ataque con uno.
        CD de la salvación de conjuro = 8 + tu bonificador por competencia + tu modificador por Carisma
        Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Carisma
      Foco para lanzar conjuros:
        Puedes usar un símbolo sagrado como foco para lanzar tus conjuros de paladín.`,
  },
  divine_health: {
    name: "Salud Divina",
    description: `La magia divina que fluye dentro de ti te hace inmune a las enfermedades.`,
  },
  sacred_oath: {
    name: "Juramento Sagrado",
    description: `Cuando llegas al nivel 3, tomas un juramento sagrado, que te vincula como paladín para siempre. El juramento de devoción te concede rasgos en el nivel 3 y de nuevo en los niveles 7, 15 y 20. Dichos rasgos incluyen conjuros de juramento y el rasgo Canalizar divinidad.`,
  },
  aura_of_protection: {
    name: "Aura de Protección",
    description: `Cuando tú o una criatura amistosa cercana a ti debáis hacer una tirada de salvación, conseguís un bonificador a la tirada igual a tu modificador por Carisma (bonificador mínimo de +1). Tienes que estar consciente para conceder este bonificador. El rango del aura comienza en 10 pies y aumenta a 30 pies a nivel 18.`,
  },
  aura_of_courage: {
    name: "Aura de Valor",
    description: `Tú y las criaturas amistosas que se encuentren a 10 pies de ti no pueden ser asustadas mientras tú estés consciente. Este rango aumenta a 30 pies a nivel 18.`,
  },
  improved_divine_smite: {
    name: "Castigo Divino Mejorado",
    description: `Estás tan imbuido del poder de lo justo que todos tus impactos con armas cuerpo a cuerpo llevan poder divino. Cuando impactes a una criatura con un arma cuerpo a cuerpo, la criatura recibe 1d8 puntos de daño adicionales por daño radiante. Si utilizas Castigo divino en un ataque, suma este daño al daño adicional de Castigo divino.`,
  },
  cleansing_touch: {
    name: "Toque Purificador",
    description: `Puedes usar tu acción para eliminar el efecto de un conjuro que haya sobre ti o sobre una criatura voluntaria a la que toques.
      Puedes usar este rasgo tantas veces como tu modificador por Carisma (mínimo una vez). Recuperas los usos gastados cuando termina un descanso prolongado.`,
  },
};
