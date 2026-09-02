import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scribes_actions_es: GameLocalizationCategory = {
  wizardly_quill_create: {
    name: "Crear Pluma Mágica",
    description: `Creas mágicamente una pluma Diminuta en tu mano libre. Esta pluma mágica tiene las siguientes propiedades:
        - No necesita tinta. Cuando escribes con ella, genera tinta del color que elijas en la superficie de escritura.
        - Si usas la pluma para transcribir un conjuro, el tiempo que debes pasar copiándolo en tu libro de conjuros es igual a 2 minutos por nivel de conjuro.
        - Puedes borrar todo lo que escribas con la pluma si la sacudes sobre el texto como acción adicional, siempre que dicho texto esté a 5 pies o menos de ti.
        Esta pluma desaparece si creas otra o si mueres.`,
  },
  awakened_spellbook_swap_damage_type: {
    name: "Cambiar Tipo de Daño de Conjuro",
    description: `Sustituyes el daño de un conjuro de mago que lances usando un espacio de conjuro por otro tipo que aparezca en otro conjuro de tu libro de conjuros y que es del mismo nivel que el espacio de conjuro gastado.`,
  },
  awakened_spellbook_fast_ritual: {
    name: "Ritual Acelerado",
    description: `Lanzas un conjuro de mago como ritual pero usando el tiempo de lanzamiento normal del conjuro.`,
  },
  manifest_mind_summon: {
    name: "Manifestar Mente: Invocar",
    description: `Mientras tengas tu Libro de Conjuros Despertado contigo, invocas una mente espectral diminuta que levitará sobre un espacio sin ocupar de tu elección a 60 pies o menos de ti. La mente espectral es intangible y no ocupa su espacio, y proyecta una luz tenue en un radio de 10 pies. Adopta el aspecto de un tomo fantasmal, una cascada de texto o un erudito del pasado (a tu elección).
        Mientras está manifestada, la mente espectral puede oír y ver, y tiene visión en la oscuridad con un alcance de 60 pies. La mente puede compartir contigo telepáticamente lo que ve o escucha (no requiere acción).
        La mente espectral deja de manifestarse si está en algún momento a más de 300 pies de distancia de ti, si alguien lanza Disipar magia sobre ella, si el Libro de Conjuros Despertado es destruido, si mueres o si la descartas como acción adicional.`,
  },
  manifest_mind_move: {
    name: "Manifestar Mente: Mover",
    description: `Haces que la mente espectral levite hasta 30 pies hasta un espacio sin ocupar que tú o ella podáis ver. Puede atravesar criaturas, pero no objetos.`,
  },
  manifest_mind_dismiss: {
    name: "Manifestar Mente: Disipar",
    description: `Disipas la mente espectral.`,
  },
  manifest_mind_cast_through: {
    name: "Manifestar Mente: Lanzamiento Lejano",
    description: `En tu turno, lanzas un conjuro de mago como si estuvieses en el espacio de la mente espectral en vez de en el tuyo, usando sus sentidos.`,
  },
  master_scrivener: {
    name: "Maestro Escribiente",
    description: `Creas un pergamino de conjuro con un conjuro de nivel 1 o 2 de tu Libro de Conjuros Despertado y que tome una acción, el cual es lanzado a un nivel superior de lo normal. Solo tú puedes usar el pergamino. El conjuro se desvanece del pergamino cuando lo lanzas o tras finalizar tu siguiente descanso largo.`,
  },
  one_with_the_word: {
    name: "Comunión con la Palabra",
    description: `Mientras tu mente espectral esté manifestada, impides todo el daño de una instancia. Luego, tu libro de conjuros perderá temporalmente los conjuros de tu elección que tengan un nivel de conjuro combinado igual a 3d6 o superior.
        Hasta que finalices 1d6 descansos largos, serás incapaz de lanzar los hechizos perdidos, aunque los encuentres en un pergamino o en otro libro de conjuros. Tras finalizar la cantidad de descansos necesaria, los conjuros reaparecerán en el libro de conjuros.`,
  },
};
