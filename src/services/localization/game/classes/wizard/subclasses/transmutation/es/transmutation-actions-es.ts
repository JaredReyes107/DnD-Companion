import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const transmutation_actions_es: GameLocalizationCategory = {
  minor_alchemy: {
    name: "Alquimia Menor",
    description: `Usas 10 minutos para transformar un pie cúbico de material de un objeto  compuesto enteramente de madera, piedra (pero no una gema), hierro, cobre o plata en otro de esos materiales. Después de una hora o cuando pierdas concentración el material vuelve a su sutancia original.`,
  },
  transmuters_stone_create: {
    name: "Crear Piedra del Transmutador",
    description: `Pasas 8 horas creando una Piedra del Transmutador que otorga a su portador uno de los siguientes beneficios, elegido al crear la piedra:
        - Visión en la Oscuridad en un rango de 60 pies.
        - Un incremento de 10 pies en la velocidad mientras la criatura no esté sobrecargada.
        - Competencia en las tiradas de salvación de Constitución.
        - Resistencia al daño de ácido, frío, fuego, eléctrico o sónico (eliges uno en el momento de crear la piedra).
        Si creas una nueva Piedra del Transmutador, la anterior deja de funcionar.`,
  },
  transmuters_stone_alter: {
    name: "Alterar Piedra del Transmutador",
    description: `Cada vez que lanzas un conjuro de transmutación de nivel 1 o superior, puedes cambiar el efecto de tu piedra si está en tu poder.`,
  },
  shapechanger: {
    name: "Cambiaformas",
    description: `Lanzas 'Polimorfar' sobre ti mismo, transformándote en una bestia cuyo valor de desafío sea 1 o inferior.`,
  },
  master_transmuter: {
    name: "Maestro Transmutador",
    description: `Destruyes tu Piedra del Transmutador y solo puedes crearla de nuevo después de un descanso largo. Realizas uno de los siguientes efectos:
        -  Transmutación Mayor. Puedes transmutar un objeto no mágico (no mayor que un cubo de 5 pies) en otro objeto no mágico de tamaño similar y masa igual o menor. Debes pasar 10 minutos manipulando el objeto para transformarlo.
        - Panacea. Eliminas todas las maldiciones, enfermedades y venenos que afecten a la criatura que toques con tu piedra del Transmutador. La criatura recobra todos sus puntos de golpe.
        - Restaurar Vida. Lanzas el conjuro revivir a los muertos sobre una criatura que toques con la Piedra del Transmutador, sin gastar un espacio de conjuro y sin necesidad de tenerlo en tu libro de conjuros.
        - Restaurar Juventud. Tocas a una criatura voluntaria con tu Piedra del Transmutador, y la edad aparente de esa criatura se reduce en 3d10 años, con un mínimo de 13 años. Este efecto no extiende la duración de la vida de una criatura.`,
  },
};
