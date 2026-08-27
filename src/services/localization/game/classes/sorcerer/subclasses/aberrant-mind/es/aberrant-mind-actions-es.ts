import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const aberrant_mind_actions_es: GameLocalizationCategory = {
  telepathic_speech: {
    name: "Habla Telepática",
    description: `Tú y una criatura que elijas a 30 pie so menos de ti pueden hablar telepáticamente mientras estéis a una cantidad de millas la una de la otra igual a tu modificador por Carisma (mínimo de 1 milla). Para entenderos, debéis hablaros mentalmente en un idioma que ambos conozcáis.
      La conexión telepática dura un número de minutos igual a tu nivel de hechicero. Terminará si quedas incapacitado o mueres, o si usas esta característica para formar una conexión con una criatura distinta.`,
  },
  psionic_sorcery: {
    name: "Hechicería Psiónica",
    description: `Lanzas un conjuro de tu rasgo 'Conjuros Psiónicos' usando puntos de hechicería igual al nivel del conjuro. No requiere componentes verbales ni somáticos, ni tampoco componentes materiales, a menos que el propio conjuro los consuma.`,
  },
  revelation_in_flesh: {
    name: "Revelación en Carne",
    description: `Gastas 1  o más puntos de hechicería para transformar mágicamente tu cuerpo durante 10 minutos. Por cada punto de hechicería que gastes, podrás obtener uno de los beneficios que se indican a continuación, a tu elección, y sus efectos durarán hasta que la transformación finalice:
      - Puedes ver a cualquier criatura invisible a que esté 60 pies o menos de ti, siempre que no esté tras una cobertura completa. Además, tus ojos se volverán negros o se convertirán en zarcillos sensoriales serpenteantes.
      - Obtienes una velocidad volando igual a tu velocidad caminando y puedes levitar. Cuando vuelas, tu piel resplandece recubierta de mucosa o briJla con una luz espectral.
      - Obtienes una velocidad nadando igual al doble de tu velocidad caminando y puedes respirar bajo el agua. Además, te crecen agallas en el cuello o se despliegan tras tus orejas, te salen membranas entre los dedos o te brotan cilios que se retuercen y atraviesan tu ropa.
      - Tu cuerpo, junto con cualquier equipo que vistas o lleves contigo, se vuelve baboso y maleable. Puedes colarte por cualquier espacio hasta de 1 pulgada de ancho sin tener que apretarte y puedes gastar 5 pies de movimiento para escapar`,
  },
  warping_implosion: {
    name: "Implosión Deformadora",
    description: `Te teletransportas a un espacio sin ocupar que puedas ver a 120 pies o menos de ti. Inmediatamente después de que desaparezcas, cada criatura que esté a 30 pies o menos del espacio que hayas abandonado deberán realizar una tirada de salvación de Fuerza. Si la falla, recibirá 3d10 de daño de fuerza y será arrastrada directamente al espacio que hayas abandonado, acabando en un espacio sin ocupar lo más cercano posible a tu espacio anterior. Si la supera, recibirá la mitad de daño y no será arrastrada.`,
  },
};
