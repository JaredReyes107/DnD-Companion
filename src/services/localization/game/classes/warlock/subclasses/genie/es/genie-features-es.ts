import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const genie_features_es: GameLocalizationCategory = {
  genies_vessel: {
    name: "Recipiente del Genio",
    description: `Tu patrón tu regala un recipiente mágico que te otorga una medida del poder del genio. Es un objeto Diminuto y puedes utilizarlo como canalizador mágico para tus conjuros de brujo. Tú decides lo que es el objeto o puedes determinarlo aleatoriamente:
      Mientras estés tocando el recipiente, puedes usarlo de las siguientes formas:
        - Alivio embotellado: Como acción, puedes desvanecerte mágicamente y entrar en tu recipiente, que permanece en el espacio que has abandonado. El interior del recipiente es un espacio extradimensional con forma de cilindro, con un radio de 20 pies y 20 pies de altura, y se asemeja a tu recipiente. El interior está equipado con cojines y mesas bajas y está a una temperatura agradable. Mientras estés dentro, puedes escuchar lo que ocurre en la zona de alrededor de tu recipiente como si estuvieras en su espacio. Puedes permanecer en su interior una cantidad de horas igual a dos veces tu bonificador por competencia. Sales del recipiente si usas una acción adicional para abandonarlo, si mueres o si el recipiente es destruido. Cuando sales del recipiente, apareces en el espacio sin ocupar más cercano a él. Cualquier objeto que dejes en el recipiente permanecerá allí hasta que lo saques y, si es destruido, los objetos guardados en él aparecerán sin daño en los espacios sin ocupar más cercanos a aquel en el que estaba el recipiente. Cuando entres en el recipiente, no podrás volver a hacerlo hasta que finalices un descanso largo.
        - Ira del Genio: Una vez durante cada uno de tus turnos, cuando impactas con una tirada de ataque, puedes infligir daño extra al objetivo igual a tu bonificador por competencia. El tipo de daño lo determina tu patrón: contundente (dao), trueno (djinni), fuego (efreeti) o frío (marid).
      La CA del recipiente es igual a tu CD de salvación de conjuros. Sus puntos de golpe son iguales a tu nivel de brujo más tu bonificador por competencia y es inmune al daño de veneno y al psíquico.
      Si el recipiente es destruido o lo pierdes, puedes realizar una ceremonia de 1 hora para recibir uno de sustitución de tu patrón. Esta ceremonia se puede llevar a cabo durante un descanso corto o largo y destruye el recipiente anterior, si aún existe. El recipiente se desvanece con un destello de poder elemental cuando mueres.`,
  },
  elemental_gift: {
    name: "Don Elemental",
    description: `Comienzas a adquirir características de tu tipo de patrón. Ahora tienes resistencia a un tipo de daño determinado por el tipo de tu patrón: contundente (dao), trueno (djinni), fuego (efreeti) o frío (marid).
    Además, como acción adicional, puedes concederte una velocidad volando de 30 pies que dura 10 minutos, durante los cuales puedes levitar. Puedes usar esta acción adicional una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  sanctuary_vessel: {
    name: "Recipiente Santuario",
    description: `Cuando entras en tu Recipiente del Genio mediante el rasgo Alivio Embotellado, ahora puedes elegir hasta a cinco criaturas voluntarias que puedas ver a 30 pies o menos de ti y entrarán en el recipiente contigo.
      Como acción adicional, puedes expulsar a la cantidad de criaturas que quieras de tu recipiente, y todo el mundo será expulsado si tú lo abandonas, si mueres o si se destruye el recipiente.
      Además, cualquiera que permanezca en el recipiente al menos 10 minutos (incluido tú) obtiene el beneficio de un descanso corto, y quien quiera puede añadir tu bonificador por competencia al número de puntos de golpe que recupera si gasta Dados de Golpe como parte de un descanso corto allí.`,
  },
  limited_wish: {
    name: "Deseo Limitado",
    description: `Suplicas a tu patrón que te otorgue un pequeño deseo. Como acción, puedes expresarle tu deseo a tu Vasija del Genio, solicitando el efecto de un conjuro que sea de nivel 6 o inferior o que tenga un tiempo de lanzamiento de 1 acción. El conjuro puede ser de la lista de conjuros de cualquier clase y no necesitas cumplir sus requisitos, como costosos componentes; el conjuro simplemente surte efecto como parte de esta acción.
      Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices 1d4 descansos largos.`,
  },
};
