import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const cavalier_features_es: GameLocalizationCategory = {
  bonus_proficiency: {
    name: "Competencia Adicional",
    description:
      "Obtienes competencia en una de las siguientes habilidades, a tu elección: Historia, Interpretación, Perspicacia, Persuasión o Trato con Animales. Como alternativa, puedes aprender un idioma, el que prefieras.",
  },
  born_to_the_saddle: {
    name: "Nacido en la Silla",
    description:
      "Tu maestría como jinete se vuelve evidente. Tienes ventaja en tiradas de salvación que realices para evitar caer de tu montura. Además, si al caer de ella desciendes menos de 10 pies y no estás incapacitado, puedes aterrizar de pie. Por último, montar o desmontar de una criatura solo te cuesta 5 pies de movimiento, en vez de la mitad de tu velocidad.",
  },
  unwavering_mark: {
    name: "Marca Inquebrantable",
    description:
      "Puedes amenazar a tus enemigos, impidiendo sus ataques y castigándoles por dañar a otros. Cuando impactas a una criatura con un ataque cuerpo a cuerpo con arma, puedes marcarla hasta el final de tu siguiente turno. Este efecto acaba si quedas incapacitado, mueres u otro marca a la misma criatura. Mientras esté a 5 pies o menos de ti, una criatura marcada por ti tendrá desventaja en cualquier tirada de ataque que no te tenga como objetivo. Además, si una criatura marcada por ti inflige daño a cualquiera que no seas tu, podrás realizarun ataque cuerpo a cuerpo con arma especial contra ella, usando una acción adicional en tu próximo turno. Tienes ventaja en la tirada de ataque y, si impactas, infliges daño adicional al objetivo igual a la mitad de tu nivel de guerrero. Independientemente del número de criaturas que marques, puedes realizar este ataque especial tantas veces como tu modificador por Fuerza (mínimo de uno). Recuperas todos los usos cuando completas un descanso largo.",
  },
  warding_maneuver: {
    name: "Maniobra de Protección",
    description:
      "Has aprendido a eludir golpes dirigidos contra ti, tu montura u otros compañeros cercanos. Si tú o una criatura que puedas ver y se encuentre a 5 pies o menos de ti es impactada por un ataque y blandes un arma cuerpo a cuerpo o un escudo, puedes tirar 1d8 como reacción. Añade el resultado de la tirada a la CA del objetivo contra ese ataque. Si, aun así, el ataque impactara, el objetivo tendría resistencia contra el daño del ataque. Puedes utilizar este rasgo tantas veces como tu modificador por Constitución (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.",
  },
  hold_the_line: {
    name: "Mantener la Formación",
    description:
      "Te conviertes en un maestro en impedir el movimiento de tus enemigos. Las criaturas provocan un ataque de oportunidad tuyo cuando se mueven 5 pies o más dentro de tu alcance. Además, si impactas a un objetivo con ataque de oportunidad, su velocidad quedará reducida a 0 hasta el final del turno actual.",
  },
  ferocious_charger: {
    name: "Carga Feroz",
    description:
      "Ahora eres capaz de atropellar a tus enemigos, estés montado o no. Si te mueves al menos 10 pies en línea recta justo antes de atacar a una criatura, y le impactas con el ataque, esta deberá tener éxito en una tirada de salvación de Fuerza (CD 8 + tu bonificador por competencia + modificador por Fuerza) o quedará derribada. Solo puedes usar este rasgo una vez en cada uno de tus turnos.",
  },
  vigilant_defender: {
    name: "Defensor Atento",
    description:
      "Te enfrentas al peligro con una atención extraordinaria. En combate, recibes una reacción especial, que puedes usar una vez en el turno de cada criatura, menos en el tuyo. Esta reacción especial solo puedes emplearla para realizar un ataque de oportunidad, así que no puedes utilizarla en el mismo turno en que uses tu reacción normal.",
  },
};
