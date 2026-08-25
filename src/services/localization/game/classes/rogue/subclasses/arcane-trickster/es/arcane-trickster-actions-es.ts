import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_trickster_actions_es: GameLocalizationCategory = {
  mage_hand: {
    name: "Mano de Mago",
    description: `Una invisible mano espectral aparece flotando en un punto que elijas dentro del alcance. La mano dura mientras lo haga el conjuro o hasta que la disipes como acción. La mano se desvanece si está a más de 30 pies de ti o si vuelves a lanzar este conjuro.
        Puedes usar la mano para manipular un objeto, abrir una puerta o un recipiente cerrado, guardar o sacar un objeto de un recipiente abierto o verter el contenido de un vial. Puedes mover la mano hasta 30 pies cada vez que la usas.
        Además, puedes usar la mano para depositar un objeto que estés sosteniendo en un contenedor portado por otra criatura, tomar un objeto de un contenedor portado por otra criatura o usar herramientas de ladrón a distancia para abrir cerraduras y desarmar trampas a distancia. Puedes realizar una de estos trucos sin ser percibido por una criatura si tienes éxito en una prueba de Destreza (Juego de Manos) enfrentada a una prueba de Sabiduría (Percepción) de la criatura.
        La mano no puede atacar, activar objetos mágicos ni transportar más de 10 libras.`,
  },
  spell_thief: {
    name: "Ladrón de Conjuros",
    description: `Cuando una criatura lance un conjuro del cual seas objetivo o que te incluya en su área de efecto, puedes usar tu reacción para forzar a la criatura a realizar una tirada de salvación con el modificador de su característica de lanzamiento de conjuros. La CD equivale a la CD de salvación de tus conjuros. Si falla la tirada de salvación, niegas el efecto del conjuro en ti y robas el conocimiento del conjuro si es al menos de nivel 1 y de un nivel que puedas lanzar (no es preciso que sea un conjuro de mago). Durante las siguientes 8 horas conoces el conjuro y puedes lanzarlo usando tus espacios de conjuro. La criatura no puede lanzar dicho conjuro hasta que las 8 horas hayan pasado.`,
  },
};
