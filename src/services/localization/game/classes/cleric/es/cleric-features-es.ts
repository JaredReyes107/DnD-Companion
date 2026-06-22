import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_features_es } from "../subclasses/knowledge/es/knowledge-features-es";
import { life_features_es } from "../subclasses/life/es/life-features-es";
import { light_features_es } from "../subclasses/light/es/light-features-es";
import { nature_features_es } from "../subclasses/nature/es/nature-features-es";
import { tempest_features_es } from "../subclasses/tempest/es/tempest-features-es";
import { trickery_features_es } from "../subclasses/trickery/es/trickery-features-es";
import { war_features_es } from "../subclasses/war/es/war-features-es";

import { forge_features_es } from "../subclasses/forge/es/forge-features-es";
import { grave_features_es } from "../subclasses/grave/es/grave-features-es";

const subclass_features: GameLocalizationCategory = {
  // PHB
  ...knowledge_features_es,
  ...life_features_es,
  ...light_features_es,
  ...nature_features_es,
  ...tempest_features_es,
  ...trickery_features_es,
  ...war_features_es,

  // Xanathar's
    ...forge_features_es,
    ...grave_features_es,

  // Tasha's
};

export const cleric_features_es: GameLocalizationCategory = {
  spellcasting: {
    name: "Lanzamiento de Conjuros",
    description: `Puedes lanzar conjuros de clérigo como conducto del poder divino.
    En el nivel 1, sabes tres trucos de tu elección de la lista de conjuros de clérigo. En niveles superiores aprenderás más, como se muestra en la columna «Trucos» de la tabla del clérigo.
    La tabla del clérigo muestra cuántos espacios de conjuro tienes para lanzar tus conjuros. Para hacerlo, debes gastar un espacio del mismo nivel que el conjuro o de nivel superior. Cuando termines un descanso prolongado, recuperas todos los espacios de conjuro que hayas gastado.
    Tú preparas la lista de los conjuros que puedes lanzar: elige un número de conjuros de clérigo igual a tu modificador por Sabiduría + tu nivel de clérigo (mínimo un conjuro). Los conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un clérigo de nivel 3, tienes cuatro espacios de conjuro de nivel 1 y dos espacios de conjuro de nivel 2. Con Sabiduría 16, tu lista de conjuros preparados puede incluir seis conjuros de nivel 1 o 2, en cualquier combinación. Si preparas el conjuro de nivel 1 Curar heridas, lo puedes lanzar usando un espacio de nivel 1 o de nivel 2. Lanzar el conjuro no lo elimina de tu lista de conjuros preparados.
    Puedes cambiar tu lista de conjuros preparados durante un descanso prolongado. Preparar una nueva lista de conjuros de clérigo requiere pasar tiempo orando y meditando: al menos 1 minuto por nivel de conjuro para cada uno.
    Característica para lanzar conjuros
    La característica con la que lanzas tus conjuros de clérigo es Sabiduría. El poder de tus conjuros proviene de la devoción que profesas hacia tu deidad. Cuando un conjuro se refiere a tu característica para lanzar conjuros, utiliza Sabiduría. Además, usas tu modificador por Sabiduría para establecer la CD de la tirada de salvación de los conjuros de clérigo que lances y cuando hagas una tirada de ataque con uno.
      CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Sabiduría
      Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Sabiduría
    Puedes lanzar un conjuro de clérigo como ritual si tiene la etiqueta de ritual y tienes el conjuro preparado. Puedes usar un símbolo sagrado como foco para lanzar tus conjuros de clérigo.`,
  },
  divine_domain: {
    name: "Dominio Divino",
    description: "Sigues uno de los dominios de tu elección entre el dominio de la vida, el del descubrimiento, el de la conquista, el de lo salvaje, el del sol, el de la oscuridad y el de la prosperidad (detallados al final de la descripción de esta clase), que te otorga conjuros de dominio y otros rasgos a partir del nivel 1. También te otorga otras formas de usar Canalizar divinidad cuando consigas dicho rasgo en el nivel 2, así como beneficios adicionales en los niveles 6, 8 y 17.",
  },
  channel_divinity: {
    name: "Canalizar Divinidad",
    description: `A partir del nivel 2, ganas la habilidad de canalizar energía divina directamente desde tu deidad, usando esa energía para alimentar efectos mágicos. Comienzas con dos efectos: Expulsar Muertos Vivientes y un efecto determinado por tu dominio. Algunos dominios te otorgan efectos adicionales conforme consigues más niveles, como lo detalla la descrupción del dominio.
      Cuando usas tu Canalizar Divinidad, tú elgies que efecto creat. Debes terminar un descanso corto o largo para usar tu Canalizar Divinidad de nuevo.
      Algunos efectos de Canalizar Divindad requieren tiradas de salvación. Cuando usas tal efecto de esta clase, el CD es igual a tu CD de salvación de conjuros de clérigo.
      A partir del nivel 6, puedes usar tu Canalizar Divinidad dos veces entre descansos y tres veces a partir de nivel 18.`
  },      
  channel_divinity_turn_undead: {
    name: "Canalizar Divinidad: Expulsar Muertos Vivientes",
    description: `Como acción, presentas tu símbolo sagrado y dices una oración para expulsar a los muertos vivientes. Cada muerto que te vea o te escuche en un radio de 30 pies debe hacer una tirada de salvación de Sabiduría. Si falla, es expulsado durante un minuto o hasta que reciba daño.
      Una criatura expulsada debe dedicar su turno a intentar moverse tan lejos de ti como pueda. No puede moverse voluntariamente a un espacio que se encuentre a menos de 30 pies de ti ni realizar reacciones. Durante su acción, solo puede realizar la acción de esprintar o intentar escapar del efecto que le impida moverse. Si no hay ningún lugar al que pueda moverse, puede usar la acción esquivar.`,
  },
  channel_divinity_harness_divine_power: {
    name: "Canalizar Divinidad: ",
    description: "A partir de nivel 2, puedes usar una carga de tu Canalizar Divinidad para alimentar tus conjuros. Como acción adicional, tocas tu símbolo sagrado, dices una oración y recuperas un espacio de conjuro gastado cuyo nivel no sea mayor a la mitdad de tu bonificador de competencia (redondeado hacia arriba). ",
  },
  divine_domain_feature: {
    name: "Característica de Dominio Divino",
    description: "",
  },
  ability_score_improvement: {
    name: "Mejora de Característica",
    description: "Cuando  alcanzas nivel 4, 8, 12, 16 y 19, puedes incrementar una puntuación de características de tu elección en 2 o incrementar dos puntuaciones de características de tu elección en 1. No puedes incrementar una puntuación de característica por encima de 20 usando esta característica.",
  },
  cantrip_versatility: {
    name: "",
    description: "",
  },
  destroy_undead: {
    name: "",
    description: "A partir del nivel 5, cuando un muerto viviente falle su tirada de salvación contra tu rasgo de Expulsar muertos vivientes, la criatura se destruirá instantáneamente si su valor de desafío es igual o inferior al umbral siguiente:",
  },
  divine_intervention: {
    name: "Intervención Divina",
    description: `Puedes solicitar a tu deidad que interceda por ti en momentos de gran necesidad. Para implorar el auxilio de tu dios es necesario que utilices tu acción. Describe el tipo de ayuda que solicitas y tira 1d100. Si sacas un resultado igual o inferior a tu nivel de clérigo, tu deidad intercederá. El DM decide la naturaleza exacta de la intercesión; el efecto de cualquier conjuro de clérigo o de dominio, por ejemplo, sería un resultado apropiado.
      Si la divinidad interviene, no podrás volver a emplear este rasgo durante 7 días. Si no, puedes volver a usarlo tras finalizar un descanso largo.
      A nivel 20 tu petición de auxilio tiene éxito automáticamente, no es necesario tirar.`,
  },

  ...subclass_features,
};
