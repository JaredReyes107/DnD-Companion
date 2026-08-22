import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const oathbreaker_features_es: GameLocalizationCategory = {
  oath_spells_oathbreaker: {
    name: "Conjuros de Rompejuramentos",
    description:
      "Un paladín Rompejuramentos pierde todos los conjuros de juramento que hubiera ganado hasta este momento y, en lugar de eso, recibe los conjuros de Rompejuramentos de los niveles de paladín pertinentes.",
  },
  channel_divinity_oathbreaker: {
    name: "Canalizar Divinidad",
    description: `Consigues las dos siguientes opciones de Canalizar Divinidad:
      - Eliges a una criatura muerta viviente que se encuentre a 30 pies o menos y pueda ver. El objetivo deberá hacer una tirada de salvación de Sabiduría. Si la falla, tendrá que obedecer tus ordenes durante las 24 horas siguientes o hasta que este vuelva a usar esta opción de Canalizar Divinidad. Los muertos vivientes cuyo valor de desafío sea igual o superior a tu nivel de paladín serán inmunes a este efecto.
      - Canalizas tus emociones más oscuras y las concentra en un estallido de amenaza mágica. Todas las criaturas situadas a 30 pies o menos de ti, que puedan verle y que este elija deberán realizar una tirada de salvación de Sabiduría. Si la fallan, estarán asustadas de ti durante 1 minuto. Si una criatura asustada por este efecto termina su turno a 30 pies o más del ti, podrá intentar hacer de nuevo la tirada de salvación de Sabiduría para librarse del efecto.`,
  },
  aura_of_hate: {
    name: "Aura de Odio",
    description: `Tú y todos los infernales y muertos vivientes que se encuentren a 10 pies o menos de él, reciben un bonificador igual a tu modificador por Carisma (mínimo de +1) a las tiradas de daño de los ataques con arma cuerpo a cuerpo. Si hay varios paladines usando este rasgo al mismo tiempo, cada criatura solo podrá beneficiarse del de uno de ellos . A nivel 18 el alcance de esta aura aumenta a 30 pies.`,
  },
  supernatural_resistance: {
    name: "Resistencia Sobrenatural",
    description: `Obtienes resistencia a daño contundente, cortante y perforante de armas no mágicas.`,
  },
  dread_lord: {
    name: "Amo del Pavor",
    description: `Te de un aura de pesadumbre que durará 1 minuto. Esta aura reducirá cualquier luz brillante en un radio de 30 pies alrededor de ti a luz tenue. Siempre que un enemigo que esté asustado de ti empiece su turno dentro del aura, recibirá 4d10 de daño psíquico. Además, tú y las criaturas que este elija dentro del aura estarán arropadas en una sombra aún más profunda. Las criaturas que dependan de la vista sufrirán desventaja en las tiradas de ataque contra las criaturas envueltas en sombras . Mientras esta aura se mantenga activa, puedes usar una acción adicional durante su turno para que las sombras del aura ataquen a una criatura. Realizas un ataque de conjuro cuerpo a cuerpo contra el objetivo. Si este impacta, el objetivo sufrirá 3d10 + tu modificador por Carisma de daño necrótico. Una vez activada el aura, no podrás volver a hacerlo hasta que finalice un descanso largo.`,
  },
};
