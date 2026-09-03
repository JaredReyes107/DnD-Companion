import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_magic_actions_es: GameLocalizationCategory = {
  arcane_deflection: {
    name: "Deflección Arcana",
    description: `Obtienes +2 a tu CA o +4 a una tirada de salvación cuando te golpeen con un ataque o falles una tirada de salvación respectivamente. Cuando usas esta reacción, no podrás utilizar ningún conjuro excepto trucos hasta el final de tu siguiente turno.`,
  },
  power_surge_accumulate: {
    name: "Sobrecarga de Poder: Acumular",
    description: `Cuando terminas un efecto mágico con 'Contrahechizo' o 'Disipar Magia', obtienes 1 carga de 'Sobrecarga de Poder'.`,
  },
  power_surge_liberate: {
    name: "Sobrecarga de Poder: Liberar",
    description: ``,
  },
};
