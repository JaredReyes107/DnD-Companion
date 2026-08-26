import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const storm_actions_es: GameLocalizationCategory = {
  tempestuous_magic: {
    name: "Magia Tempestuosa",
    description: `Justo antes o después de lanzar un conjuro de nivel 1 o superior puedes volar hasta 10 pies sin provocar un ataque de oportunidad.`,
  },
  heart_of_the_storm: {
    name: "Corazón de la Torment",
    description: `Cuando lanzas un conjuro de nivel 1 o superior que inflija daño de relámpago o de trueno, las criaturas que elijas, que puedas ver y se encuentren a 10 pies o menos de ti reciban la mitad de tu nivel de hechicero de daño de relámpago o de trueno (elígelo cada vez que uses esta opción).`,
  },
  storm_guide_stop_rain: {
    name: "Guía de la Tormenta: Detener Lluvia",
    description: `Si está lloviendo, puedes emplear una acción para que cese la lluvia en una esfera de 20 pies de radio en la que seas el centro. Puedes terminar este efecto como acción adicional.`,
  },
  storm_guide_wind_direction: {
    name: "Guía de la Tormenta: Alterar Viento",
    description: `Si hace viento, puedes usar una acción adicional en cada asalto para elegir la dirección en la que sopla el viento en una esfera de 100 pies de radio en la que seas el centro. El viento soplará en esa dirección hasta el final de tu siguiente turno. Este rasgo no altera la velocidad del viento.`,
  },
  storms_fury: {
    name: "Furia de la Tormenta",
    description: `Cuando eres impactado por un ataque cuerpo a cuerpo, puedes utilizar tu reacción para hacer daño de relámpago al atacante. El daño es equivalente a tu nivel de hechicero. El atacante deberá realizar una tirada de salvación de Sabiduría con la misma CD que tu tirada de salvación de conjuros. Si no supera la tirada, el atacante será empujado hasta 20 pies en dirección opuesta a tí en línea recta.`,
  },
  wind_soul_share_flight: {
    name: "Alma del Viento: Compartir Vuelo",
    description: `Reduces tu velocidad volando a 30 pies durante una hora, pero le otorgas una velocidad volando de 30 pies durante la misma duración a un número de criaturas igual a 3 + tu modificador de Carisma a 30 pies de ti.`,
  },
};
