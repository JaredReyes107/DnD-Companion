import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const archfey_actions_es: GameLocalizationCategory = {
  fey_presence: {
    name: "Presencia Feérica",
    description: `Fuerzas a cada criatura en un cubo de 10 pies adyacente ti, a que realice una tirada de salvación de Sabiduría contra la CD de tus conjuros de brujo. Las criaturas que fallen su tirada de salvación quedan hechizadas o asustadas por ti (a tu elección) hasta el final de tu siguiente turno.`,
  },
  misty_escape: {
    name: "Escape Brumoso",
    description: `Cuando recibes daño, puedes usar tu reacción para volverte invisible y teletransportarte hasta 60 pies hacia un espacio desocupado que puedas ver. Permaneces invisible hasta el comienzo de tu siguiente turno o hasta que ataques o lances un conjuro.`,
  },
  beguiling_defenses: {
    name: "Defensas Seductoras",
    description: `Cuando otra criatura intenta encantarte, puedes usar tu reacción para devolverle el hechizo. La criatura debe tener éxito en una tirada de salvación de Sabiduría contra la CD de tus conjuros de brujo o pasa a estar encantada por ti durante un minuto o hasta que reciba cualquier daño.`,
  },
  dark_delirium: {
    name: "Delirio Oscuro",
    description: `Eliges una criatura que puedas ver en un rango de 60 pies de ti, la cual debe realizar una tirada de salvación de Sabiduría contra la CD de tus conjuros de brujo. Si falla la tirada de salvación, pasa a estar hechizada o asustada por ti (a tu elección) durante un minuto o hasta que tu concentración se rompa (como si estuvieses concentrándote en un conjuro). Este efecto termina si la criatura recibe cualquier daño.
        Hasta que la ilusión finaliza la criatura piensa que está perdida en un reino brumoso con la apariencia que elijas. La criatura sólo puede ver y escucharse a sí misma, a ti y a la ilusión.`,
  },
};
