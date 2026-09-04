import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const glory_actions_es: GameLocalizationCategory = {
  channel_divinity_peerless_athlete: {
    name: "Atleta sin Parangón",
    description: `Como acción adicional, puedes usar tu rasgo Canalizar Divinidad para potenciar tus capacidades atléticas. Durante los siguientes 10 minutos, tendrás ventaja en las pruebas de Fuerza (Atletismo) y Destreza (Acrobacias), podrás cargar, empujar, arrastrar y levantar el doble de peso de lo normal y la distancia de tus saltos de longitud y de altura aumentará en 10 pies (para esta distancia adicional, tendrás que gastar movimiento del modo habitual).`,
  },
  channel_divinity_inspiring_smite: {
    name: "Castigo Inspirador",
    description: `Después de infligir daño a una criatura con tu rasgo Castigo Divino, puedes usar Canalizar Divinidad como acción adicional y distribuir puntos de golpe temporales entre las criaturas de tu elección (que puede incluirte a ti) que se encuentren a 30 pies o menos de ti. La cantidad total de puntos de golpe temporales es igual a 2d8 + tu nivel en esta clase, repartidos como tú quieras entre las criaturas elegidas.`,
  },
  glorious_defense: {
    name: "Defensa Gloriosa",
    description: `Si una tirada de ataque te impacta a ti o a otra criatura que puedas ver a 10 pies o menos de ti, puedes usar tu reacción para sumar un bonificador a la CA del objetivo contra ese ataque igual a tu modificador por Carisma (mínimo de +1). Si el ataque falla, como parte de esta reacción podrás hacer un ataque con arma contra el atacante, siempre y cuando esté en el alcance de tu arma.`,
  },
  living_legend: {
    name: "Leyenda Viviente",
    description: `Obtienes los siguientes beneficios durante 1 minuto:
        - Estás bendecido por una presencia sobrenatural, lo que te da ventaja en todas las pruebas de Carisma.
        - Una vez en cada uno de tus turnos, si fallas un ataque con arma, puedes hacer que impacte.
        - Si fallas una tirada de salvación, puedes usar tu reacción para volver a tirar. Deberás usar el resultado de la nueva tirada.`,
  },
  living_legend_precise_attack: {
    name: "Leyenda Viviente: Ataque Certero",
    description: `Cuando falles un ataque con armas, puedes decidir que impacte`,
  },
  living_legend_resilient: {
    name: "Leyenda Viviente: Resiliente",
    description: `Usas tu reacción para volver a hacer una tirada de salvación que hayas fallado. Debes usar el nuevo resultado.`,
  },
};
