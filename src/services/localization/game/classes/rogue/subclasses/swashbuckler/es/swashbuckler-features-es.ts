import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const swashbuckler_features_es: GameLocalizationCategory = {
  fancy_footwork: {
    name: "Juego de Pies Elegantes",
    description:
      "Aprendes a dar un golpe y apartarte sin represalias. Si en tu turno realizas un ataque cuerpo a cuerpo contra una criatura, esta no podrá realizar ataques de oportunidad contra ti durante el resto de tu turno.",
  },
  rakish_audacity: {
    name: "Audacia Elegante",
    description: `Tu confianza inconfundible te impulsa a luchar. Puedes añadir el modificador de Carisma a tus tiradas de iniciativa. Además, no necesitas ventaja en tu tirada de ataque para usar Ataque Furtivo si ninguna criatura además de tu objetivo está a 5 pies o menos de ti. Se te siguen aplicando el resto de reglas del rasgo de clase Ataque Furtivo.`,
  },
  panache: {
    name: "Garbo",
    description: `Tu encanto se vuelve increíblemente seductor. Puedes emplear una acción en hacer una tirada de Carisma (Persuasión) enfrentada a la prueba de Sabiduria (perspicacia) de una criatura. La criatura debe poder oírte y deben tener un idioma en común. Si superas la tirada y la criatura te es hostil, esta tendrá desventaja en las tiradas de ataque contra objetivos distintos a ti y no podrá hacer ataques de oportunidad contra cualquier objetivo que no seas tú. El efecto dura 1 minuto, hasta que uno de tus compañeros ataque al objetivo, use un conjuro que le afecte o hasta que el objetivo y tu os encontréis a mas de 60 pies de distancia. Si superas la tirada y la criatura no te es hostil, la habrás hechizado durante 1 minuto y te considerará un conocido amistoso. Este efecto acaba de forma inmediata si tú o tus compañeros le hacen algún daño.`,
  },
  elegant_maneuver: {
    name: "Maniobra Elegante",
    description: `Puedes usar una acción adicional durante tu turno para conseguir ventaja en la siguiente prueba de Destreza (Acrobacias) o Fuerza (Atletismo) que hagas en el mismo turno.`,
  },
  master_duelist: {
    name: "Duelista Experto",
    description: `Tu dominio de la espada te permite convertir un fallo durante el combate en un éxito. Si fallas una tirada de ataque, puedes volver a tirar con ventaja. Una vez hecho esto, deberás terminar un descanso corto o largo para poder volver a usar este rasgo.`,
  },
};
