import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const rogue_features_es: GameLocalizationCategory = {
  expertise_rogue: {
    name: "Pericia",
    description: `Elige dos de tus competencias con habilidades, o una de tus competencias con habilidades y tu competencia con herramientas de ladrón. Tu bonificador por competencia se multiplica por 2 en cualquier prueba de característica que hagas que utilice una de las dos competencias elegidas.
      Puedes elegir dos competencias más (con habilidades o con herramientas de ladrón) para conseguir este beneficio.`,
  },
  sneak_attack: {
    name: "Ataque Furtivo",
    description: `Sabes aprovechar la distracción de un enemigo para atacarlo por la espalda. Una vez por turno, puedes infligir daño adicional a una criatura a la que impactes con un ataque si tienes ventaja en la tirada de ataque. El ataque debe usar un arma sutil o a distancia. Este rasgo funciona aunque no tengas ventaja en la tirada de ataque si otro enemigo del objetivo no incapacitado está a menos de 5 pies de él y si tú no tienes desventaja en la tirada de ataque.
      La cantidad de daño adicional aumenta en 1d6 en cada nivel impar.`,
  },
  thieves_cant: {
    name: "Jerga de Ladrones",
    description: `Durante tu entrenamiento como pícaro, aprendes la jerga de ladrones, una mezcla de dialecto, argot y código secretos que te permite enviar mensajes en una conversación aparentemente normal. Solo otra criatura que conozca la germanía puede entender tales mensajes. Transmitir un mensaje de este tipo cuesta cuatro veces más que decir la misma idea directamente.
      Además, entiendes una serie de signos y símbolos que se usan para esconder mensajes cortos y sencillos, como si un área es peligrosa o es territorio de un gremio de ladrones, si hay un botín cerca o si las gentes que viven en la zona son presas fáciles u ofrecerán cobijo a un ladrón a la fuga.`,
  },
  cunning_action: {
    name: "Acción Astuta",
    description: `Tu agilidad mental y rapidez te permiten moverte y actuar con presteza, por lo que puedes llevar a cabo una acción adicional en cada uno de tus turnos durante un combate. Solo puedes utilizar esta acción adicional para realizar las acciones de Correr, Destrabarse o Esconderse.`,
  },
  roguish_archetype: {
    name: "Arquetipo de Pícaro",
    description: `Eliges un arquetipo que se parezca a la forma en la que usas tus habilidades de pícaro. Tu elección de arquetipo te ofrecerá rasgos a nivel 3 y de nuevo en los niveles 9, 13 y 17.`,
  },
  uncanny_dodge: {
    name: "Esquive Asombroso",
    description: `Cuando un atacante que puedas ver te impacta con un ataque, puedes usar tu reacción para reducir a la mitad el daño que te provoca.`,
  },
  evasion: {
    name: "Evasión",
    description: `Puedes apartarte ágilmente de la trayectoria de algunos efectos de área, como el aliento de fuego de un dragón rojo o el conjuro Tormenta de hielo. Cuando estás sujeto a un efecto que te permita hacer una tirada de salvación de Destreza para recibir solo la mitad de daño, si tienes éxito en la tirada de salvación no recibes daño y, si fallas, solo recibes la mitad.`,
  },
  reliable_talent: {
    name: "Talento Fiable",
    description: `Has refinado tus habilidades hasta acercarte a la perfección. Cuando hagas una prueba de característica que te permita sumar tu bonificador por competencia, si sacas 9 o menos en 1d20 puedes considerarlo como si fuera 10.`,
  },
  blindsense: {
    name: "Sentido Ciego",
    description: `Si eres capaz de oír, estás al tanto de dónde se encuentra cualquier criatura que esté escondida o sea invisible a menos de 10 pies de ti.`,
  },
  slippery_mind: {
    name: "Mente Resbaladiza",
    description: `Has adquirido una gran fortaleza mental. Obtienes competencia en las tiradas de salvación de Sabiduría.`,
  },
  elusive: {
    name: "Elusivo",
    description: `Eres tan escurridizo que será raro que un atacante pueda tomar el control de la situación. Ninguna tirada de ataque hecha contra ti tendrá ventaja mientras no estés incapacitado.`,
  },
  stroke_of_luck: {
    name: "Golpe de Suerte",
    description: `Tienes un don sorprendente para tener éxito cuando lo necesitas. Si tu ataque no impacta a un objetivo que esté a tu alcance, puedes convertir el fallo en un impacto. También, si fallas una prueba de característica, puedes considerar el resultado de la tirada de 1d20 como 20.
      Una vez que usas este rasgo, no puedes volver a usarlo hasta que no termines un descanso prolongado o breve.`,
  },
};
