import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { archfey_features_es } from "../subclasses/archfey/es/archfey-features-es";
import { fiend_features_es } from "../subclasses/fiend/es/fiend-features-es";
import { great_old_one_features_es } from "../subclasses/great-old-one/es/great-old-one-features-es";

import { celestial_features_es } from "../subclasses/celestial/es/celestial-features-es";
import { hexblade_features_es } from "../subclasses/hexblade/es/hexblade-features-es";

import { fathomless_features_es } from "../subclasses/fathomless/es/fathomless-features-es";
import { genie_features_es } from "../subclasses/genie/es/genie-features-es";

const subclass_features: GameLocalizationCategory = {
  // PHB
  ...archfey_features_es,
  ...fiend_features_es,
  ...great_old_one_features_es,

  // XGE
  ...celestial_features_es,
  ...hexblade_features_es,

  // TCE
  ...fathomless_features_es,
  ...genie_features_es,
};

const boon_actions: GameLocalizationCategory = {
  pact_of_the_blade: {
    name: "Pacto del Filo",
    description: `Puedes usar tu acción para crear un arma de pacto en tu mano vacía. Puedes elegir qué forma adopta esta arma cuerpo a cuerpo cada vez que la crees. Mientras la empuñes serás competente con ella. Esta arma cuenta como mágica a efectos de superar las resistencias e inmunidades a ataques y daño no mágicos.
      Tu arma de pacto desaparecerá si se encuentra a más de 5 pies de distancia de ti durante al menos 1 minuto. También desaparecerá si usas este rasgo otra vez. si haces desaparecer el arma voluntariamente (no es necesaria acción) o si mueres.
      Puedes transformar un arma mágica en tu arma de pacto llevando a cabo un ritual especial mientras la empuñas. Para ejecutar este ritual necesitas 1 hora, que puede ser la de un descanso corto. Puedes hacer desaparecer el arma, depositándola en un espacio extradimensional, y a partir de ese momento será esta arma la que aparezca cuando crees tu arma de pacto. Los artefactos o armas conscientes no pueden ser afectados de esta forma. Además, dicha arma mágica dejará de ser tu arma de pacto si mueres, si ejecutas el ritual de 1 hora con un arma distinta o si usas el ritual de l hora para romper tu vínculo con ella. El arma aparecerá a tus pies si se encontraba en el espacio extradimensional cuando se rompe el vínculo.`,
  },
  pact_of_the_chain: {
    name: "Pacto de la Cadena",
    description: `Aprendes el conjuro 'Encontrar Familiar', que puedes lanzar como un ritual. Este conjuro no cuenta como conjuro conocido.
      Cuando lanzas el conjuro, puedes elegir una de las formas habituales para tu familiar o una de las siguientes formas especiales: diablillo, duende, pseudodragón o quasit.
      Además, cuando realizas la acción de ataque, puedes renunciar a uno de tus propios ataques para permitirle a tu familiar que realice un ataque por sí mismo con su reacción.`,
  },
  pact_of_the_tome: {
    name: "Pacto del Tomo",
    description: `Tu patrón te da un grimorio titulado Libro de las sombras. Cuando consigas este rasgo, elige tres trucos de cualquier lista de conjuros (no es necesario que sean de la misma lista). Mientras el libro esté en tu poder, puedes lanzar esos trucos a voluntad y no cuentan como trucos conocidos. Aunque no aparezcan en la lista de conjuros de brujo, para ti son conjuros de brujo.
      Si pierdes el Libro de las sombras, puedes llevar a cabo una ceremonia de 1 hora para que tu patrón te envíe un repuesto. Esta ceremonia se puede realizar durante un descanso breve o prolongado`,
  },

  pact_of_the_talisman: {
    name: "Pacto del Talismán",
    description: `Tu patrón te da un amuleto, un talismán que puede ayudar al portador en momentos de gran necesidad. Si el portador falla una prueba de característica, puede añadir 1d4 a la tirada, lo que puede convertirla en un éxito. Este beneficio se puede usar una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.
      Si pierdes el talismán, puedes realizar una ceremonia de 1 hora para recibir uno de sustitución de tu patrón. Esta ceremonia se puede llevar a cabo durante un descanso corto o largo y destruye el amuleto anterior. El talismán se convierte en cenizas cuando mueres.`,
  },
};

const invocations: GameLocalizationCategory = {
  // PHB
  invocation_agonizing_blast: {
    name: "Descarga Agonizante",
    description: `Cuando lanzas 'Descarga Sobrenatural', añades tu modificar de Carisma al daño que hace cuando impacta.`,
  },
  invocation_armor_of_shadows: {
    name: "Capa de Sombras",
    description: `Puedes lanzar 'Armadura de Mago' sobre ti mismo a voluntad, sin gastar ni espacios de conjuro ni componentes.`,
  },
  invocation_ascendant_step: {
    name: "Paso Ascendente",
    description: `Puedes lanzar Levitar sobre ti mismo a voluntad, sin gastar ni espacios de conjuro ni componentes.`,
  },
  invocation_beast_speech: {
    name: "Hablar con la Bestia",
    description: `Puedes lanzar 'Hablar con los Animales' a voluntad sin gastar un espacio de conjuro.`,
  },
  invocation_beguiling_influence: {
    name: "Influencia Seductora",
    description: `Consigues competencia en las habilidades de Engañar y Persuasión.`,
  },
  invocation_bewitching_whispers: {
    name: "Susurros Fascinantes",
    description: `Puedes lanzar 'Compulsión' una vez usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que termines un descanso breve.`,
  },
  invocation_book_of_ancient_secrets: {
    name: "Libro de Secretos Antiguos",
    description: `Ahora puedes escribir rituales en tu Libro de las sombras. Elige dos conjuros de nivel 1 que tengan la etiqueta «ritual» de cualquier lista de conjuros (no es necesario que sean de la misma lista). Los conjuros aparecen en el libro y no cuentan como conjuros conocidos. Sosteniendo el Libro de las sombras puedes lanzar los conjuros elegidos como si fueran rituales. Solo puedes lanzarlos como rituales a menos que los hayas aprendido por otros medios. También puedes lanzar los conjuros de brujo que conozcas como si fueran un ritual si tienen la etiqueta «ritual».
      Durante tus aventuras puedes añadir más conjuros rituales a tu Libro de las sombras: cuando encuentres un conjuro de este tipo, puedes añadirlo si su nivel es igual o menor a la mitad de tu nivel de brujo (redondeando hacia arriba) y puedes dedicar tiempo a transcribirlo. Por cada nivel del conjuro, el proceso de transcripción dura 2 horas y cuesta 50 po debido a las extrañas tintas que se necesitan para escribirlo.`,
  },
  invocation_chains_of_carceri: {
    name: "Cadenas de Carceri",
    description: `Si tu objetivo es un celestial, un infernal o un elemental, puedes lanzar Inmovilizar monstruo a voluntad, sin gastar ni espacio de conjuro ni componentes materiales. Debes terminar un descanso prolongado antes de poder usar esta invocación sobre la misma criatura.`,
  },
  invocation_devil_sight: {
    name: "Visión del Diablo",
    description: `Puedes ver con normalidad en la oscuridad, tanto mágica como no mágica, hasta 120 pies de distancia.`,
  },
  invocation_dreadful_word: {
    name: "Palabra Aterradora",
    description: `Puedes lanzar 'Confusión' una vez usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que no termines un descanso prolongado.`,
  },
  invocation_eldritch_sight: {
    name: "Visión Sobrenatural",
    description: `Puedes lanzar 'Detectar Magia' a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_eldritch_spear: {
    name: "Lanza Sobrenatural",
    description: `Cuando lances 'Descarga Sobrenatural', su alcance es de 300 pies.`,
  },
  invocation_eyes_of_the_rune_keeper: {
    name: "Ojos del Guardián de las Runas",
    description: `Puedes leer todo tipo de escritura.`,
  },
  invocation_fiendish_vigor: {
    name: "Vigor Infernal",
    description: `Puedes lanzar 'Falsa Vida' sobre ti mismo a voluntad como si fuera un conjuro de nivel 1, sin gastar ni espacios de conjuro ni componentes materiales.`,
  },
  invocation_gaze_of_two_minds: {
    name: "Mirada de Dos Mentes",
    description: `Adquisición: Selección
      Puedes usar tu acción para tocar a un humanoide voluntario y percibir a través de sus sentidos hasta el final de tu siguiente turno. Siempre y cuando la criatura esté en el mismo plano de existencia que tú, en los turnos sucesivos puedes usar tu acción para mantener esta conexión y extender la duración hasta el final de tu siguiente turno. Mientras percibas a través de los sentidos de otra criatura, te beneficias de cualquier sentido especial que esta posea, y estás cegado y ensordecido respecto a lo que te rodea.`,
  },
  invocation_lifedrinker: {
    name: "Bebedor de Vida",
    description: `Cuando golpeas a una criatura con tu arma de pacto, la criatura recibe daño necrótico adicional igual a tu modificador por Carisma (mínimo 1).`,
  },
  invocation_mask_of_many_faces: {
    name: "Máscara de los Mil Rostros",
    description: `Puedes lanzar 'Disfrazarse' a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_master_of_myriad_forms: {
    name: "Maestro de las Mil Formas",
    description: `Puedes lanzar 'Alterar el Propio Aspecto' a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_minions_of_chaos: {
    name: "Esbirros del Caos",
    description: `Puedes lanzar 'Conjurar Elemental' una vez usando un espacio de conjuro de brujo. No puedes hacerlo otra vez hasta que no termines un descanso prolongado.`,
  },
  invocation_mire_the_mind: {
    name: "Confundir la Mente",
    description: `Puedes lanzar 'Ralentizar' una vez usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que no termines un descanso prolongado.`,
  },
  invocation_misty_visions: {
    name: "Visiones Nubladas",
    description: `Puedes lanzar 'Imagen Silenciosa' a voluntad, sin gastar ni un espacio de conjuro ni componentes materiales.`,
  },
  invocation_one_with_shadows: {
    name: "Uno con la Sombra",
    description: `Cuando estás en un área de luz tenue o de oscuridad, puedes usar una acción para hacerte invisible hasta que te muevas, realices una acción o hagas una reacción.`,
  },
  invocation_otherworldly_leap: {
    name: "Salto de Otro Mundo",
    description: `Puedes lanzar Salto sobre ti mismo a voluntad, sin gastar ni un espacio de conjuro ni componentes materiales.`,
  },
  invocation_repelling_blast: {
    name: "Descarga Ahuyentadora",
    description: `Cuando impactes a una criatura con Descarga sobrenatural, puedes empujarla para alejarla hasta 10 pies de ti en línea recta.`,
  },
  invocation_sculptor_of_flesh: {
    name: "Escultor de Carne",
    description: `Puedes lanzar Polimorfar una vez usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que no termines un descanso prolongado.`,
  },
  invocation_sign_of_ill_omen: {
    name: "Señal de Mal Agüero",
    description: `Puedes lanzar el conjuro Imponer maldición usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que no termines un descanso prolongado.`,
  },
  invocation_thief_of_five_fates: {
    name: "Ladrón de Cinco Destinos",
    description: `Puedes lanzar Perdición una vez usando un espacio de conjuro de brujo. No puedes volver a hacerlo hasta que no termines un descanso prolongado.`,
  },
  invocation_thirsting_blade: {
    name: "Filo Sediento",
    description: `Puedes atacar con tu arma de pacto dos veces en lugar de una cuando realices la acción de ataque durante tu turno.`,
  },
  invocation_visions_of_distant_realms: {
    name: "Visiones de Reinos Lejanos",
    description: `Puedes lanzar 'Ojo Arcano' sin gastar un espacio de conjuro.`,
  },
  invocation_voice_of_the_chain_master: {
    name: "Voz del Amo de la Cadena",
    description: `Puedes comunicarte telepáticamente con tu familiar y percibir a través de sus sentidos siempre y cuando estéis en el mismo plano de existencia. Además, mientras percibes a través de los sentidos de tu familiar, también puedes hablar a través de él con tu propia voz, incluso si tu familiar normalmente no puede hablar`,
  },
  invocation_whispers_of_the_grave: {
    name: "Susurros de la Tumba",
    description: `Puedes lanzar Hablar con los muertos a voluntad, sin gastar un espacio de conjuro.`,
  },
  invocation_witch_sight: {
    name: "Visión de Bruja",
    description: `Puedes ver la forma verdadera de cualquier cambiaformas o criatura oculta mediante magia de ilusión o transmutación mientras se encuentre a menos de 30 pies de ti y en tu línea de visión.`,
  },

  // XGE
  invocation_aspect_of_the_moon: {
    name: "Aspecto de la Luna",
    description: `Ya no necesitas dormir y no pueden forzarte a hacerlo de ninguna manera. Para conseguir los beneficios de un descanso largo, puedes pasar 8 horas realizando actividades poco intensas, como leer tu Libro de las Sombras o montar guardia.`,
  },
  invocation_cloak_of_flies: {
    name: "Capa de Moscas",
    description: `Como acción adicional, puedes rodearte de un aura mágica con apariencia de moscas zumbando. Esta cubre un área de 5 pies alrededor de ti en todas direcciones, pero no atraviesa la cobertura completa. Dura hasta que quedes incapacitado o la des por terminada usando una acción adicional. El aura te otorga ventaja en las pruebas de Carisma (Intimidación) y desventaja en todo el resto de pruebas de Carisma. Cualquier otra criatura que comience su turno en el área recibe tanto daño de veneno como tu modificador de Carisma (mínimo 0 de daño). Una vez utilizada esta invocación, deberás terminar un descanso corto o largo para poder volver a usarla.`,
  },
  invocation_eldritch_smite: {
    name: "Castigo Arcano",
    description: `Una vez por turno, cuando impactas a una criatura con tu arma de pacto, puedes utilizar un espacio de conjuro de brujo para infligir 1d8 de daño de fuerza adicional, más 1d8 por cada nivel del espacio de conjuro empleado. Además, si el objetivo es de tamaño Enorme o menor, puedes derribarlo.`,
  },
  invocation_ghostly_gaze: {
    name: "Mirada Fantasmal",
    description: `Como acción, obtienes la habilidad de ver a través de objetos sólidos situados hasta a 30 pies de distancia. Dentro de ese alcance, además, tienes visión en la oscuridad si no la tenías ya. Esta vista especial dura 1 minuto o hasta que acabe tu concentración (como si te estuvieras concentrando en un conjuro). Durante ese tiempo, percibes los objetos como imágenes fantasmales, transparentes. Una vez utilizada esta invocación, deberás terminar un descanso corto o largo para poder volver a usarla.`,
  },
  invocation_gift_of_the_depths: {
    name: "Don de las Profundidades",
    description: `Puedes respirar bajo el agua y ganas una velocidad nadando igual a tu velocidad caminando. También puedes lanzar respirar bajo el agua una vez sin gastar un espacio de conjuro. Recuperas la capacidad para hacerlo tras finalizar un descanso largo.`,
  },
  invocation_gift_of_the_ever_living_ones: {
    name: "Don de los Siempre Vivos",
    description: `Cuando recuperes puntos de golpe y tu familiar esté a 100 pies o menos de ti, trata el resultado de cualquier dado tirado para determinar los puntos de golpe que recuperas como si hubiera obtenido el máximo resultado.`,
  },
  invocation_grasp_of_hadar: {
    name: "Agarre de Hadar",
    description: `Una vez en cada uno de tus turnos, cuando impactes a una criatura con tu descarga sobrenatural, puedes mover a ese objetivo en línea recta 10 pies acercándolo a ti.`,
  },
  invocation_improved_pact_weapon: {
    name: "Arma de Pacto Mejorada",
    description: `Puedes usar cualquier arma que invoques con tu rasgo Pacto del Filo como canalizador mágico para tus conjuros de brujo. Además, el arma gana un bonificador de +1 a sus tiradas de ataque y daño, a menos que esta sea mágica y ya tenga un bonificador a esas tiradas. Por último, el arma que conjuras puede ser un arco corto, arco largo, ballesta ligera o ballesta pesada.`,
  },
  invocation_lance_of_lethargy: {
    name: "Lanza de Letargo",
    description: `Una vez en cada uno de tus turnos, cuando impactes a un objetivo con tu descarga sobrenatural, puedes reducir la velocidad de esa criatura en 10 pies hasta el final de tu próximo turno.`,
  },
  invocation_maddening_hex: {
    name: "Maldición Enloquecedora",
    description: `Como acción adicional, causas una perturbación psíquica alrededor de una criatura afectada por tu conjuro maleficio o por uno de tus rasgos de Brujo, como la Marca del Mal Augurio o la Maldición del Filo Maléficco. Cuando lo hagas, infliges daño psíquico al objetivo y a cada criatura de tu elección que puedas ver y esté a 5 pies o menos de él. El daño psíquico es igual a tu modificador de Carisma (mínimo 1 de daño). Para utilizar esta invocación, debes ser capaz de ver al objetivo maldito, que ha de encontrarse a 30 pies o menos de ti.`,
  },
  invocation_relentless_hex: {
    name: "Maldición Implacable",
    description: `Tu maldición crea un vínculo temporal entre ti y tu objetivo. Como acción adicional, puedes teletransportarte mágicamente hasta 30 pies a un espacio libre que puedas ver y se encuentre a 5 pies o menos del objetivo maldito por tu conjuro de maleficio o por uno de tus rasgos de Brujo, como la Marca del Mal Augurio o la Maldición del Filo Maléfico. Para teletransportarte de esta manera, debes ser capaz de ver al objetivo.`,
  },
  invocation_shroud_of_shadow: {
    name: "Sudario de Sombras",
    description: `Puedes lanzar 'Invisibilidad' a voluntad, sin utilizar un espacio de conjuro.`,
  },
  invocation_tomb_of_levistus: {
    name: "Tumba de Levistus",
    description: `Como reacción cuando recibes daño, puedes encerrarte en un bloque de hielo, que se derretirá al final de tu próximo turno. Obtienes 10 puntos de golpe temporales por cada nivel de brujo, que absorben todo el daño que sea posible del ataque. Inmediatamente después de recibir el daño, te vuelves vulnerable al daño de fuego, tu velocidad se reduce a 0 y quedas incapacitado. Estos efectos, incluyendo cualesquiera puntos de golpe temporales que quedaran, terminan cuando el hielo se derrita. Una vez utilizada esta invocación, deberás terminar un descanso corto o largo para poder volver a usarla.`,
  },
  invocation_trickster_escape: {
    name: "Huida Sagaz",
    description: `Puedes lanzar 'Libertad de Movimiento' una vez sobre ti mismo sin utilizar un espacio de conjuro. Recuperas la capacidad para hacerlo tras finalizar un descanso largo.`,
  },

  // TCE
  invocation_bond_of_the_talisman: {
    name: "Vínculo del Talismán",
    description: `Mientras alguien lleve puesto tu talismán, puedes usar tu acción para teletransportarte al espacio sin ocupar más cercano al portador, siempre que ambos estéis en el mismo plano de existencia. El portador de tu talismán puede hacer lo mismo, usando su acción para teletransportarse hasta donde tú estés. Este teletransporte se puede usar una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  invocation_eldritch_mind: {
    name: "Mente Sobrenatural",
    description: `Tienes ventaja en las tiradas de salvación de Constitución que realices para mantener la concentración en un conjuro.`,
  },
  invocation_far_scribe: {
    name: "Escriba Lejano",
    description: `Aparece una nueva página en tu Libro de las Sombras. Con tu permiso, una criatura puede usar su acción para escribir su nombre en esa página, que puede contener una cantidad de nombres igual a tu bonificador por competencia.
      Puedes lanzar el conjuro Recado y hacer objetivo a una criatura cuyo nombre esté en la página, sin usar un espacio de conjuro y sin gastar componentes materiales. Para ello, debes escribir el mensaje en la página. El objetivo escuchará el mensaje en su mente y, si responde, dicho mensaje aparecerá en la página, no en tu mente. Las palabras desaparecerán al cabo de 1 minuto.
      Como acción, puedes borrar mágicamente un nombre de la página tocándolo.`,
  },
  invocation_gift_of_the_protectors: {
    name: "Don de los Protectores",
    description: `Aparece una nueva página en tu Libro de las Sombras. Con tu permiso, una criatura puede usar su acción para escribir su nombre en esa página, que puede contener una cantidad de nombres igual a tu bonificador por competencia.
      Cuando los puntos de golpe de cualquier criatura cuyo nombre esté en la página se reduzcan a 0, pero no muera, en vez de eso pasará a tener 1 punto de golpe mágicamente. Cuando esta magia se active, ninguna criatura podrá beneficiarse de ella hasta que finalices un descanso largo.
      Como acción, puedes borrar mágicamente un nombre de la página tocándolo.`,
  },
  invocation_investment_of_the_chain_master: {
    name: "Inversión del Amo de las Cadenas",
    description: `Cuando lanzas Encontrar familiar, imbuyes al familiar invocado de una cierta cantidad de tu poder sobrenatural, otorgando a la criatura los siguientes beneficios:
      - El familiar obtiene una velocidad volando o una velocidad nadando (a tu elección) de 40 pies.
      - Como acción adicional, puedes ordenar al familiar que realice la acción de Atacar.
      - Los ataques con arma del familiar se consideran mágicos en lo que respecta a ignorar la inmunidad y la resistencia a ataques no mágicos.
      - Si el familiar obliga a una criatura a realizar una tirada de salvación, esta utiliza tu CD de salvación de conjuros.
      - Cuando el familiar recibe daño, puedes usar tu reacción para otorgarle resistencia contra ese daño.`,
  },
  invocation_protection_of_the_talisman: {
    name: "Protección del Talismán",
    description: `Cuando el portador de tu talismán falla una tirada de salvación, puede añadir un d4 a la tirada, lo que puede convertirla en un éxito. Este beneficio se puede usar una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  invocation_rebuke_of_the_talisman: {
    name: "Repulsión del Talismán",
    description: `Cuando el portador de tu talismán recibe el impacto de un atacante que puedas ver a 30 pies o menos de ti, puedes usar tu reacción para infligir un daño psíquico al atacante igual a tu bonificador por competencia y empujarlo para alejarlo hasta a 10 pies del portador del talismán.`,
  },
  invocation_undying_servitude: {
    name: "Servidumbre Eterna",
    description: `Puedes lanzar 'Animar a los Muertos' sin gastar un espacio de conjuro. Una vez lo lances, no podrás volver a hacerlo hasta que finalices un descanso largo.`,
  },
};

export const warlock_features_es: GameLocalizationCategory = {
  ...invocations,
  ...subclass_features,
  ...boon_actions,

  pact_magic: {
    name: "Magia del Pacto",
    description: `Tu investigación arcana y la magia que te otorga tu patrón te han dado la capacidad de lanzar conjuros.
      Trucos
        Conoces dos trucos de tu elección de la lista de conjuros de brujo. Aprendes trucos de brujo adicionales de tu elección en niveles superiores, como se indica en la columna «Trucos» de la tabla del brujo.
      Espacios de conjuro
        La tabla del brujo muestra cuántos espacios de conjuro tienes y de qué nivel son (todos del mismo). Para lanzar un conjuro de brujo de nivel 1 o superior, debes gastar un espacio de conjuro. Recuperas todos los espacios de conjuro que hayas gastado cuando termines un descanso prolongado o breve. Por ejemplo, al nivel 5 tienes dos espacios de conjuro de nivel 3. Para lanzar el conjuro de nivel 1 Onda atronadora debes gastar uno de esos espacios y lanzarlo como un conjuro de nivel 3.
      Conjuros conocidos de nivel 1 y superior
        En el nivel 1, conoces al menos dos conjuros de nivel 1 de tu elección de la lista de conjuros de brujo.
        La columna «Conjuros» de la tabla del brujo muestra cuándo aprendes nuevos conjuros. Los conjuros no pueden ser de un nivel superior al que se muestra en la columna «Nivel de los espacios» para tu nivel. Cuando llegues al nivel 6, por ejemplo, puedes aprender nuevos conjuros de brujo, que pueden ser de nivel 1, 2 o 3.
        Además, cuando subes de nivel en esta clase, puedes remplazar uno de los conjuros de brujo que conoces por otro conjuro de brujo de un nivel para el que tengas espacios de conjuro.
      Característica para lanzar conjuros
        La característica con la que lanzas tus conjuros de brujo es Carisma. Usas Carisma cuando un conjuro se refiere a tu característica para lanzar conjuros. Además, usas tu modificador por Carisma para establecer la CD de la tirada de salvación para los conjuros de brujo que lances y cuando hagas una tirada de ataque con uno.
          CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Carisma
          Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Carisma
      Foco para lanzar conjuros
        Puedes usar un foco arcano como foco para lanzar tus conjuros de brujo.`,
  },
  otherworldly_patron: {
    name: "Patrón de Otro Mundo",
    description:
      "Has firmado un pacto con un ser de otro mundo de tu elección. Tu elección te proporciona rasgos en el nivel 1 y nuevamente en los niveles 6, 10 y 14.",
  },
  eldritch_invocations: {
    name: "Invocaciones Sobrenaturales",
    description: `Mientras estudiabas el saber oculto, has descubierto invocaciones sobrenaturales, fragmentos de conocimiento prohibido que te imbuyen con una capacidad mágica duradera.
      Consigues dos invocaciones sobrenaturales de tu elección. Obtienes una selección adicional en niveles superiores de esta clase: 3 a nivel 5, 4 a nivel 7, 5 a nivel 9, 6 a nivel 12, 7 a nivel 15 y 8 a nivel 18.
      Además, cuando subas de nivel en esta clase, puedes remplazar una de las invocaciones que conoces por otra invocación que podrías aprender en ese nivel.`,
  },
  pact_boon: {
    name: "Don del Pacto",
    description: `Tu patrón te otorga un don por tu leal servicio. Consigues rasgos de tu elección de Don del Pacto.`,
  },
  mystic_arcanum: {
    name: "Arcano Místico",
    description: `Tu patrón te otorga un secreto mágico llamado 'arcano'. Elige un conjuro del nivel indicado de la lista de conjuros de brujo como este arcano. Puedes lanzarlo una vez sin gastar un espacio de conjuro. Debes terminar un descanso prolongado para poder utilizarlo de nuevo.
      En niveles superiores, consigues más conjuros de brujo de tu elección que se pueden lanzar de este modo.`,
  },
  eldritch_master: {
    name: "Maestro Sobrenatural",
    description: `Puedes usar tu reserva interna de poder místico cuando le implores a tu patrón para recuperar los espacios de conjuro gastados. Puedes dedicar 1 minuto a implorar ayuda a tu patrón para recuperar todos los espacios de conjuro que hayas gastado de tu rasgo Magia del pacto. Una vez recuperas los espacios de conjuro gastados con ese rasgo, debes terminar un descanso prolongado antes de poder hacerlo de nuevo.`,
  },
};
