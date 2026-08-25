import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const soulknife_actions_es: GameLocalizationCategory = {
  regain_psionic_energy_die: {
    name: "Recuperar Dado de Energía Psiónica",
    description: `Recuperas 1 Dado de Energía Psiónica.`,
  },
  psi_bolstered_knack: {
    name: "Don Psirreforzado",
    description: `Tiras un Dado de Energía Psiónica y añades el resultado a una prueba de característica fallida usando una habilidad o una herramienta en la que seas competente. Solo gastas el dado si la tirada tiene éxito.`,
  },
  psychic_whispers: {
    name: "Susurros Psíquicos",
    description: `Elige una o más criaturas que puedas ver, hasta una cantidad igual a tu bonificador por competencia, y luego tira un Dado de Energía Psiónica. Durante un número de horas igual al resultado, las criaturas elegidas podrán hablar contigo telepáticamente y tú podrás hablar telepática mente con ellas. Para enviar o recibir un mensaje (no requiere acción), tú y la criatura en cuestión debéis estar a 1 milla o menos la una de la otra. Una criatura no podrá usar este tipo de telepatía si no habla ningún idioma y, además, podrá finalizar la conexión telepática en cualquier momento (no requiere acción). La criatura y tú no tenéis por qué hablar un idioma en común para entenderos.`,
  },
  psychic_blade_attack: {
    name: "Ataque con Hoja Psíquica",
    description: `Cuando uses la acción de Atacar, podrás hacer que aparezca una hoja psíquica en tu mano libre y realizar el ataque con esa arma. Esta cuchilla mágica es un arma cuerpo a cuerpo sencilla con las propiedades "sutil" y "arrojadiza". Tiene un alcance normal de 60 pies, pero no alcance largo, y al impactar inflige daño psíquico igual a 1d6 más el modificador por característica empleado para la tirada de ataque. La cuchilla se desvanecerá inmediatamente después de impactar o fallar contra su objetivo y no le dejará ninguna marca aunque le inflija daño.`,
  },
  psychic_blade_offhand_attack: {
    name: "Ataque Adicional con Hoja Psíquica",
    description: `Tras atacar con la hoja, puedes realizar un ataque con arma a distancia o cuerpo a cuerpo con una segunda cuchilla psíquica como acción adicional en el mismo turno, siempre que tu otra mano esté libre para crearla. El dado de daño de este ataque adicional es 1d4, en vez de 1d6.`,
  },
  homing_strikes: {
    name: "Golpes Teledirigidos",
    description: `Tiras un Dado de Energía Psiónica y añades el resultado a una tirada de ataque fallida hecha con tu Hoja Psíquica. Solo gastas el Dado de Energía Psiónica si el ataque impacta.`,
  },
  psychic_teleportation: {
    name: "Teletransporte Psíquico",
    description: `Gastas un dado de Energía Psiónica y lo tiras. Entonces, lanzas tu Hoja Psíquica a un espacio sin ocupar que puedas ver a hasta una cantidad de pies igual a 10 veces el resultado. Luego te teletransportarás a ese espacio y la hoja desparecerá.`,
  },
  psychic_veil: {
    name: "Velo Psíquico",
    description: `Tanto tú como cualquier cosa que vistas o lleves contigo se vuelven invisibles mágicamente durante 1 hora o hasta que desactives este efecto (no requiere acción). Esta invisibilidad terminará inmediatamente si infliges daño a una criatura o si obligas a una criatura a realizar una tirada de salvación.`,
  },
  rend_mind: {
    name: "Desgarro Mental",
    description: `Cuando uses tu Hoja Psíquica para infligir daño de Ataque Furtivo a una criatura, podrás obligar a ese objetivo a realizar una tirada de salvación de Sabiduría (CD igual a 8 +tu bonificador por competencia + tu modificador por Destreza). Si la falla, el objetivo quedará aturdido durante 1 minuto. El objetivo aturdido puede repetir la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará del efecto.`,
  },
};
