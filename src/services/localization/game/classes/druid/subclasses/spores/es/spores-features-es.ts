import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const spores_features_es: GameLocalizationCategory = {
  circle_spells_spores: {
    name: "Conjuros del Círculo",
    description: "",
  },
  halo_of_spores: {
    name: "Halo de Esporas",
    description:
      "Estás rodeado de esporas necróticas invisibles, que resultan inofensivas hasta que las lanzas contra una criatura cercana. Cuando una criatura que puedas ver se mueva a un espacio a 10 pies o menos de ti o comience su turno allí, puedes usar tu reacción para infligir 1d4 de daño necrótico a esa criatura, a menos que tenga éxito en una tirada de salvación de Constitución contra tu CD de salvación de conjuros. El daño necrótico aumenta a 1d6 en el nivel 6, a 1d8 en el nivel 10 y a 1d10 en el nivel 14.",
  },
  symbiotic_entity: {
    name: "Entidad Simbiótica",
    description: `Obtienes la capacidad de canalizar magia a tus esporas. Como acción, puedes gastar un uso de tu rasgo Forma Salvaje para activar esas esporas en lugar de transformarte en bestia y obtendrás 4 puntos de golpe temporales por cada nivel que tengas en esta clase. Mientras este rasgo esté activo, obtienes los siguientes beneficios:
      - Cuando hagas el daño de tu Halo de Esporas, lanza el dado de daño por segunda vez y suma el resultado al total.
      - Tus ataques con arma cuerpo a cuerpo infligen 1d6 de daño necrótico adicional a cualquier objetivo al que impacten.
      Estos beneficios duran 10 minutos, hasta que pierdes todos estos puntos de golpe temporales o hasta que vuelves a usar Forma Salvaje.`,
  },
  fungal_infestation: {
    name: "Plaga Fúngica",
    description: `Obtienes la capacidad de infestar un cadáver con tus esporas para reanimarlo. Si una bestia o un humanoide Pequeño o Mediano muere a 10 pies o menos de ti, puedes usar tu reacción para reanimarlo y se levantará inmediatamente con 1 punto de golpe. La criatura tiene el perfil de Zombi (VD 1/4) del Monster Manual. La criatura mantiene la vida durante 1 hora. Pasado este tiempo, se desploma y muere.
      Durante el combate, el turno del zombi va justo después del tuyo. Obedece tus órdenes mentales y solo puede realizar la acción de Atacar, con un ataque cuerpo a cuerpo.
      Puedes usar este rasgo una cantidad de veces igual a tu modificador por Sabiduría (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  spreading_spores: {
    name: "Difusión de Esporas",
    description: `Obtienes la capacidad de cubrir una zona con esporas mortales. Como acción adicional, si tu rasgo Entidad Simbiótica está activo, puedes lanzar esporas a una distancia de hasta 30 pies, donde se arremolinarán y formarán un cubo de 10 pies durante 1 minuto. Las esporas desaparecerán si vuelves a usar este rasgo, si las descartas como acción adicional o si el rasgo Entidad Simbiótica deja de estar activo.
      Siempre que una criatura se mueva a la zona del cubo o comience su turno allí, recibirá el daño de tu Halo de Esporas, a menos que tenga éxito en una tirada de salvación de Constitución contra tu CD de salvación de conjuros. Una criatura solo puede sufrir este daño una vez por turno.
      Mientras dure el cubo de esporas, no puedes usar la reacción del Halo de Esporas.`,
  },
  fungal_body: {
    name: "Cuerpo Fúngico",
    description:
      "Las esporas fúngicas de tu cuerpo te alteran: no puedes resultar cegado, ensordecido, asustado ni envenenado, y cualquier golpe crítico que te impacte cuenta como un golpe normal, a menos que estés incapacitado.",
  },
};
