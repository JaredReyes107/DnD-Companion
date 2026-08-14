import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_archer_actions_es: GameLocalizationCategory = {
  curving_shot: {
    name: "Disparo Curvo",
    description: `Cuando realizas una tirada de ataque con una flecha mágica y fallas, usas una acción adicional para volver a hacer la tirada de ataque contra un objetivo distinto situado a 60 pies o menos del original.`,
  },

  // --- Arcane Shot Options ---
  banishing_arrow: {
    name: "Flecha Desterradora",
    description: `La criatura impactada por el proyectil deberá tener éxito en una tirada de salvación de Carisma o quedará desterrada. Mientras esté desterrada de esta manera, su velocidad será 0 y estará incapacitada. Al final de su siguiente turno, volverá a aparecer en el mismo lugar en el que estaba o, en su defecto, en el espacio libre más cercano si aquel está ocupado. Cuando alcances el nivel 18 en esta clase, el objetivo también sufre 2d6 puntos de daño de fuerza adicional cuando es impactado por la flecha.`,
  },
  beguiling_arrow: {
    name: "Flecha Encantadora",
    description: `La criatura impactada por el proyectil recibe 2d6 de daño psíquico adicional y, además, puedes elegir a uno de tus aliados situado a 30 pies o menos del objetivo. Este último deberá realizar una tirada de salvación de Sabiduría o quedará hechizado por el aliado escogido hasta el comienzo de tu siguiente turno. Este efecto termina antes de tiempo si el aliado seleccionado ataca al objetivo hechizado, le inflige daño o le fuerza a realizar una tirada de salvación. El daño psíquico se incrementa a 4d6 cuando llegas al nivel 18 de esta clase.`,
  },
  bursting_arrow: {
    name: "Flecha Explosiva",
    description: `Inmediatamente después de que el proyectil impacte a una criatura, esta y todas las demás situadas a 10 pies o menos de ella reciben 2d6 de daño de fuerza cada una. El daño de fuerza se incrementa a 4d6 cuando llegas al nivel 18 de esta clase.`,
  },
  enfeebling_arrow: {
    name: "Flecha Debilitadora",
    description: `La criatura impactada por el proyectil recibe 2d6 de daño necrótico adicional. El objetivo también deberá tener éxito en una tirada de salvación de Constitución o el daño realizado por sus ataques con arma quedará reducido a la mitad hasta el comienzo de tu siguiente turno. El daño necrótico se incrementa a 4d6 cuando llegas al nivel 18 de esta clase.`,
  },
  grasping_arrow: {
    name: "Flecha Enredadora",
    description: `La criatura impactada por el proyectil recibe 2d6 de daño de veneno adicional, su velocidad se reduce en 10 pies y sufrirá 2d6 de daño cortante la primera vez, cada turno, que se mueva al menos 1 pies sin teletransportarse. El objetivo, o cualquier criatura que pueda alcanzarle, puede usar una acción para retirar las zarzas mediante una prueba de Fuerza (Atletismo) con éxito contra tu CD de Disparo Arcano. De otro modo, las zarzas duran 1 minuto o hasta que vuelvas a emplear esta opción. El daño de veneno y el daño cortante se incrementan a 4d6 cuando alcanzas el nivel 18 de esta clase.`,
  },
  piercing_arrow: {
    name: "Flecha Penetrante",
    description: `Cuando empleas esta opción, no realizas una tirada de ataque para el ataque. En vez de eso, el proyectil avanza en una línea recta, de 1 pies de ancho y 30 pies de largo, antes de desaparecer. La flecha atraviesa los objetos sin dañarlos, ignorando cobertura. Todas las criaturas en la línea deberán hacer una tirada de salvación de Destreza. Si alguna falla, recibirá daño como si hubiera sido impactada por la flecha, más 1d6 de daño perforante adicional. Si tiene éxito, recibe la mitad de daño. El daño perforante aumenta a 2d6 cuando alcanzas el nivel 18 de esta clase.`,
  },
  seeking_arrow: {
    name: "Flecha Buscadora",
    description: `Cuando utilizas esta opción, no realizas una tirada de ataque para el ataque. En vez de eso, elige a una criatura a la que hayas visto en el último minuto. El proyectil vuela hacia el objetivo, doblando esquinas de ser necesario e ignorando cobertura media y tres cuartos. Si la criatura está dentro del alcance del arma y hay un camino suficientemente amplio para que viaje la flecha, el objetivo deberá realizar una tirada de salvación de Destreza. Sino se cumplen estas condiciones, el proyectil desaparecerá después de viajar tanto como pueda. Si falla la tirada, el objetivo recibirá daño como si hubiera sido impactado por la flecha, más 1d6 de daño de fuerza adicional. Además, sabrás la localización de la criatura. Si tiene éxito, recibe la mitad del daño y no averiguas su posición. El daño de fuerza se incrementa a 2d6 cuando llegas al nivel 18 de esta clase.`,
  },
  shadow_arrow: {
    name: "Flecha de Sombras",
    description: `La criatura impactada por el proyectil sufre 2d6 de daño psíquico adicional. Además, deberá tener éxito en una tirada de salvación de Sabiduría o le resultará imposible ver a más de 5 pies de distancia hasta el principio de tu siguiente turno. El daño psíquico se incrementa a 4d6 cuando alcanzas el nivel 18 de esta clase.`,
  },
};
