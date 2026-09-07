import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ancients_actions_es: GameLocalizationCategory = {
  channel_divinity_nature_wrath: {
    name: "Ira de la Naturaleza",
    description: `Aparecen enredaderas espectrales y atrapan a una criatura que puedas ver y esté a 10 pies o menos de ti. La criatura debe superar una tirada de salvación de Fuerza o Destreza o quedará apresada. Mientras está apresada por las enredaderas, la criatura repite la tirada de salvación al final de cada uno de sus turnos. Si la supera se libera y las enredaderas desaparecen.`,
  },
  channel_divinity_turn_the_faithless: {
    name: "Expulsar a los Infieles",
    description: `Cada criatura feérica o demoníaca en un rango de 30 pies o menos de ti que pueda escucharte debe realizar una tirada de salvación de Sabiduría. Si falla, la criatura es expulsada durante 1 minuto o hasta que sufra algún daño. Una criatura expulsada debe emplear sus turnos en intentar moverse tan lejos de ti como le sea posible, y no puede moverse voluntariamente a un espacio a menos de 30 pies de ti. Tampoco puede realizar reacciones. En su turno, sólo puede realizar la acción de Correr o intentar huir de un efecto que impida que se mueva. Si no hay sitio donde moverse, la criatura puede usar la acción de Esquivar. Si la verdadera forma de una criatura está oculta por una ilusión, cambiaformas o algún otro efecto, esa verdadera forma es revelada mientras está expulsada.`,
  },
  undying_sentinel: {
    name: "Centinela Imperecedero",
    description: `Cuando eres reducido a 0 puntos de golpe y no estás muerto, puedes decidir ser reducido a 1 punto de golpe en lugar de a 0. Cuando utilizas esta habilidad, no puedes volver a usarla hasta que finalices un descanso prolongado. Además, no sufres ninguno de los inconvenientes de la vejez y no puedes ser envejecido mágicamente.`,
  },
  elder_champion: {
    name: "Campeón Ancestral",
    description: `Tomas la forma de una fuerza de la naturaleza ancestral. Durante 1 minuto, ganas los siguientes beneficios:
        - Al comienzo de cada uno de tus turnos recuperas 10 puntos de golpe.
        - Siempre que lances un conjuro de paladín que tenga un tiempo de lanzamiento de 1 acción, puedes lanzarlo como una acción adicional en su lugar.
        - Las criaturas enemigas a 10 pies o menos de ti tienen desventaja en las tiradas de salvación contra tus conjuros de paladín y opciones de Canalizar Divinidad.
        - Una vez hayas utilizado este rasgo no puedes volver a usarlo hasta que finalices un descanso prolongado.`,
  },
};
