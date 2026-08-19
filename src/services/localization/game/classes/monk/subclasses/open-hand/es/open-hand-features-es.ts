import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const open_hand_features_es: GameLocalizationCategory = {
  open_hand_technique: {
    name: "Técnica de la Mano Abierta",
    description: `Puedes manipular el ki de tu enemigo cuando uses el tuyo. Cuando impactes a una criatura con uno de los ataques que te concede tu rasgo Ráfaga de golpes, puedes imponer uno de los siguientes efectos en ese objetivo:
      - Debe superar una tirada de salvación de Destreza para no ser derribado.
      - Debe realizar una tirada de salvación de Fuerza. Si falla, puedes empujarlo y alejarlo hasta 15 pies de ti.
      - No puede hacer reacciones hasta el final de tu siguiente turno.
`,
  },
  wholeness_of_body: {
    name: "Integridad del Cuerpo",
    description: `Consigues la capacidad de curarte a ti mismo. Como acción, puedes recuperar puntos de golpe igual a tu nivel de monje multiplicado por 3. Debes terminar un descanso prolongado antes de poder usar este rasgo de nuevo.`,
  },
  tranquility: {
    name: "Tranquilidad",
    description: `Puedes entrar en una meditación especial que te rodea con un aura de paz. Al final de un descanso prolongado, consigues el efecto del conjuro Santuario, que dura hasta el principio de tu siguiente descanso prolongado (el conjuro puede acabar antes de la forma habitual). La CD de la tirada de salvación del conjuro es igual a 8 + tu modificador por Sabiduría + tu bonificador por competencia.`,
  },
  quivering_palm: {
    name: "Palma Temblorosa",
    description: `Consigues la capacidad de provocar vibraciones letales en el cuerpo de alguien. Cuando impactes sin armas a una criatura, puedes gastar tres puntos de ki para empezar estas vibraciones impredecibles, las cuales duran tantos días como tu nivel de monje. Las vibraciones son inofensivas a menos que uses tu acción para acabar con ellas, para lo cual el objetivo y tú debéis estar en el mismo plano de existencia. Al hacerlo, la criatura debe hacer una tirada de salvación de Constitución. Si falla, sus puntos de golpe se reducen a 0. Si tiene éxito, recibe 10d10 puntos de daño necrótico.
      Solo puedes tener a una criatura a la vez bajo el efecto de este rasgo. Puedes terminar con las vibraciones sin usar una acción, pero en ese caso no provocan el daño.`,
  },
};
