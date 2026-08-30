import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fathomless_features_es: GameLocalizationCategory = {
  gift_of_the_sea: {
    name: "Don de los Mares",
    description: `Obtienes una velocidad nadando de 40 pies y puedes respirar bajo el agua.`,
  },
  tentacle_of_the_deeps: {
    name: "Tentáculo de las Profundidades",
    description: `Puedes invocar mágicamente un tentáculo espectral que ataque a tus enemigos. Como acción adicional, creas un tentáculo de 10 pies de largo en un punto que puedas ver a 60 pies o menos de ti. El tentáculo dura 1 minuto o hasta que utilices este rasgo para crear otro tentáculo.
      - Cuando crees el tentáculo, podrás hacer un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre a 10 pies o menos de él. Si impacta, el objetivo recibe 1d8 de daño de frío y su velocidad se reduce en 10 pies hasta el principio de tu siguiente turno. Cuando alcanzas el nivel 10 de esta clase, el daño adicional aumenta a 2d8.
      - Como acción adicional durante tu turno, puedes mover el tentáculo hasta 30 pies y repetir el ataque.
      - Puedes invocar el tentáculo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  oceanic_soul: {
    name: "Alma Oceánica",
    description: `You are now even more at home in the depths. You gain resistance to cold damage. In addition, when you are fully submerged, any creature that is also fully submerged can understand your speech, and you can understand theirs.`,
  },
  guardian_coil: {
    name: "Bucle Guardián",
    description: `Your Tentacle of the Deeps can defend you and others, interposing itself between them and harm. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by 1d8. When you reach 10th level in this class, the damage reduced by the tentacle increases to 2d8.`,
  },
  grasping_tentacles: {
    name: "Tentáculos Prensiles",
    description: `You learn the spell Evard's Black Tentacles. It counts as a warlock spell for you, but it doesn't count against the number of spells you know. You can also cast it once without using a spell slot, and you regain the ability to do so when you finish a long rest.
      Whenever you cast this spell, your patron's magic bolsters you, granting you a number of temporary hit points equal to your warlock level. Moreover, damage can't break your concentration on this spell.`,
  },
  fathomless_plunge: {
    name: "Zambullida Insondable",
    description: `You can magically open temporary conduits to watery destinations. As an action, you can teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 30 feet of it, each of you appearing in an unoccupied space within 30 feet of the others.
      Once you use this feature, you can't use it again until you finish a short or long rest.`,
  },
};
