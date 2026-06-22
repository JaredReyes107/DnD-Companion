import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const trickery_features_es: GameLocalizationCategory = {
  trickery_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  blessing_of_the_trickster: {
    name: "Bendición del Embaucador",
    description: "Puedes usar tu acción para tocar a una criatura voluntaria que no seas tú, que tendrá ventaja en sus pruebas de Destreza (Sigilo). Esta bendición dura 1 hora o hasta que emplees este rasgo de nuevo.",
  },
  channel_divinity_invoke_duplicity: {
    name: "Canalizar Divinidad: Invocar Duplicidad",
    description: `Puedes usar tu Canalizar Divinidad para crear un duplicado ilusorio de ti mismo. Como una acción, creas una ilusión perfecta que dura 1 minuto o hasta que pierdas tu concentración (como si estuvieses concentrándote en un conjuro). La ilusión aparece en un espacio desocupado en un rango de 30 pies de ti. Como una acción adicional en tu turno, puedes mover la ilusión hasta 30 pies a un espacio que puedas ver, pero debe permanecer en un rango no mayor de 120 pies de ti.
      Mientras dure, puedes lanzar conjuros como si estuvieses en el espacio de la ilusión, pero debes usar tus propios sentidos. Adicionalmente, cuando tanto tú y tu ilusión estéis en un rango de 5 pies de una criatura que pueda ver la ilusión, tienes ventaja en las tiradas de ataque, teniendo en cuenta la distracción que causa la ilusión en el objetivo.`,
  },
  channel_divinity_cloak_of_shadows: {
    name: "Canalizar Divinidad: Capa de Sombras",
    description: "Puedes usar tu Canalizar Divinidad para desaparecer. Como una acción, te vuelves invisible hasta el final de tu siguiente turno. Te vuelves visible si atacas o lanzas un conjuro",
  },
  divine_strike: {
    name: "Golpe Divino",
    description: "Ganas la habilidad de infundir de energía divina tus golpes con arma. Una vez por turno, cuando golpees a una criatura con un ataque con arma, puedes hacer que el ataque cause daño adicional de veneno al objetivo.",
  },
  improved_duplicity: {
    name: "Duplicidad Mejorada",
    description: "Puedes crear hasta 4 duplicados de ti mismo, en lugar de uno, cuando usas Invocar Duplicidad. Como una acción adicional en tu turno, puedes mover cualquier número de ellas hasta 30 pies, con un rango máximo de 120 pies de ti.",
  },
};
