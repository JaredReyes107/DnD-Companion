import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const swashbuckler_actions_es: GameLocalizationCategory = {
  fancy_footwork: {
    name: "Juego de Pies Elegante",
    description: `Si en tu turno realizas un ataque cuerpo a cuerpo contra una criatura, esta no podrá realizar ataques de oportunidad contra ti durante el resto de tu turno.`,
  },
  panache: {
    name: "Garbo",
    description: `Haces una tirada de Carisma (Persuasión) enfrentada a la prueba de Sabiduria (perspicacia) de una criatura. La criatura debe poder oírte y tenéis que tener un idioma en común. Si superas la tirada y la criatura te es hostil, esta tendrá desventaja en las tiradas de ataque contra objetivos distintos a ti y no podrá hacer ataques de oportunidad contra cualquier objetivo que no seas tú. El efecto dura 1 minuto, hasta que uno de tus compañeros ataque al objetivo, use un conjuro que le afecte o hasta que el objetivo y tu os encontréis a mas de 60 pies de distancia. Si superas la tirada y la criatura no te es hostil, la habrás hechizado durante 1 minuto y te considerará un conocido amistoso. este efecto acaba de forma inmediata si tú o tus compañeros le hacéis algún daño.`,
  },
  elegant_maneuver: {
    name: "Maniobra Elegante",
    description: `Consigues ventaja en la siguiente prueba de Destreza (Acrobacias) o Fuerza (Atletismo) que hagas en el mismo turno.`,
  },
  master_duelist: {
    name: "Duelista Experto",
    description: `Si fallas una tirada de ataque, puedes volver a tirar con ventaja.`,
  },
};
