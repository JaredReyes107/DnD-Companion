import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const knowledge_features_es: GameLocalizationCategory = {
  knowledge_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  blessings_of_knowledge: {
    name: "Bendiciones del Conocimiento",
    description: `A partir del nivel 1 aprendes dos idiomas de tu elección. También pasas a ser competente en dos de las siguientes habilidades, a tu elección: Arcano, Historia, Naturaleza o Religión.
      Tu bonificador de competencia se duplica para cualquier tirada de habilidad que use cualquiera de estas habilidades.`,
  },
  channel_divinity_knowledge_of_the_ages: {
    name: "Canalizar Divinidad: Conocimiento de las Edades",
    description:
      "Comenzando en el nivel 2 puedes usar tu Canalizar Divinidad para hurgar en un pozo divino de conocimiento. Como una acción, eliges una habilidad o herramienta. Durante 10 minutos tienes competencia con la habilidad o herramienta elegida.",
  },
  channel_divinity_read_thoughts: {
    name: "Canalizar Divinidad: Leer Pensamientos",
    description: `A partir del nivel 6 puedes usar tu Canalizar Divinidad para leer los pensamientos de una criatura. Luego puedes usar tu acceso a la mente de la criatura para comandarla. Como una acción, elige una criatura que puedas ver en un rango de 60 pies de ti. Esa criatura debe realizar una tirada de salvación de Sabiduría. Si la criatura tiene éxito en su salvación, no puedes usar este rasgo en ella nuevamente hasta que finalices un descanso prolongado.
      Si la criatura falla su salvación, puedes leer sus pensamientos superficiales (lo que tenga en mente, reflejando sus emociones actuales y lo que está pensando activamente) cuando está en un rango de 60 pies de ti. Este efecto dura un minuto. Durante ese tiempo, puedes usar tu acción para terminar este efecto y lanzar el hechizo sugestión sobre la criatura sin gastar un espacio de conjuro. La criatura falla automáticamente su tirada de salvación contra el conjuro.`,
  },
  potent_spellcasting: {
    name: "Lanzamiento de Conjuros Potentes",
    description:
      "Comenzando al nivel 8 añades tu modificador de Sabiduría al daño que haces con cualquier truco de clérigo.",
  },
  visions_of_the_past: {
    name: "Visiones del Pasado",
    description: `Comenzando en el nivel 17 puedes invocar visiones del pasado que se relacionen con un objeto que sostengas o que esté a tu alrededor. Empleas al menos un minuto de meditación y plegarias, luego recibes visiones borrosas, como si se tratara de un sueño, de eventos recientes. Puedes meditar de esta forma durante un número de minutos equivalente a tu puntuación de Sabiduría y debes mantener la concentración durante ese tiempo, como si lanzaras un conjuro. Una vez que usas este rasgo no puedes usarlo nuevamente hasta que finalices un descanso corto o prolongado
    Lectura de un Objeto. Sosteniendo el objeto mientras meditas, puedes ver visiones de su dueño anterior. Después de meditar durante un minuto, aprendes cómo su anterior dueño adquirió el objeto y el evento significativo más reciente que envuelva al objeto y a ese dueño. Si el objeto tuvo otro dueño en el pasado reciente (un número de días equivalente o menor a tu puntuación de Sabiduría), puedes pasar un minuto adicional por cada dueño para conocer la misma información sobre esa otra criatura.
    Lectura de un Área. Mientras meditas, ves visiones de eventos recientes a tu alrededor (una habitación, una calle, un túnel, un claro o similar, hasta un cubo de 50 pies) retrocediendo un número de días equivalente a tu puntuación de Sabiduría. Por cada minuto que pasas meditando, aprendes sobre un evento significativo, comenzando con el más reciente. Los eventos significativos involucran emociones poderosas, como batallas y traiciones, casamientos, asesinatos, nacimientos o funerales. Aun así, también podrían incluirse eventos más mundanos, que carecen de importancia en tu situación actual.`,
  },
};
