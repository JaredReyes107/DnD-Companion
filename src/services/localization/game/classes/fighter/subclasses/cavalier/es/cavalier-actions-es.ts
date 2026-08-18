import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const cavalier_actions_es: GameLocalizationCategory = {
  unwavering_mark: {
    name: "Marca Inquebrantable",
    description:
      "Cuando impactas a una criatura con un ataque cuerpo a cuerpo con arma, puedes marcarla hasta el final de tu siguiente turno. Este efecto acaba si quedas incapacitado, mueres u otro marca a la misma criatura. Mientras esté a 5 pies o menos de ti, una criatura marcada por ti tendrá desventaja en cualquier tirada de ataque que no te tenga como objetivo.",
  },
  unwavering_mark_retaliate: {
    name: "Marca Inquebrantable: Represalia",
    description: `Además, si una criatura marcada por ti inflige daño a cualquiera que no seas tu, podrás realizarun ataque cuerpo a cuerpo con arma especial contra ella, usando una acción adicional en tu próximo turno. Tienes ventaja en la tirada de ataque y, si impactas, infliges daño adicional al objetivo igual a la mitad de tu nivel de guerrero.`,
  },
  warding_maneuver: {
    name: "Maniobra de Protección",
    description:
      "Si tú o una criatura que puedas ver y se encuentre a 5 pies o menos de ti es impactada por un ataque y blandes un arma cuerpo a cuerpo o un escudo, puedes tirar 1d8 como reacción. Añade el resultado de la tirada a la CA del objetivo contra ese ataque. Si, aun así, el ataque impactara, el objetivo tendría resistencia contra el daño del ataque.",
  },
  hold_the_line: {
    name: "Mantener la Formación",
    description:
      "Las criaturas provocan un ataque de oportunidad tuyo cuando se mueven 5 pies o más dentro de tu alcance. Además, si impactas a un objetivo con ataque de oportunidad, su velocidad quedará reducida a 0 hasta el final del turno actual.",
  },
  ferocious_charger: {
    name: "Carga Feroz",
    description:
      "Si te mueves al menos 10 pies en línea recta justo antes de atacar a una criatura, y le impactas con el ataque, esta deberá tener éxito en una tirada de salvación de Fuerza (CD 8 + tu bonificador por competencia + modificador por Fuerza) o quedará derribada.",
  },
  vigilant_defender: {
    name: "Defensor Atento",
    description:
      "Recibes una reacción especial, que puedes usar una vez en el turno de cada criatura, menos en el tuyo. Esta reacción especial solo puedes emplearla para realizar un ataque de oportunidad, así que no puedes utilizarla en el mismo turno en que uses tu reacción normal.",
  },
};
