import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const oathbreaker_actions_es: GameLocalizationCategory = {
  channel_divinity_control_undead: {
    name: "Canalizar Divinidad: Controlar Muertos Vivientes",
    description: `Eliges a una criatura muerta viviente que se encuentre a 30 pies o menos y pueda ver. El objetivo deberá hacer una tirada de salvación de Sabiduría. Si la falla, tendrá que obedecer las tus ordenes durante las 24 horas siguientes o hasta que este vuelva a usar esta opción de Canalizar Divinidad. Los muertos vivientes cuyo valor de desafío sea igual o superior a tu nivel de paladín son nmunes a este efecto.`,
  },
  channel_divinity_dreadful_aspect: {
    name: "Canalizar Divinidad: Aspecto Aterrador",
    description: `Todas las criaturas situadas a 30 pies o menos de ti que elijas y que puedas ver deberán realizar una tirada de salvación de Sabiduría. Si la fallan, estarán asustadas de ti durante 1 minuto. Si una criatura asustada por este efecto termina su turno a 30 pies o más de ti, podrá intentar hacer de nuevo la tirada de salvación de Sabiduría para librarse del efecto.`,
  },
  dread_lord: {
    name: "Amo del Pavor",
    description: `Te rodeas de un aura de pesadumbre durante 1 minuto. Esta aura reducirá cualquier luz brillante en un radio de 30 pies alrededor del paladín a luz tenue. Siempre que un enemigo que esté asustado del paladín empiece su turno dentro del aura, recibirá 4d10 de daño psíquico. Las criaturas que dependan de la vista sufrirán desventaja en las tiradas de ataque contra las criaturas que elijas dentro del aura.`,
  },
  dread_lord_shadow_grasp: {
    name: "Amo del Pavor: Agarre Sombrío",
    description: `Mientras tu aura de 'Amo del Pavor' esté activa, puedes realizar un ataque de conjuro cuerpo a cuerpo contra el objetivo que inflige 3d10 + tu modificador de Carisma de daño necrótico.`,
  },
};
