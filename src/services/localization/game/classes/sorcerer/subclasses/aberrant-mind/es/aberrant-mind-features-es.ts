import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const aberrant_mind_features_es: GameLocalizationCategory = {
  psionic_spells: {
    name: "Conjuros Psiónicos",
    description: `Aprendes conjuros adicionales cuando alcanzas determinados niveles de esta clase. Todos estos conjuros se consideran, en lo que a ti respecta, conjuros de hechicero, pero no cuentan para el total de conjuros de hechicero que conoces.
      Además, cada vez que subas un nivel de hechicero, podrás sustituir uno de los conjuros ganados de este rasgo por otro del mismo nivel. El nuevo conjuro debe ser de adivinación o encantamiento y aparecer en la lista de conjuros de hechicero, brujo o mago.`,
  },
  telepathic_speech: {
    name: "Habla Telepática",
    description: `Puedes establecer una conexión telepática con la mente de otra criatura. Como acción adicional, elige una criatura que puedas ver a 30 pies o menos de ti. Tú y la criatura elegida podréis hablar telepáticamente mientras estéis a una cantidad de millas la una de la otra igual a tu modificador por Carisma (mínimo de 1 milla). Para entenderos, debéis hablaros mentalmente en un idioma que ambos conozcáis.
      La conexión telepática dura un número de minutos igual a tu nivel de hechicero. Terminará si quedas incapacitado o mueres, o si usas esta característica para formar una conexión con una criatura distinta.`,
  },
  psionic_sorcery: {
    name: "Hechicería Psiónica",
    description: `Cuando lanzas cualquier conjuro de nivel 1 o superior de tu rasgo Conjuros Psiónicos, puedes hacerlo gastando un espacio de conjuro de la forma normal o gastando una cantidad de puntos de hechicería igual al nivel del conjuro. Si lanzas el conjuro usando puntos de hechicería, no requerirá componentes verbales ni somáticos, ni tampoco componentes materiales, a menos que el propio conjuro los consuma.`,
  },
  psychic_defenses: {
    name: "Defensas Psíquicas",
    description: `Obtienes resistencia al daño psíquico y tienes ventaja en las tiradas de salvación para evitar que te asusten o te hechicen.`,
  },
  revelation_in_flesh: {
    name: "Revelación en Carne",
    description: `Puedes desatar la aberrante verdad que se esconde en tu interior. Como acción adicional, puedes gastar 1 o más puntos de hechicería para transformar mágicamente tu cuerpo durante 10 minutos. Por cada punto de hechicería que gastes, podrás obtener uno de los beneficios que se indican a continuación, a tu elección, y sus efectos durarán hasta que la transformación finalice:
      - Puedes ver a cualquier criatura invisible a que esté 60 pies o menos de ti, siempre que no esté tras una cobertura completa. Además, tus ojos se volverán negros o se convertirán en zarcillos sensoriales serpenteantes.
      - Obtienes una velocidad volando igual a tu velocidad caminando y puedes levitar. Cuando vuelas, tu piel resplandece recubierta de mucosa o briJla con una luz espectral.
      - Obtienes una velocidad nadando igual al doble de tu velocidad caminando y puedes respirar bajo el agua. Además, te crecen agallas en el cuello o se despliegan tras tus orejas, te salen membranas entre los dedos o te brotan cilios que se retuercen y atraviesan tu ropa.
      - Tu cuerpo, junto con cualquier equipo que vistas o lleves contigo, se vuelve baboso y maleable. Puedes colarte por cualquier espacio hasta de 1 pulgada de ancho sin tener que apretarte y puedes gastar 5 pies de movimiento para escapar de limitaciones no mágicas o de estar agarrado`,
  },
  warping_implosion: {
    name: "Implosión Deformadora",
    description: `Puedes liberar tu poder aberrante en forma de una anomalía que distorsiona el espacio. Como acción, puedes teletransportarte a un espacio sin ocupar que puedas ver a 120 pies o menos de ti. Inmediatamente después de que desaparezcas, cada criatura que esté a 30 pies o menos del espacio que hayas abandonado deberán realizar una tirada de salvación de Fuerza. Si la falla, recibirá 3d10 de daño de fuerza y será arrastrada directamente al espacio que hayas abandonado, acabando en un espacio sin ocupar lo más cercano posible a tu espacio anterior. Si la supera, recibirá la mitad de daño y no será arrastrada.
      Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes 5 puntos de hechicería para volver a usarlo.`,
  },
};
