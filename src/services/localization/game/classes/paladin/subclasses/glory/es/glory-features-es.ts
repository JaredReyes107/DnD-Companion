import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const glory_features_es: GameLocalizationCategory = {
  tenets_of_glory: {
    name: "Principios de Gloria",
    description: `Impulsados por los principios del Juramento de Gloria, los paladines se afanan en consumar hazañas gloriosas con la esperanza de pasar a la historia.
      - Los actos valen más que las palabras. Que te conozcan por tus gestas gloriosas, no por tus palabras.
      - No flaquees ante la adversidad. Afronta las dificultades con valentía y anima a tus aliados para que podáis superarlas juntos.
      - Entrena tu cuerpo. Tu cuerpo es como una piedra en bruto que debe labrarse para alcanzar su máximo potencial.
      - Disciplina tu alma. Deberás hacer acopio de disciplina para superar los defectos que podrían socavar tu gloria y la de tus compañeros.`,
  },
  oath_spells_glory: {
    name: "Conjuros de Juramento",
    description:
      "Obtienes conjuros de juramento en los niveles de paladín indicados. Una vez accedes a un conjuro de juramento, siempre lo tienes preparado. Los conjuros de juramento no cuentan conjuros que puedes preparar cada día. Si consigues un conjuro de juramento que no aparece en la lista de conjuros de paladín, para ti ese conjuro cuenta como un conjuro de paladín.",
  },
  channel_divinity_glory: {
    name: "Canalizar Divinidad",
    description: `Obtienes las siguientes dos opciones de Canalizar Divinidad:
    - Atleta sin Parangón: Como acción adicional, puedes usar tu rasgo Canalizar Divinidad para potenciar tus capacidades atléticas. Durante los siguientes 10 minutos, tendrás ventaja en las pruebas de Fuerza (Atletismo) y Destreza (Acrobacias), podrás cargar, empujar, arrastrar y levantar el doble de peso de lo normal y la distancia de tus saltos de longitud y de altura aumentará en 10 pies (para esta distancia adicional, tendrás que gastar movimiento del modo habitual).
    - Castigo Inspirador: Justo después de infligir daño a una criatura con tu rasgo Castigo Divino, puedes usar Canalizar Divinidad como acción adicional y distribuir puntos de golpe temporales entre las criaturas de tu elección (que puede incluirte a ti) que se encuentren a 30 pies o menos de ti. La cantidad total de puntos de golpe temporales es igual a 2d8 + tu nivel en esta clase, repartidos como tú quieras entre las criaturas elegidas.`,
  },
  aura_of_alacrity: {
    name: "Aura de Celeridad",
    description: `Emanas un aura que os confiere a ti y a tus compañeros una velocidad sobrenatural, lo que os permite atravesar velozmente el campo de batalla en formación. Tu velocidad caminando aumenta en 10 pies. Además, si no estás incapacitado, la velocidad caminando de cualquier aliado que empiece su turno a 5 pies o menos de ti aumentará en 10 pies hasta el final de ese turno. Cuando alcanzas el nivel 18 en esta clase, el alcance del aura aumenta a 10 pies.`,
  },
  glorious_defense: {
    name: "Defensa Gloriosa",
    description: `Puedes convertir la defensa en un ataque súbito. Si una tirada de ataque os impacta a ti o a otra criatura que puedas ver a 10 pies o menos de ti, puedes usar tu reacción para sumar un bonificador a la CA del objetivo contra ese ataque, lo que podría hacer que falle. El bonificador es igual a tu modificador por Carisma (mínimo de +1). Si el ataque falla, como parte de esta reacción podrás hacer un ataque con arma contra el atacante, siempre y cuando esté en el alcance de tu arma.
      Puedes usar este rasgo una cantidad de veces igual a tu modificador por Carisma (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  living_legend: {
    name: "Leyenda Viviente",
    description: `Puedes fortalecerte con las leyendas (ya sean veraces o exageradas) de tus grandes hazañas. Como acción adicional, obtienes los siguientes beneficios, que duran 1 minuto:
      - Tienes ventaja en todas las pruebas de Carisma.
      - Una vez en cada uno de tus turnos, si fallas un ataque con arma, puedes hacer que impacte.
      - Si fallas una tirada de salvación, puedes usar tu reacción para volver a tirar. Deberás usar el resultado de la nueva tirada. 
    Cuando uses esta acción adicional, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes un espacio de conjuro de nivel 5 para volver a usarla.`,
  },
};
