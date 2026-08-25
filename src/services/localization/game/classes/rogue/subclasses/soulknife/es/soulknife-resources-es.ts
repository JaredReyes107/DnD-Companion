import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const soulknife_resources_es: GameLocalizationCategory = {
  psionic_energy_dice: {
    name: "Dados de Energía Psiónica",
    description: `Se usan para alimentar tus habilidades psiónicas. Comienzan como d6 a nivel 3, y el tamaño del dado aumenta cada vez que incrementa tu bonificador por competencia, hasta un máximo de d12 a nivel 17. Recuperas todos tras un descanso largo.`,
  },
  psionic_energy_die_recover: {
    name: "Recuperar Dado de Energía Psiónica",
    description: `Recuperas un dado de Energía Psiónica gastado. Recuperas las cargas de esta habilidad tras un descanso corto o largo.`,
  },
  psychic_whispers: {
    name: "Susurros Psíquicos",
    description: `Te permite establecer comunicación telepática con otras criaturas. Si no tienes cargas, puedes usar 1 dado de energía psiónica en su lugar. Se recarga tras un descanso largo.`,
  },
  psychic_veil: {
    name: "Velo Psíquico",
    description: `Te permite volverte invisible durante 1 hora.  Si no tienes cargas, puedes usar 1 dado de energía psiónica en su lugar. Se recarga tras un descanso largo.`,
  },
  rend_mind: {
    name: "Desgarro Mental",
    description: `Te permite tratar de aturdir a un enemigo con tus hojas psíquicas. Si no tienes cargas, puedes usar 3 dados de energía psiónica en su lugar. Se recarga tras un descanso largo.`,
  },
};
