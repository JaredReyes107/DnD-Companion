import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const open_hand_actions_es: GameLocalizationCategory = {
  open_hand_technique: {
    name: "Técnica de la Mano Abierta",
    description: `Cuando impactes a una criatura con uno de los ataques que te concede tu rasgo Ráfaga de golpes, puedes imponer uno de los siguientes efectos en ese objetivo:
        - Debe superar una tirada de salvación de Destreza para no ser derribado.
        - Debe realizar una tirada de salvación de Fuerza. Si falla, puedes empujarlo y alejarlo hasta 15 pies de ti.
        - No puede hacer reacciones hasta el final de tu siguiente turno.`,
  },
  wholeness_of_body: {
    name: "Integridad del Cuerpo",
    description: `Recuperas puntos de golpe igual a tu nivel de monje multiplicado por 3`,
  },
  quivering_palm_mark: {
    name: "Palma Temblorosa: Marcar",
    description: `Cuando impactes sin armas a una criatura, puedes gastar tres puntos de ki para empezar estas vibraciones impredecibles, las cuales duran tantos días como tu nivel de monje. Solo puedes tener a una criatura a la vez bajo el efecto de este rasgo. Puedes terminar con las vibraciones sin usar una acción, pero en ese caso no provocan el daño.`,
  },
  quivering_palm_trigger: {
    name: "Palma Temblorosa: Activar",
    description: `Usas tu acción para detonar la marca de la criatura afectada siempre y cuando esté en el mismo plano de existencia que tú. Al hacerlo, la criatura debe hacer una tirada de salvación de Constitución. Si falla, sus puntos de golpe se reducen a 0. Si tiene éxito, recibe 10d10 puntos de daño necrótico.`,
  },
};
