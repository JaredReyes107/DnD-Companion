import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const rune_knight_actions_es: GameLocalizationCategory = {
  giants_might: {
    name: "Fuerza de los Gigantes",
    description: `Si tu tamaño es menor que Grande, te vuelves Grande, y también todo lo que lleves puesto. Si no tienes espacio para hacerte Grande, tu tamaño no cambia. Tienes ventaja en las pruebas de Fuerza y en las tiradas de salvación de Fuerza. Una vez en cada uno de tus turnos, uno de tus ataques con arma o un ataque sin armas puede infligir 1d6 de daño adicional a un objetivo si impacta.`,
  },
  runic_shield: {
    name: "Escudo Rúnico",
    description: `Si una tirada de ataque impacta contra otra criatura que puedas ver a 60 pies o menos de ti, puedes usar tu reacción para obligar al atacante a volver a tirar un d20 y usar el nuevo resultado.`,
  },

  // Rune actions
  cloud_rune: {
    name: "Runa de las Nubes",
    description: `Si una tirada de ataque os impacta a ti o a una criatura que puedas ver a 30 pies o menos de ti, podrás usar tu reacción para invocar la runa y elegir una criatura diferente a 30 pies o menos de ti que no sea el atacante. La criatura elegida se convierte en el objetivo del ataque, utilizando el mismo resultado. Esta magia puede transferir los efectos del ataque independientemente del alcance de dicho ataque.`,
  },
  fire_rune: {
    name: "Runa de Fuego",
    description: `Cuando impactes a una criatura con un ataque con arma, invocas la runa para hacer aparecer unos grilletes de fuego: el objetivo recibirá 2d6 de daño de fuego adicional y deberá tener éxito en una tirada de salvación de Fuerza o quedará apresado durante 1 minuto. Mientras esté apresado por los grilletes, el objetivo recibirá 2d6 de daño de fuego al comienzo de cada uno de sus turnos. El objetivo puede repetir la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará de los grilletes. `,
  },
  frost_rune: {
    name: "Runa de Escarcha",
    description: `Durante 10 minutos, obtienes un bonificador de +2 a todas las pruebas de característica y las tiradas de salvación que usen Fuerza o Constitución.`,
  },
  stone_rune: {
    name: "Runa de Piedra",
    description: `Cuando una criatura que puedas ver termine su turno a 30 pies o menos de ti, usas tu reacción para invocar esta runa y obligar a esa criatura a realizar una tirada de salvación de Sabiduría. Si falla, quedará hechizada durante 1 minuto. Mientras esté hechizada de esta manera, la criatura tendrá una velocidad de 0 y quedará incapacitada, sumiéndose en un estado de estupor. La criatura repite la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará del efecto.`,
  },
  hill_rune: {
    name: "Runa de las Colinas",
    description: `Obtienes resistencia al daño contundente, perforante y cortante durante 1 minuto.`,
  },
  storm_rune: {
    name: "Runa de las Tormentas",
    description: `Invocas la runa para entrar en un estado profético durante 1 minuto o hasta que quedes incapacitado. Hasta que termine el estado, cuando tú o una criatura que puedas ver a 60 pies o menos de ti haga una tirada de ataque, una tirada de salvación o una prueba de característica, puedes usar tu reacción para hacer que la tirada tenga ventaja o desventaja. `,
  },

  storm_rune_foresight: {
    name: "Runa de las Tormentas: Premonición",
    description: `Usas tu reacción para hacer que una tirada de ataque, tirada de salvación o prueba de característica de una criatura que puedas ver a 60 pies de ti tenga ventaja desentaja.`,
  },
};
