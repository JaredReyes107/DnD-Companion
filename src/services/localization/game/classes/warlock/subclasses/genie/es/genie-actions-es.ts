import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const genie_actions_es: GameLocalizationCategory = {
  replace_vessel: {
    name: "Reemplazar Recipiente",
    description: `Realizas una ceremonia de 1 hora para recibir uno de sustitución de tu patrón. Esta ceremonia se puede llevar a cabo durante un descanso corto o largo y destruye el recipiente anterior, si aún existe. El recipiente se desvanece con un destello de poder elemental cuando mueres.`,
  },
  bottled_respite: {
    name: "Alivio Embotellado",
    description: `Entras a tu recipiente, que permanece en el espacio que has abandonado. El interior del recipiente es un espacio extradimensional con forma de cilindro, con un radio de 20 pies y 20 pies de altura, y se asemeja a tu recipiente. El interior está equipado con cojines y mesas bajas y está a una temperatura agradable. Mientras estés dentro, puedes escuchar lo que ocurre en la zona de alrededor de tu recipiente como si estuvieras en su espacio. Puedes permanecer en su interior una cantidad de horas igual a dos veces tu bonificador por competencia. Sales del recipiente si usas una acción adicional para abandonarlo, si mueres o si el recipiente es destruido. Cuando sales del recipiente, apareces en el espacio sin ocupar más cercano a él. Cualquier objeto que dejes en el recipiente permanecerá allí hasta que lo saques y, si es destruido, los objetos guardados en él aparecerán sin daño en los espacios sin ocupar más cercanos a aquel en el que estaba el recipiente.`,
  },
  genies_wrath: {
    name: "Ira del Genio",
    description: `Infliges daño extra igual a tu bonificador por competencia a una criatura que impactes con una tirada de ataque. El tipo de daño lo determina tu patrón: contundente (dao), trueno (djinni), fuego (efreeti) o frío (marid).`,
  },
  elemental_gift_flight: {
    name: "Don Elemental: Volar",
    description: `Obtienes una velocidad volando de 30 pies que dura 10 minutos, durante los cuales puedes levitar.`,
  },
  limited_wish: {
    name: "Deseo Limitado",
    description: `Lanzas un conjuro de cualquier clase de nivel 6 o menor que tome 1 acción, y no necesitas cumplir sus requisitos, como costosos componentes; el conjuro simplemente surte efecto como parte de esta acción.`,
  },
};
