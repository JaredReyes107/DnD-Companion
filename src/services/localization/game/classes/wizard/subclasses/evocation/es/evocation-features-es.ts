import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const evocation_features_es: GameLocalizationCategory = {
  evocation_savant: {
    name: "Erudito de la Evocación",
    description: `El oro y el tiempo que debes gastar para copiar un conjuro de evocación en tu libro de conjuros se reducen a la mitad.`,
  },
  sculpt_spells: {
    name: "Esculpir Hechizos",
    description: `Puedes crear «bolsas» de relativa seguridad para los efectos de tus conjuros de evocación. Cuando lances un conjuro de evocación que afecte a otras criaturas que puedas ver, puedes elegir un número de ellas igual a 1 + el nivel del conjuro. Las criaturas elegidas superan automáticamente la tirada de salvación contra el conjuro y no reciben daño si normalmente hubieran recibido la mitad de daño por haber tenido éxito en la tirada.`,
  },
  potent_cantrip: {
    name: "Truco Potenciado",
    description: `El daño de tus trucos afecta incluso a criaturas que evitan el impacto del efecto. Cuando una criatura tiene éxito en una tirada de salvación contra tu truco, recibe la mitad del daño (si lo hay), pero no sufre los efectos adicionales.`,
  },
  empowered_evocation: {
    name: "Evocación Potenciada",
    description: `Puedes añadir tu modificador por Inteligencia a una de las tiradas de daño de cualquier conjuro de evocación de mago que lances.`,
  },
  overchannel: {
    name: "Canalización Forzada",
    description: `Puedes incrementar el poder de tus conjuros más simples. Cuando lances un conjuro de mago de nivel 1 a 5 que inflija daño, puedes infligir el máximo de daño con ese conjuro.
      La primera vez que lo hagas, no sufres ningún efecto adverso, pero si vuelves a usar este rasgo antes de terminar un descanso prolongado, recibes 2d12 puntos de daño necrótico por cada nivel de conjuro inmediatamente después de lanzarlo. Cada vez que vuelvas a usar este rasgo antes de terminar un descanso prolongado, el daño necrótico por nivel de conjuro aumenta en 1d12. Este daño ignora la resistencia y la inmunidad.`,
  },
};
