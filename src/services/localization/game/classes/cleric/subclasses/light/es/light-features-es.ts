import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const light_features_es: GameLocalizationCategory = {
  light_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  bonus_cantrip: {
    name: "Truco Adicional",
    description:
      "Cuando seleccionas este dominio en el nivel 1, ganas el truco luz si es que aún no lo conocías.",
  },
  warding_flare: {
    name: "Fulgor Protector",
    description: `Puedes interponer una luz divina entre ti y un enemigo que te ataque. Cuando eres atacado por una criatura que puedas ver en un rango de 30 pies, puedes usar tu reacción para imponerle desventaja en su tirada de ataque, haciendo que la luz deslumbre al atacante antes de que lleve a cabo su ataque. Un atacante que no pueda ser cegado es inmune a este efecto.
      Puedes usar este rasgo un número de veces igual a tu modificador de Sabiduría (mínimo de 1). Recuperas todos los usos gastados cuando finalizas un descanso prolongado.`,
  },
  channel_divinity_radiance_of_the_dawn: {
    name: "Canalizar Divinidad: Resplandor del Alba",
    description: `Puedes usar tu Canalizar Divinidad para aprovechar la luz solar y hacer desaparecer la oscuridad así como hacer daño radiante a tus enemigos.
      Como acción puedes levantar tu símbolo sagrado para que cualquier oscuridad mágica a 30 pies de ti sea disipada. Adicionalmente, cada criatura hostil a 30 pies de ti debe realizar una tirada de salvación de Constitución. Una criatura sufrirá daño radiante igual a 2d10 + tu nivel de clérigo si falla el tiro de salvación, y la mitad si lo supera. Una criatura con cobertura total hacia ti no es afectada.`,
  },
  improved_flare: {
    name: "Fulgor Mejorado",
    description:
      "A partir del nivel 6 también puedes usar tu Fulgor Protector cuando una criatura en un rango de 30 pies de ti ataque a otra criatura.",
  },
  potent_spellcasting: {
    name: "Lanzamiento de Conjuros Potente",
    description:
      "Agregas tu modificador de Sabiduría al daño que haces con cualquier truco de clérigo.",
  },
  corona_of_light: {
    name: "Corona de Luz",
    description:
      "Puedes usar tu acción para activar un aura de luz solar que dura un minuto o hasta que la desactives, usando otra acción. Emites luz brillante en un radio de 60 pies y luz tenue en un radio de 30 pies más allá. Tus enemigos en la luz brillante tienen desventaja en las tiradas de salvación contra cualquier conjuro que haga daño radiante o de fuego.",
  },
};
