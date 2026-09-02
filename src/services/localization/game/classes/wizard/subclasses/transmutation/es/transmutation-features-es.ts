import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const transmutation_features_es: GameLocalizationCategory = {
  transmutation_savant: {
    name: "Erudito de la Transmutación",
    description: `El oro y el tiempo que debes invertir para copiar un conjuro de transmutación en tu libro de conjuros se divide a la mitad.`,
  },
  minor_alchemy: {
    name: "Alquimia Menor",
    description: `Cuando seleccionas esta escuela, puedes alterar temporalmente las propiedades físicas de un objeto no mágico, cambiándolo de una sustancia a otra. Practicas un procedimiento alquímico especial con un objeto compuesto enteramente de madera, piedra (pero no una gema), hierro, cobre o plata, transformándolo en otro de esos materiales. Por cada 10 minutos que pases realizando el procedimiento, puedes transformar un pie cúbico de material. Después de una hora, o cuando pierdas la concentración (como si te estuvieses concentrando en un conjuro), el material vuelve a su sustancia original.`,
  },
  transmuters_stone: {
    name: "Piedra del Transmutador",
    description: `Puedes pasar 8 horas creando una piedra del Transmutador que almacena magia de transmutación. Puedes beneficiarte de la piedra tú mismo o dársela a otra criatura. Una criatura gana un beneficio a tu elección mientras esté en posesión de la piedra. Cuando creas la piedra, elige uno de estos beneficios:
      - Visión en la Oscuridad en un rango de 60 pies, como se describe en el capítulo 8.
      - Un incremento de 10 pies en la velocidad mientras la criatura no esté sobrecargada.
      - Competencia en las tiradas de salvación de Constitución.
      - Resistencia al daño de ácido, frío, fuego, eléctrico o sónico (eliges uno en el momento de crear la piedra).
      Cada vez que lanzas un conjuro de transmutación de nivel 1 o superior, puedes cambiar el efecto de tu piedra si está en tu poder.
      Si creas una nueva Piedra del Transmutador, la anterior deja de funcionar.`,
  },
  shapechanger: {
    name: "Cambiaformas",
    description: `Agregas el conjuro polimorfar a tu libro de conjuros si aún no lo tenías. Puedes lanzar polimorfar sin gastar un espacio de conjuro. Cuando lo haces, sólo puedes lanzarlo sobre ti mismo y transformarte en una bestia cuyo valor de desafío sea 1 o inferior.
      Una vez que lanzas polimorfar de esta manera, no puedes hacerlo nuevamente hasta que finalices un descanso corto o prolongado, aunque puedes lanzarlo normalmente usando un espacio de conjuro.`,
  },
  master_transmuter: {
    name: "Maestro Transmutador",
    description: `Puedes usar tu acción para consumir la reserva de magia de transmutación almacenada en tu Piedra del Transmutador en una única andanada. Cuando lo haces, elige uno de los siguientes efectos. Tu Piedra del Transmutador es destruida y no puedes crear otra hasta finalizar un descanso prolongado.
      - Transmutación Mayor. Puedes transmutar un objeto no mágico (no mayor que un cubo de 5 pies) en otro objeto no mágico de tamaño similar y masa igual o menor. Debes pasar 10 minutos manipulando el objeto para transformarlo.
      - Panacea. Eliminas todas las maldiciones, enfermedades y venenos que afecten a la criatura que toques con tu piedra del Transmutador. La criatura recobra todos sus puntos de golpe.
      - Restaurar Vida. Lanzas el conjuro revivir a los muertos sobre una criatura que toques con la Piedra del Transmutador, sin gastar un espacio de conjuro y sin necesidad de tenerlo en tu libro de conjuros.
      - Restaurar Juventud. Tocas a una criatura voluntaria con tu Piedra del Transmutador, y la edad aparente de esa criatura se reduce en 3d10 años, con un mínimo de 13 años. Este efecto no extiende la duración de la vida de una criatura.`,
  },
};
