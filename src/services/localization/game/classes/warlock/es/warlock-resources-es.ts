import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

const invocations_resources: GameLocalizationCategory = {
  // PHB
  invocation_bewitching_whispers: {
    name: "Susurros Fascinantes",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Compulsión'. Se recarga tras un descanso largo.`,
  },
  invocation_chains_of_carceri: {
    name: "Cadenas de Carceri",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Inmovilizar Monstruo' contra un Celestial, Infernal o Elemental. Los usos contra una misma criatura se recuperan tras un descanso largo.`,
  },
  invocation_dreadful_word: {
    name: "Palabra Aterradora",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Confusión'. Se recarga tras un descanso largo.`,
  },
  invocation_minions_of_chaos: {
    name: "Esbirros del Caos",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Conjurar Elemental'. Se recarga tras un descanso largo.`,
  },
  invocation_mire_the_mind: {
    name: "Confundir la mente",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Ralentizar'. Se recarga tras un descanso largo.`,
  },
  invocation_sculptor_of_flesh: {
    name: "Escultor de Carne",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Polimorfar'. Se recarga tras un descanso largo.`,
  },
  invocation_sign_of_ill_omen: {
    name: "Señal de Mal Agüero",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Imponer Maldición'. Se recarga tras un descanso largo.`,
  },
  invocation_thief_of_five_fates: {
    name: "Ladrón de Cinco Destinos",
    description: `Te permite gastar un espacio de pacto para lanzar el conjuro 'Perdición'. Se recarga tras un descanso largo.`,
  },

  // XGE
  invocation_cloak_of_flies: {
    name: "Capa de Moscas",
    description: `Usado para manifestar un aura que daña a enemigos cercanos y te otroga ventaja en pruebas de intimidación y desventaja en el resto de pruebas de habilidad de Carisma. Se recarga tras un descanso corto o largo.`,
  },
  invocation_eldritch_smite: {
    name: "Castigo Arcano",
    description: `Te permite gastar un espacio de pacto para infligir daño adicional a una criatura y derribarla. Se recupera cada turno.`,
  },
  invocation_ghostly_gaze: {
    name: "Mirada Fantasmal",
    description: `Te permite ver a través de objetos cercanos durante 1 minuto o si rompes concentración. Se recupera tras un descanso corto o largo.`,
  },
  invocation_gift_of_the_depths_water_breathing: {
    name: "Don de las Profundidades",
    description: `Te permite lanzar 'Respiración Bajo el Agua' sin gastar un espacio de conjuro. Se recupera tras un descanso largo.`,
  },
  invocation_grasp_of_hadar: {
    name: "Agarre de Hadar",
    description: `Te permite atraer una criatura que hayas impactado con 'Descarga sobrenatural' 10 pies hacia ti en una línea recta. Se recarga cada turno.`,
  },
  invocation_lance_of_lethargy: {
    name: "Lanza de Letargo",
    description: `Te permite reducir la velocidad de una criatura que hayas impactado con 'Descarga sobrenatural' en 10 pies. Se recarga cada turno.`,
  },
  invocation_tomb_of_levistus: {
    name: "Tumba de Levistus",
    description: `Te permite encerrarte en hielo para protegerte de daño hasta el final de tu siguiente turno.`,
  },
  invocation_trickster_escape: {
    name: "Huida Sagaz",
    description: `Te permite lanzar el conjuro 'Libertad de Movimiento' sin gastar un espacio de conjuro. Se recarga tras un descanso largo.`,
  },

  // TCE
  invocation_bond_of_the_talisman: {
    name: "Vínculo del Talismán",
    description: `Te permite a ti y al portador del talismán (si es diferente de ti) de teletransportarse a la ubicación del otro. Se recupera cuando tú terminas un descanso largo.`,
  },
  invocation_far_scribe_inscribed_names: {
    name: "Escriba Lejano: Nombres Inscritos",
    description: `La cantidad de nombres inscritos en la página otorgada por 'Escriba Lejano'`,
  },
  invocation_gift_of_the_protectors_inscribed_names: {
    name: "Don de los Protectores: Nombres Inscritos",
    description: `La cantidad de nombres inscritos en la página otorgada por 'Don de los Protectores'`,
  },
  invocation_gift_of_the_protectors_trigger: {
    name: "Don de los Protectores",
    description: `La cantidad de veces que puedes evitar que alguien cuyo nombre esté inscrito en la página otorgada por 'Don de los Protectores' caiga inconsciente. Se recupera tras un descanso largo.`,
  },
  invocation_protection_of_the_talisman: {
    name: "Protección del Talismán",
    description: `Permite al portador del talismán añadir un bonus a una tirada de salvación fallida que haya hecho. Se recupera cuando tú terminas un descanso largo.`,
  },
  invocation_undying_servitude: {
    name: "Servidumbre Eterna",
    description: `Te permite lanzar el conjuro 'Animar a los Muertos' sin gastar un espacio de conjuro. Se recarga tras un descanso largo.`,
  },
};

const pact_boon_resources: GameLocalizationCategory = {
  pact_of_the_talisman_aid: {
    name: "Ayuda del Talismán",
    description: `Permite al portador del talismán añadir un bonus a una tirada de salvación fallida que hizo. Se recarga cuando tú terminas un descanso largo.`,
  },
};

export const warlock_resources_es: GameLocalizationCategory = {
  ...subclass_resources,
  ...invocations_resources,
  ...pact_boon_resources,

  pact_slots: {
    name: "Espacios de Pacto",
    description: `Te permiten lanzar conjuros. Todos los espacios son del mismo nivel, comenzando en nivel 1 y subiendo en cada nivel impar de esta clase hasta un nivel máximo de 5. Se recuperan tras un descanso corto.`,
  },
  mystic_arcanum_6: {
    name: "Arcano Místico Nv. 6",
    description: `Te permite lanzar tu conjuro de Arcano Místico de nivel 6. Se recupera tras un descanso largo.`,
  },
  mystic_arcanum_7: {
    name: "Arcano Místico Nv. 7",
    description: `Te permite lanzar tu conjuro de Arcano Místico de nivel 7. Se recupera tras un descanso largo.`,
  },
  mystic_arcanum_8: {
    name: "Arcano Místico Nv. 8",
    description: `Te permite lanzar tu conjuro de Arcano Místico de nivel 8. Se recupera tras un descanso largo.`,
  },
  mystic_arcanum_9: {
    name: "Arcano Místico Nv. 9",
    description: `Te permite lanzar tu conjuro de Arcano Místico de nivel 9. Se recupera tras un descanso largo.`,
  },
  eldritch_master: {
    name: "Maestro Sobrenatural",
    description: `Te permite recuperar todos tus espacios de pacto después de usar 1 minuto para pedir ayuda a tu patrón. Se recupera tras un descanso largo.`,
  },
};
