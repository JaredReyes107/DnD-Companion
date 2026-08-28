import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

const invocations_actions: GameLocalizationCategory = {
  // PHB
  invocation_armor_of_shadows: {
    name: "Capa de Sombras",
    description: `Lanzar 'Armadura de Mago' sobre ti mismo a voluntad, sin gastar ni espacios de conjuro ni componentes.`,
  },
  invocation_ascendant_step: {
    name: "Paso Ascendente",
    description: `Lanzas 'Levitar' sobre ti mismo a voluntad, sin gastar ni espacios de conjuro ni componentes.`,
  },
  invocation_beast_speech: {
    name: "Hablar con la Bestia",
    description: `Lanzas 'Hablar con los animales' a voluntad sin gastar un espacio de conjuro.`,
  },
  invocation_bewitching_whispers: {
    name: "Susurros Fascinantes",
    description: `Lanzas 'Compulsión' una vez usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que termines un descanso breve.`,
  },
  invocation_book_of_ancient_secrets_inscribe: {
    name: "Libro de Secretos Antiguos: Escribir",
    description: `Cuando encuentres un conjuro ritual, puedes añadirlo si su nivel es igual o menor a la mitad de tu nivel de brujo (redondeando hacia arriba) y puedes dedicar tiempo a transcribirlo. Por cada nivel del conjuro, el proceso de transcripción dura 2 horas y cuesta 50 po debido a las extrañas tintas que se necesitan para escribirlo.`,
  },
  invocation_chains_of_carceri: {
    name: "Cadenas de Carceri",
    description: `Lanzas 'Inmovilizar Monstruo' a voluntad contra un celestial, infernal o elemental, sin gastar ni espacio de conjuro ni componentes materiales`,
  },
  invocation_dreadful_word: {
    name: "Palabra Aterradora",
    description: `Lanzas 'Confusión' una vez usando un espacio de conjuro de brujo.`,
  },
  invocation_eldritch_sight: {
    name: "Visión Sobrenatural",
    description: `Lanzas 'Detectar Magia' a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_fiendish_vigor: {
    name: "Vigor Infernal",
    description: `Lanzas 'Falsa Vida' sobre ti mismo a voluntad como si fuera un conjuro de nivel 1, sin gastar ni espacios de conjuro ni componentes materiales.`,
  },
  invocation_gaze_of_two_minds: {
    name: "Mirada de Dos Mentes",
    description: `Tocas a un humanoide voluntario y percibir a través de sus sentidos hasta el final de tu siguiente turno. Siempre y cuando la criatura esté en el mismo plano de existencia que tú, en los turnos sucesivos puedes usar tu acción para mantener esta conexión y extender la duración hasta el final de tu siguiente turno. Mientras percibas a través de los sentidos de otra criatura, te beneficias de cualquier sentido especial que esta posea, y estás cegado y ensordecido respecto a lo que te rodea.`,
  },
  invocation_lifedrinker: {
    name: "Bebedor de Vida",
    description: `Cuando golpeas a una criatura con tu arma de pacto, la criatura recibe daño necrótico adicional igual a tu modificador por Carisma (mínimo 1).`,
  },
  invocation_mask_of_many_faces: {
    name: "Máscara de los Mil Rostros",
    description: `Lanzas 'Disfrazarse' a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_master_of_myriad_forms: {
    name: "Maestro de las Mil Formas",
    description: `Lanzas 'Alterar el Propio Aspecto', sin gastar un espacio de conjuro.`,
  },
  invocation_minions_of_chaos: {
    name: "Esbirros del Caos",
    description: `Lanzas 'Conjurar Elemental' una vez usando un espacio de conjuro de brujo.`,
  },
  invocation_mire_the_mind: {
    name: "Confundir la Mente",
    description: `Lanzas 'Ralentizar' una vez usando un espacio de conjuro de brujo.`,
  },
  invocation_misty_visions: {
    name: "Visiones Nubladas",
    description: `Lanzas 'Imagen Silenciosa' a voluntad, sin gastar ni un espacio de conjuro ni componentes materiales.`,
  },
  invocation_one_with_shadows: {
    name: "Uno con las Sombras",
    description: `Cuando estás en un área de luz tenue o de oscuridad, te haces invisible hasta que te muevas, realices una acción o hagas una reacción.`,
  },
  invocation_otherworldly_leap: {
    name: "Salto de Otro Mundo",
    description: `Lanzas 'Salto' sobre ti mismo a voluntad, sin gastar ni un espacio de conjuro ni componentes materiales.`,
  },
  invocation_sculptor_of_flesh: {
    name: "Escultor de Carne",
    description: `Lanzas 'Polimorfar' una vez usando un espacio de conjuro de brujo.`,
  },
  invocation_sign_of_ill_omen: {
    name: "Señal de Mal Agüero",
    description: `Lanzas 'Imponer Maldición' usando un espacio de conjuro de brujo.`,
  },
  invocation_thief_of_five_fates: {
    name: "Ladrón de Cinco Destinos",
    description: `Lanzas 'Perdición' una vez usando un espacio de conjuro de brujo.`,
  },
  invocation_thirsting_blade: {
    name: "Filo Sediento",
    description: `Atacas con tu arma de pacto dos veces en lugar de una cuando realices la acción de ataque durante tu turno.`,
  },
  invocation_visions_of_distant_realms: {
    name: "Visiones de Reinos Lejanos",
    description: `Lanzas 'Ojo Arcano' a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_whispers_of_the_grave: {
    name: "Susurros de la Tumba",
    description: `Lanzas 'Hablar con los Muertos' a voluntad, sin gastar un espacio de conjuro.`,
  },

  // XGE
  invocation_cloak_of_flies: {
    name: "Capa de Moscas",
    description: `Te rodeas de un aura mágica que cubre un área de 5 pies alrededor de ti en todas direcciones, pero no atraviesa la cobertura completa. Dura hasta que quedes incapacitado o la des por terminada usando una acción adicional. El aura te otorga ventaja en las pruebas de Carisma (Intimidación) y desventaja en todo el resto de pruebas de Carisma. Cualquier otra criatura que comience su turno en el área recibe tanto daño de veneno como tu modificador de Carisma (mínimo 0 de daño).`,
  },
  invocation_eldritch_smite: {
    name: "Castigo Arcano",
    description: `Cuando impactas a una criatura con tu arma de pacto, puedes utilizar un espacio de conjuro de brujo para infligir 1d8 de daño de fuerza adicional, más 1d8 por cada nivel del espacio de conjuro empleado. Además, si el objetivo es de tamaño Enorme o menor, puedes derribarlo.`,
  },
  invocation_ghostly_gaze: {
    name: "Mirada Fantasmal",
    description: `Durante 1 minuto y mientras mantengas concentración, obtienes la habilidad de ver a través de objetos sólidos situados hasta a 30 pies de distancia. Dentro de ese alcance, además, tienes visión en la oscuridad si no la tenías ya. Durante ese tiempo, percibes los objetos como imágenes fantasmales, transparentes.`,
  },
  invocation_gift_of_the_depths: {
    name: "Don de las Profundidades",
    description: `Lanzas 'Respirar Bajo el Agua' sin gastar un espacio de conjuro.`,
  },
  invocation_gift_of_the_ever_living_ones: {
    name: "Don de los Siempre Vivos",
    description: `Todos los dados que se tiren para recuperar tus puntos de golpe se toman como si hubieran obtenido el resultado máximo mientras tu familiar esté a 100 pies o menos de ti.`,
  },
  invocation_grasp_of_hadar: {
    name: "Agarre de Hadar",
    description: `Mueves en línea recta 10 pies hacia ti a un objetivo que hayas impactado con tu 'Descarga Sobrenatural'.`,
  },
  invocation_lance_of_lethargy: {
    name: "Lanza de Letargo",
    description: `Reduces la velocidad en 10 pies de una criatura que impactes con tu 'Descarga Sobrenatural' hasta el final de tu próximo turno.`,
  },
  invocation_maddening_hex: {
    name: "Maldición Enloquecedora",
    description: `Infliges daño psíquico igual a tu modificador de Carisma (mínimo 1 de daño) a un objetivo Maldito a 30 pies de ti que puedas ver y a cada criatura de tu elección que puedas ver y esté a 5 pies o menos de él. Un objetivo 'maldito' es una criatura afectada por tu conjuro maleficio o por uno de tus rasgos de Brujo, como la Marca del Mal Augurio o la Maldición del Filo Maléfico.`,
  },
  invocation_relentless_hex: {
    name: "Maldición Implacable",
    description: `Te teletransportar hasta 30 pies a un  espacio libre que puedas ver y se encuentre a 5 pies o menos de un objetivo maldito que puedas ver. Un objetivo 'maldito' es una criatura afectada por tu conjuro maleficio o por uno de tus rasgos de Brujo, como la Marca del Mal Augurio o la Maldición del Filo Maléfico.`,
  },
  invocation_shroud_of_shadow: {
    name: "Sudario de Sombras",
    description: `Lanzas 'Invisibilidad' a voluntad, sin utilizar un espacio de conjuro.`,
  },
  invocation_tomb_of_levistus: {
    name: "Tumba de Levistus",
    description: `Como reacción cuando recibes daño, puedes encerrarte en un bloque de hielo, que se derretirá al final de tu próximo turno. Obtienes 10 puntos de golpe temporales por cada nivel de brujo, que absorben todo el daño que sea posible del ataque. Inmediatamente después de recibir el daño, te vuelves vulnerable al daño de fuego, tu velocidad se reduce a 0 y quedas incapacitado. Estos efectos, incluyendo cualesquiera puntos de golpe temporales que quedaran, terminan cuando el hielo se derrita.`,
  },
  invocation_trickster_escape: {
    name: "Huida Sagaz",
    description: `Lanzas 'Libertad de Movimiento' sobre ti mismo sin utilizar un espacio de conjuro.`,
  },

  // TCE
  invocation_bond_of_the_talisman: {
    name: "Vínculo del Talismán",
    description: `Mientras alguien diferente a ti lleve puesto tu talismán, puedes usar tu acción para teletransportarte al espacio sin ocupar más cercano al portador, siempre que ambos estéis en el mismo plano de existencia. El portador de tu talismán puede hacer lo mismo, usando su acción para teletransportarse hasta donde tú estés.`,
  },
  invocation_far_scribe_inscribe: {
    name: "Escriba Lejano: Escribir",
    description: `Con tu permiso, una criatura puede usar su acción para escribir su nombre la página otorgada por 'Escriba Lejano'.`,
  },
  invocation_far_scribe_send: {
    name: "Escriba Lejano: Recado",
    description: `Lanzas el conjuro 'Recado' con objetivo una criatura cuyo nombre esté en la página página otorgada por 'Escriba Lejano', sin usar un espacio de conjuro y sin gastar componentes materiales. Para ello, debes escribir el mensaje en la página. El objetivo escuchará el mensaje en su mente y, si responde, dicho mensaje aparecerá en la página, no en tu mente. Las palabras desaparecerán al cabo de 1 minuto.`,
  },
  invocation_far_scribe_erase: {
    name: "Escriba Lejano: Borrar",
    description: `Tocas y borras mágicamente un nombre de la página otorgada por 'Escriba Lejano'.`,
  },
  invocation_gift_of_the_protectors_inscribe: {
    name: "Don de los Protectores: Escribir",
    description: `Con tu permiso, una criatura puede usar su acción para escribir su nombre la página otorgada por 'Don de los Protectores'.`,
  },
  invocation_gift_of_the_protectors_protect: {
    name: "Don de los Protectores: Proteger",
    description: `Cuando los puntos de golpe de cualquier criatura cuyo nombre esté en la página se reduzcan a 0, pero no muera, en vez de eso pasará a tener 1 punto de golpe.`,
  },
  invocation_gift_of_the_protectors_erase: {
    name: "Don de los Protectores: Borrar",
    description: `Tocas y borras mágicamente un nombre de la página otorgada por 'Don de los Protectores'.`,
  },
  invocation_investment_of_the_chain_master_attack: {
    name: "Inversión del Amo de las Cadenas: Atacar",
    description: `Ordenas al familiar que realice la acción de Atacar.`,
  },
  invocation_investment_of_the_chain_master_defend: {
    name: "Inversión del Amo de las Cadenas: Defender",
    description: `Cuando el familiar recibe daño, puedes usar tu reacción para otorgarle resistencia contra ese daño.`,
  },
  invocation_protection_of_the_talisman: {
    name: "Protección del Talismán",
    description: `Cuando el portador de tu talismán falla una tirada de salvación, puede añadir un d4 a la tirada, lo que puede convertirla en un éxito.`,
  },
  invocation_rebuke_of_the_talisman: {
    name: "Repulsión del Talismán",
    description: `Cuando el portador de tu talismán recibe el impacto de un atacante que puedas ver a 30 pies o menos de ti, puedes usar tu reacción para infligir un daño psíquico al atacante igual a tu bonificador por competencia y empujarlo para alejarlo hasta a 10 pies del portador del talismán.`,
  },
  invocation_undying_servitude: {
    name: "Servidumbre Eterna",
    description: `Lanzas 'Animar a los Muertos' sin gastar un espacio de conjuro.`,
  },
};

const boon_actions: GameLocalizationCategory = {
  pact_of_the_blade_summon: {
    name: "Invocar Arma del Pacto",
    description: `Creas un arma de pacto en tu mano vacía. Puedes elegir qué forma adopta esta arma cuerpo a cuerpo cada vez que la crees. Mientras la empuñes serás competente con ella. Esta arma cuenta como mágica a efectos de superar las resistencias e inmunidades a ataques y daño no mágicos.
      Esta arma de pacto desaparecerá si se encuentra a más de 5 pies de distancia de ti durante al menos 1 minuto. También desaparecerá si usas este rasgo otra vez. si haces desaparecer el arma voluntariamente (no es necesaria acción) o si mueres.`,
  },
  pact_of_the_blade_bind: {
    name: "Vincular Arma del Pacto",
    description: `Transformas un arma mágica en tu arma de pacto llevando a cabo un ritual especial mientras la empuñas. Para ejecutar este ritual necesitas 1 hora, que puede ser la de un descanso corto. Puedes hacer desaparecer el arma, depositándola en un espacio extradimensional, y a partir de ese momento será esta arma la que aparezca cuando crees tu arma de pacto. Los artefactos o armas conscientes no pueden ser afectados de esta forma. 
      Dicha arma mágica dejará de ser tu arma de pacto si mueres, si ejecutas el ritual de 1 hora con un arma distinta o si usas el ritual de l hora para romper tu vínculo con ella. El arma aparecerá a tus pies si se encontraba en el espacio extradimensional cuando se rompe el vínculo.`,
  },
  pact_of_the_chain_find_familiar: {
    name: "Pacto de la Cadena: Encontrar Familiar",
    description: `Lanzas el conjuro 'Encontrar Familiar'. Además de poder elegir una de las formas habituales para tu familiar, puedes optar por una de las siguientes formas especiales: diablillo, duende, pseudodragón o quasit.`,
  },
  pact_of_the_chain_trade_attack: {
    name: "Pacto de la Cadena: Atacar",
    description: `Cuando realizas la acción de ataque, puedes renunciar a uno de tus propios ataques para permitirle a tu familiar que realice un ataque por sí mismo con su reacción.`,
  },
  pact_of_the_tome_replace: {
    name: "Pacto del Tomo: Reemplazar Libro",
    description: `Realizas una ceremonia de 1 hora para recibir un libro de reemplazo de tu patrón. Esta ceremonia se puede llevar a cabo durante un descanso corto o largo y destruye el libro anterior.`,
  },

  pact_of_the_talisman_aid: {
    name: "Ayuda del Talismán",
    description: `Si el portador falla una prueba de característica, puede añadir 1d4 a la tirada, lo que puede convertirla en un éxito.`,
  },
  pact_of_the_talisman_replace: {
    name: "Reemplazar Talismán",
    description: `Realizas una ceremonia de 1 hora para recibir un talismán de reemplazo de tu patrón. Esta ceremonia se puede llevar a cabo durante un descanso corto o largo y destruye el amuleto anterior.`,
  },
};

export const warlock_actions_es: GameLocalizationCategory = {
  ...subclass_actions,
  ...invocations_actions,
  ...boon_actions,

  invocation_eldritch_master: {
    name: "Maestro Sobrenatural",
    description: `Dedicas 1 minuto a implorar ayuda a tu patrón para recuperar todos los espacios de conjuro que hayas gastado de tu rasgo Magia del pacto.`,
  },
};
